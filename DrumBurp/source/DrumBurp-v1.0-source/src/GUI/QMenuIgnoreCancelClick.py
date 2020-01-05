# Copyright 2011-12 Michael Thomas
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
'''
Created on 19 Jan 2011

@author: Mike Thomas

'''

from PyQt4.QtGui import QMenu
from functools import wraps
from GUI.DBFSMEvents import MenuCancel, MenuSelect

class QMenuIgnoreCancelClick(QMenu):
    @staticmethod
    def menuSelection(method):
        @wraps(method)
        def wrapper(self, *args, **kwargs):
            val = method(self, *args, **kwargs)
            self._qScore.sendFsmEvent(MenuSelect())  # IGNORE:protected-access
            return val
        return wrapper


    def __init__(self, qScore, parent = None):
        super(QMenuIgnoreCancelClick, self).__init__(parent)
        self._qScore = qScore
        self._props = self._qScore.displayProperties
        self.aboutToHide.connect(self._checkGoodSelection)

    def _checkGoodSelection(self):
        if self.activeAction() == None:
            self._qScore.ignoreNextClick()
            self._qScore.sendFsmEvent(MenuCancel())

