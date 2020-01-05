# Copyright 2015 Michael Thomas
#
# See www.whatang.org for more information.
#
# This file is part of DrumBurp.
#
# DrumBurp is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# DrumBurp is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with DrumBurp.  If not, see <http://www.gnu.org/licenses/>

import weakref

from Data import DBErrors
from Data.fileUtils import (FileStructure, PositiveIntegerField,
                            SimpleValueField, Field, StringField,
                            NonNegativeIntegerField, BooleanField,
                            NoWriteField, NoReadField, conditionalWriteField,
                            YesNoField)

import Data.Beat
import Data.MeasureCount
import Data.NotePosition
import Data.Measure
import Data.Drum
import Data.DrumKit
import Data.ScoreMetaData
import Data.FontOptions
import Data.DBConstants
import Data.DefaultKits
from Data.Counter import CounterRegistry
import Data.Score

class CounterFieldV0(SimpleValueField):
    registry = CounterRegistry()
    def _processData(self, data):
        if data[0] == "|" and data[-1] == "|":
            data = data[1:-1]
        data = Data.DBConstants.BEAT_COUNT + data[1:]
        try:
            return self.registry.findMaster(data)
        except KeyError:
            raise DBErrors.BadCount()

    def _toString(self, counter):
        return "|" + str(counter) + "|"

class BeatStructureV0(FileStructure):
    tag = "BEAT"
    startTag = "BEAT_START"
    endTag = "BEAT_END"

    numTicks = conditionalWriteField(PositiveIntegerField('NUM_TICKS'),
                                     lambda beat: beat.isPartial())
    counter = CounterFieldV0("COUNT")

    def postProcessObject(self, instance):
        return Data.Beat.Beat(instance["counter"], instance.get("numTicks"))

class MeasureCountStructureV0(FileStructure):
    tag = "COUNT_INFO"
    startTag = "COUNT_INFO_START"
    endTag = "COUNT_INFO_END"

    repeat = conditionalWriteField(PositiveIntegerField('REPEAT_BEATS',
                                                        getter = lambda count: count.numBeats()),
                                   lambda count: count.isSimpleCount())
    beats = BeatStructureV0(singleton = False,
                            getter = lambda count: ([count.beats[0]] if
                                                    count.isSimpleCount()
                                                    else count.beats))

    def postProcessObject(self, instance):
        mCount = Data.MeasureCount.MeasureCount()
        if 'repeat' not in instance:
            instance["repeat"] = 1
        mCount.beats = instance["beats"] * instance["repeat"]
        return mCount

class NoteFieldV0(Field):
    def read(self, target, data):
        noteTime, drumIndex, head = data.split(",")
        pos = Data.NotePosition.NotePosition(noteTime = int(noteTime),
                                             drumIndex = int(drumIndex))
        target.addNote(pos, head)

    def write(self, noteAndHead):
        pos, head = noteAndHead
        yield self.format("%s,%s,%s" % (pos.noteTime, pos.drumIndex, head))

class BeatLengthFieldV0(NoWriteField):
    def read(self, target, data):
        target.counter = Data.MeasureCount.counterMaker(int(data),
                                                        len(target))

def startBarlineString(measure):
    return ",".join([name for name, value in
                     Data.DBConstants.BAR_TYPES.iteritems()
                     if (measure.startBar & value) == value])

def endBarlineString(measure):
    return ",".join([name for name, value in
                     Data.DBConstants.BAR_TYPES.iteritems()
                     if (measure.endBar & value) == value])


class BarlineReadFieldV0(NoWriteField):
    mapping = {Data.DBConstants.NO_BAR: lambda x, y: True,
               Data.DBConstants.NORMAL_BAR: lambda x, y: True,
               Data.DBConstants.REPEAT_START: Data.Measure.Measure.setRepeatStart,
               Data.DBConstants.REPEAT_END_STR: Data.Measure.Measure.setRepeatEnd,
               Data.DBConstants.SECTION_END: Data.Measure.Measure.setSectionEnd,
               Data.DBConstants.LINE_BREAK: Data.Measure.Measure.setLineBreak}

    def __init__(self, title, attributeName = None, singleton = True):
        super(BarlineReadFieldV0, self).__init__(title, attributeName, singleton)
        self.seenStartLine = weakref.WeakSet()
        self.seenEndLine = weakref.WeakSet()

    def read(self, target, lineData):
        if target not in self.seenStartLine:
            target.startBar = 0
            for barType in lineData.split(","):
                self.mapping[barType](target, True)
            self.seenStartLine.add(target)
        elif target not in self.seenEndLine:
            target.endBar = 0
            for barType in lineData.split(","):
                self.mapping[barType](target, True)
            self.seenEndLine.add(target)
        else:
            raise DBErrors.TooManyBarLines()

