import readlineSync from 'readline-sync';

import {
  generateTwoNumbersAndSign,
  showCalcRuleMessage,
  calcCorrectAnswerCalcgame,
  showCalcGameQuestion,
} from './brain-calc-logic.js';

import {
  generateRandomNumber,
  showEvenRuleMessage,
  calcCorrectAnswerEvengame,
  showEvenGameQuestion,
} from './brain-even-logic.js';

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
  if (gameName === 'even') showEvenRuleMessage(generatedRandomResult);
  if (gameName === 'calc') showCalcRuleMessage(generatedRandomResult);
};

const generateRandomThings = (gameName) => {
  let randomThings;

  if (gameName === 'calc') {
    randomThings = generateTwoNumbersAndSign();
  }

  if (gameName === 'even') {
    randomThings = generateRandomNumber();
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

  return correctAnswer;
};

// to refactor and to module:
const askPlayer = (gameName, playerName) => {
  if (gameName === 'calc') showCalcGameQuestion(generatedRandomResult);
  if (gameName === 'even') showEvenGameQuestion(generatedRandomResult);

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
