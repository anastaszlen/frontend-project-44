#!/usr/bin/env node

import playGame from '../src/index.js';
import getGcdRound from '../src/games/gcd.js';

const description = 'Find the greatest common divisor of given numbers.';

playGame(description, getGcdRound);