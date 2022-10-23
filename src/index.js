import readlineSync from 'readline-sync';

import {
  generateTwoNumbersAndSign,
  calcCorrectAnswerCalcgame,
  showCalcGameQuestion,
  showCalcRuleMessage,
} from '../games/brain-calc-logic.js';

import {
  generateRandomNumber,
  calcCorrectAnswerEvengame,
  showEvenGameQuestion,
  showEvenRuleMessage,
} from '../games/brain-even-logic.js';

import {
  findGreatCommonDivider,
  generateRandNumsForGCD,
  showGCDRuleMessage,
  showGCDGameQuestion,
} from '../games/brain-gcd-logic.js';

import {
  generateProgression,
  showProgGameRuleMsg,
  makeProgForOutput,
  saveMissingNumber,
} from '../games/brain-progr-logic.js';

let isWon = true;

// common format for 3 games: [number1, number2, 'sign']. [array, num] for 4th:
let generatedRandomResult;

let correctAnswerResult;
let successfullTries = 0;

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const showRulesMessage = (gameName) => {
  if (gameName === 'even') showEvenRuleMessage();
  if (gameName === 'calc') showCalcRuleMessage();
  if (gameName === 'gcd') showGCDRuleMessage();
  if (gameName === 'prog') showProgGameRuleMsg();
};

const generateRandomThings = (gameName) => {
  let randomThings;

  if (gameName === 'calc') {
    randomThings = generateTwoNumbersAndSign();
  }

  if (gameName === 'even') {
    randomThings = generateRandomNumber();
  }

  if (gameName === 'gcd') {
    randomThings = generateRandNumsForGCD();
  }

  if (gameName === 'prog') {
    randomThings = generateProgression();
  }

  return randomThings;
};

const whatIsCorrectAnswer = (gameName) => {
  let correctAnswer;

  if (gameName === 'calc') {
    correctAnswer = calcCorrectAnswerCalcgame(generatedRandomResult);
  }

  if (gameName === 'even') {
    correctAnswer = calcCorrectAnswerEvengame(generatedRandomResult);
  }

  if (gameName === 'gcd') {
    correctAnswer = findGreatCommonDivider(generatedRandomResult);
  }

  if (gameName === 'prog') {
    correctAnswer = saveMissingNumber(generatedRandomResult[0], generatedRandomResult[1]);
  }

  return correctAnswer;
};

// to refactor, probably:
const askPlayer = (gameName, playerName) => {
  if (gameName === 'calc') showCalcGameQuestion(generatedRandomResult);
  if (gameName === 'even') showEvenGameQuestion(generatedRandomResult);
  if (gameName === 'gcd') showGCDGameQuestion(generatedRandomResult);
  if (gameName === 'prog') makeProgForOutput(generatedRandomResult[0], generatedRandomResult[1]);

  const playerAnswer = readlineSync.question('Your answer: ');
  const tryAgainMessage = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerResult}'.\nLet's try again, ${playerName}!`;
  if (playerAnswer === String(correctAnswerResult)) {
    successfullTries += 1;
    return console.log('Correct!');
  }

  successfullTries = 3;
  isWon = false;
  return console.log(tryAgainMessage);
};

// main function that start the game logic depending on name of the game:
export const startGame = (gameName) => {
  const playerName = greetUser();
  showRulesMessage(gameName);

  while (successfullTries < 3) {
    generatedRandomResult = generateRandomThings(gameName);
    correctAnswerResult = whatIsCorrectAnswer(gameName);
    askPlayer(gameName, playerName);
  }

  if (isWon === true) console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