class BarlineFieldWriteV0(NoReadField):
    def __init__(self, title, attributeName = None, singleton = True,
                 getter = None):
        super(BarlineFieldWriteV0, self).__init__(title, attributeName,
                                                  singleton, getter)

    def write(self, barlineString):
        yield "BARLINE %s" % barlineString

class MeasureStructureV0(FileStructure):
    tag = "BAR"
    targetClass = Data.Measure.Measure

    counter = MeasureCountStructureV0()
    startBarLine = BarlineFieldWriteV0(" STARTBARLINE",
                                       getter = startBarlineString)
    barlines = BarlineReadFieldV0("BARLINE")
    notes = NoteFieldV0("NOTE", getter = list, singleton = False)
    endBarLine = BarlineFieldWriteV0(" ENDBARLINE",
                                     getter = endBarlineString)
    beatLength = BeatLengthFieldV0("BEATLENGTH")
    repeatCount = conditionalWriteField(PositiveIntegerField("REPEAT_COUNT"),
                                        lambda measure: measure.repeatCount > 1)
    alternateText = StringField("ALTERNATE")
    hasSimile = lambda measure: measure.simileDistance > 0
    simileDistance = conditionalWriteField(NonNegativeIntegerField("SIMILE"),
                                           hasSimile)
    simileIndex = conditionalWriteField(NonNegativeIntegerField("SIMINDEX"),
                                        hasSimile)

    def makeObject(self, objectData):
        return self.targetClass(int(objectData))

    def startTagData(self, source):
        return str(len(source))

class MetadataStructureV0(FileStructure):
    tag = "SCORE_METADATA"
    startTag = "SCORE_METADATA"
    targetClass = Data.ScoreMetaData.ScoreMetaData

    title = StringField("TITLE")
    artist = StringField("ARTIST")
    artistVisible = BooleanField("ARTISTVISIBLE")
    creator = StringField("CREATOR")
    creatorVisible = BooleanField("CREATORVISIBLE")
    bpm = PositiveIntegerField("BPM")
    bpmVisible = BooleanField("BPMVISIBLE")
    width = PositiveIntegerField("WIDTH")
    kitDataVisible = BooleanField("KITDATAVISIBLE")
    metadataVisible = BooleanField("METADATAVISIBLE")
    beatCountVisible = BooleanField("BEATCOUNTVISIBLE")
    emptyLinesVisible = BooleanField("EMPTYLINESVISIBLE")
    measureCountsVisible = BooleanField("MEASURECOUNTSVISIBLE")

class DrumFieldV0(Field):
    def read(self, target, data):
        fields = data.split(",")
        if len(fields) > 3:
            fields[3] = (fields[3] == "True")
            if len(fields) > 4:
                fields = fields[:3]
        drum = Data.Drum.Drum(*fields)
        target.addDrum(drum)

    def write(self, src):
        yield self.format("%s,%s,%s,%s" %
                          (src.name, src.abbr, src.head, str(src.locked)))
        for head in src:
            data = src.headData(head)
            dataString = "%s %d,%d,%s,%s,%d,%s,%d,%s" % (head, data.midiNote,
                                                          data.midiVolume,
                                                          data.effect,
                                                          data.notationHead,
                                                          data.notationLine,
                                                          data.notationEffect,
                                                          data.stemDirection,
                                                          data.shortcut)
            yield "  NOTEHEAD %s" % dataString

class NoteHeadFieldV0(NoWriteField):
    @staticmethod
    def _guessNotation(abbr, head):
        for drumInfo in Data.DefaultKits.DEFAULT_KIT:
            if drumInfo[0][1] == abbr:
                nHead, nLine, sDir = drumInfo[-3:]
                nEffect = "none"
                break
        else:
            return ["default", 0, "none", Data.DefaultKits.STEM_UP]
        for headInfo in Data.DefaultKits.DEFAULT_EXTRA_HEADS[abbr]:
            if headInfo[0] == head:
                nHead, nEffect = headInfo[4:6]
        return nHead, nLine, nEffect, sDir

    @staticmethod
    def readHeadData(abbr, dataString):
        head, data = dataString.split(None, 1)
        fields = data.split(",")
        note, volume, effect = fields[:3]
        note = int(note)
        volume = int(volume)
        shortcut = ""
        if len(fields) > 3:
            nHead, nLine, nEffect, sDir = fields[3:7]
            nLine = int(nLine)
            sDir = int(sDir)
            if len(fields) > 7:
                shortcut = fields[7]
        else:
            nHead, nLine, nEffect, sDir = NoteHeadFieldV0._guessNotation(abbr,
                                                                         head)
        return head, Data.Drum.HeadData(note, volume, effect, nHead,
                                        nLine, nEffect, sDir, shortcut)

    def read(self, target, data):
        lastDrum = target[-1]
        head, headData = self.readHeadData(lastDrum.abbr, data)
        lastDrum.addNoteHead(head, headData)

