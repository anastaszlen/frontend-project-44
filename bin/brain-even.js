#!/usr/bin/env node

import playGame from '../src/index.js';
import getEvenRound from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

playGame(description, getEvenRound);