# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'C:\Users\mike_000\workspace\DrumBurp\src\GUI\dbColours.ui'
#
# Created: Sun Jan 24 00:48:23 2016
#      by: PyQt4 UI code generator 4.11
#
# WARNING! All changes made in this file will be lost!

from PyQt4 import QtCore, QtGui

try:
    _fromUtf8 = QtCore.QString.fromUtf8
except AttributeError:
    def _fromUtf8(s):
        return s

try:
    _encoding = QtGui.QApplication.UnicodeUTF8
    def _translate(context, text, disambig):
        return QtGui.QApplication.translate(context, text, disambig, _encoding)
except AttributeError:
    def _translate(context, text, disambig):
        return QtGui.QApplication.translate(context, text, disambig)

class Ui_ColourPicker(object):
    def setupUi(self, ColourPicker):
        ColourPicker.setObjectName(_fromUtf8("ColourPicker"))
        ColourPicker.resize(919, 620)
        self.verticalLayout = QtGui.QVBoxLayout(ColourPicker)
        self.verticalLayout.setObjectName(_fromUtf8("verticalLayout"))
        self.scrollArea = QtGui.QScrollArea(ColourPicker)
        sizePolicy = QtGui.QSizePolicy(QtGui.QSizePolicy.MinimumExpanding, QtGui.QSizePolicy.Expanding)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.scrollArea.sizePolicy().hasHeightForWidth())
        self.scrollArea.setSizePolicy(sizePolicy)
        self.scrollArea.setWidgetResizable(True)
        self.scrollArea.setObjectName(_fromUtf8("scrollArea"))
        self.colourList = QtGui.QWidget()
        self.colourList.setGeometry(QtCore.QRect(0, 0, 891, 551))
        self.colourList.setObjectName(_fromUtf8("colourList"))
        self.verticalLayout_2 = QtGui.QVBoxLayout(self.colourList)
        self.verticalLayout_2.setObjectName(_fromUtf8("verticalLayout_2"))
        self.frame = QtGui.QFrame(self.colourList)
        self.frame.setFrameShape(QtGui.QFrame.StyledPanel)
        self.frame.setFrameShadow(QtGui.QFrame.Raised)
        self.frame.setObjectName(_fromUtf8("frame"))
        self.textGrid = QtGui.QGridLayout(self.frame)
        self.textGrid.setObjectName(_fromUtf8("textGrid"))
        self.label_7 = QtGui.QLabel(self.frame)
        self.label_7.setMaximumSize(QtCore.QSize(16777215, 30))
        font = QtGui.QFont()
        font.setBold(True)
        font.setItalic(False)
        font.setWeight(75)
        self.label_7.setFont(font)
        self.label_7.setAlignment(QtCore.Qt.AlignRight|QtCore.Qt.AlignTrailing|QtCore.Qt.AlignVCenter)
        self.label_7.setObjectName(_fromUtf8("label_7"))
        self.textGrid.addWidget(self.label_7, 0, 0, 1, 1)
        self.label_8 = QtGui.QLabel(self.frame)
        self.label_8.setMaximumSize(QtCore.QSize(16777215, 30))
        font = QtGui.QFont()
        font.setBold(True)
        font.setItalic(False)
        font.setWeight(75)
        self.label_8.setFont(font)
        self.label_8.setAlignment(QtCore.Qt.AlignRight|QtCore.Qt.AlignTrailing|QtCore.Qt.AlignVCenter)
        self.label_8.setObjectName(_fromUtf8("label_8"))
        self.textGrid.addWidget(self.label_8, 0, 1, 1, 1)
        self.label_10 = QtGui.QLabel(self.frame)
        self.label_10.setMaximumSize(QtCore.QSize(16777215, 30))
        font = QtGui.QFont()
        font.setBold(True)
        font.setItalic(False)
        font.setWeight(75)
        self.label_10.setFont(font)
        self.label_10.setText(_fromUtf8(""))
        self.label_10.setAlignment(QtCore.Qt.AlignRight|QtCore.Qt.AlignTrailing|QtCore.Qt.AlignVCenter)
        self.label_10.setObjectName(_fromUtf8("label_10"))
        self.textGrid.addWidget(self.label_10, 0, 2, 1, 1)
        self.label_9 = QtGui.QLabel(self.frame)
        self.label_9.setMaximumSize(QtCore.QSize(16777215, 30))
        font = QtGui.QFont()
        font.setBold(True)
        font.setItalic(False)
        font.setWeight(75)
        self.label_9.setFont(font)
        self.label_9.setText(_fromUtf8(""))
        self.label_9.setAlignment(QtCore.Qt.AlignRight|QtCore.Qt.AlignTrailing|QtCore.Qt.AlignVCenter)
        self.label_9.setObjectName(_fromUtf8("label_9"))
        self.textGrid.addWidget(self.label_9, 0, 3, 1, 1)
        self.verticalLayout_2.addWidget(self.frame)
        self.frame_2 = QtGui.QFrame(self.colourList)
        self.frame_2.setFrameShape(QtGui.QFrame.StyledPanel)
        self.frame_2.setFrameShadow(QtGui.QFrame.Raised)
        self.frame_2.setObjectName(_fromUtf8("frame_2"))
        self.areaGrid = QtGui.QGridLayout(self.frame_2)
        self.areaGrid.setObjectName(_fromUtf8("areaGrid"))
        self.label_6 = QtGui.QLabel(self.frame_2)
        font = QtGui.QFont()
        font.setBold(True)
        font.setItalic(False)
        font.setWeight(75)
        self.label_6.setFont(font)
        self.label_6.setAlignment(QtCore.Qt.AlignRight|QtCore.Qt.AlignTrailing|QtCore.Qt.AlignVCenter)
        self.label_6.setObjectName(_fromUtf8("label_6"))
        self.areaGrid.addWidget(self.label_6, 0, 0, 1, 1)
        self.label_3 = QtGui.QLabel(self.frame_2)
        font = QtGui.QFont()
        font.setBold(True)
        font.setWeight(75)
        self.label_3.setFont(font)
        self.label_3.setAlignment(QtCore.Qt.AlignCenter)
        self.label_3.setObjectName(_fromUtf8("label_3"))
        self.areaGrid.addWidget(self.label_3, 0, 1, 1, 1)
        self.label_4 = QtGui.QLabel(self.frame_2)
        font = QtGui.QFont()
        font.setBold(True)
        font.setWeight(75)
        self.label_4.setFont(font)
        self.label_4.setAlignment(QtCore.Qt.AlignCenter)
        self.label_4.setObjectName(_fromUtf8("label_4"))
        self.areaGrid.addWidget(self.label_4, 0, 2, 1, 1)
        self.label_5 = QtGui.QLabel(self.frame_2)
        font = QtGui.QFont()
        font.setBold(True)
        font.setWeight(75)
        self.label_5.setFont(font)
        self.label_5.setAlignment(QtCore.Qt.AlignCenter)
        self.label_5.setObjectName(_fromUtf8("label_5"))
        self.areaGrid.addWidget(self.label_5, 0, 3, 1, 1)
        self.verticalLayout_2.addWidget(self.frame_2)
        spacerItem = QtGui.QSpacerItem(20, 40, QtGui.QSizePolicy.Minimum, QtGui.QSizePolicy.Expanding)
        self.verticalLayout_2.addItem(spacerItem)
        self.scrollArea.setWidget(self.colourList)
        self.verticalLayout.addWidget(self.scrollArea)
        self.buttonBox = QtGui.QDialogButtonBox(ColourPicker)
        self.buttonBox.setOrientation(QtCore.Qt.Horizontal)
        self.buttonBox.setStandardButtons(QtGui.QDialogButtonBox.Cancel|QtGui.QDialogButtonBox.Ok|QtGui.QDialogButtonBox.Reset|QtGui.QDialogButtonBox.RestoreDefaults)
        self.buttonBox.setObjectName(_fromUtf8("buttonBox"))
        self.verticalLayout.addWidget(self.buttonBox)

        self.retranslateUi(ColourPicker)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("accepted()")), ColourPicker.accept)
        QtCore.QObject.connect(self.buttonBox, QtCore.SIGNAL(_fromUtf8("rejected()")), ColourPicker.reject)
        QtCore.QMetaObject.connectSlotsByName(ColourPicker)

    def retranslateUi(self, ColourPicker):
        ColourPicker.setWindowTitle(_translate("ColourPicker", "Dialog", None))
        self.label_7.setText(_translate("ColourPicker", "Element", None))
        self.label_8.setText(_translate("ColourPicker", "Text Colour", None))
        self.label_6.setText(_translate("ColourPicker", "Element", None))
        self.label_3.setText(_translate("ColourPicker", "Background Colour", None))
        self.label_4.setText(_translate("ColourPicker", "Border Style", None))
        self.label_5.setText(_translate("ColourPicker", "Border Colour", None))