class DrumKitStructureV0(FileStructure):
    tag = "KIT"
    startTag = "KIT_START"
    endTag = "KIT_END"
    targetClass = Data.DrumKit.DrumKit

    drums = DrumFieldV0("DRUM", getter = list, singleton = False)
    noteheads = NoteHeadFieldV0("NOTEHEAD")

    def postProcessObject(self, instance):
        for drum in instance:
            if len(drum) == 0:
                self.guessHeadData(drum)
            drum.checkShortcuts()
        return instance

    @staticmethod
    def _guessMidiNote(abbr):
        for drumData, midiNote, x_, y_, z_ in Data.DefaultKits.DEFAULT_KIT:
            if abbr == drumData[1]:
                return midiNote
        return Data.DefaultKits.DEFAULT_NOTE

    @staticmethod
    def guessHeadData(drum):
        midiNote = DrumKitStructureV0._guessMidiNote(drum.abbr)
        for drumInfo in Data.DefaultKits.DEFAULT_KIT:
            if drumInfo[0][1] == drum.abbr:
                notationHead, notationLine, stemDir = drumInfo[-3:]
                break
        else:
            notationHead = "default"
            notationLine = 0
            stemDir = Data.DefaultKits.STEM_UP
        headData = Data.Drum.HeadData(midiNote, notationHead = notationHead,
                                      notationLine = notationLine,
                                      stemDirection = stemDir)
        drum.addNoteHead(drum.head, headData)
        Data.Drum.guessEffect(drum, drum.head)
        for (extraHead,
             newMidi,
             newMidiVolume,
             newEffect,
             newNotationHead,
             newNotationEffect,
             shortcut) in Data.DefaultKits.DEFAULT_EXTRA_HEADS.get(drum.abbr,
                                                                   []):
            if newMidi is None:
                newMidi = midiNote
            if newMidiVolume is None:
                newMidiVolume = headData.midiVolume
            newData = Data.Drum.HeadData(newMidi, newMidiVolume, newEffect,
                                         notationHead = newNotationHead,
                                         notationLine = notationLine,
                                         notationEffect = newNotationEffect,
                                         stemDirection = stemDir,
                                         shortcut = shortcut)
            drum.addNoteHead(extraHead, newData)
        drum.checkShortcuts()


class FontOptionsStructureV0(FileStructure):
    tag = "FONT_OPTIONS"
    startTag = "FONT_OPTIONS_START"
    endTag = "FONT_OPTIONS_END"
    targetClass = Data.FontOptions.FontOptions

    noteFont = StringField("NOTEFONT")
    noteFontSize = PositiveIntegerField("NOTEFONTSIZE")
    sectionFont = StringField("SECTIONFONT")
    sectionFontSize = PositiveIntegerField("SECTIONFONTSIZE")
    metadataFont = StringField("METADATAFONT")
    metadataFontSize = PositiveIntegerField("METADATAFONTSIZE")

class ScoreStructureV0(FileStructure):
    tag = None
    targetClass = Data.Score.Score
    autoMake = True

    scoreData = MetadataStructureV0()
    drumKit = DrumKitStructureV0()
    measures = MeasureStructureV0(singleton = False,
                                  getter = lambda score:list(score.iterMeasures()),
                                  setter = lambda score, msr: score.insertMeasureByIndex(0, measure = msr))
    _sections = StringField("SECTION_TITLE", singleton = False)
    paperSize = StringField("PAPER_SIZE")
    lilysize = PositiveIntegerField("LILYSIZE")
    lilypages = NonNegativeIntegerField("LILYPAGES")
    lilyFill = conditionalWriteField(YesNoField("LILYFILL"),
                                     lambda score:score.lilyFill)
    lilyFormat = NonNegativeIntegerField("LILYFORMAT")
    defaultCount = MeasureCountStructureV0(singleton = True,
                                           startTag = "DEFAULT_COUNT_INFO_START")
    systemSpacing = NonNegativeIntegerField("SYSTEM_SPACE")
    fontOptions = FontOptionsStructureV0()

    def postProcessObject(self, instance):
        instance.postReadProcessing()
        return instance
