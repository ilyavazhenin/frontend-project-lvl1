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

let isWon = true;
let generatedRandomResult; // common format to all games: [number, number, 'sign']
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

  return correctAnswer;
};

// to refactor and to module:
const askPlayer = (gameName, playerName) => {
  if (gameName === 'calc') showCalcGameQuestion(generatedRandomResult);
  if (gameName === 'even') showEvenGameQuestion(generatedRandomResult);
  if (gameName === 'gcd') showGCDGameQuestion(generatedRandomResult);

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

// main function that start the game logic depending on name of the game as an argument:
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
