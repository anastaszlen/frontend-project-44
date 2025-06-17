#!/usr/bin/env node

import playGame from '../src/index.js';
import getCalcRound from '../src/games/calc.js';

const description = 'What is the result of the expression?';

playGame(description, getCalcRound);