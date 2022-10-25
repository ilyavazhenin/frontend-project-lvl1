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
  showPrimeRuleMessage,
  generateRandomInRange as generateNum,
  isNumberPrime,
  showPrimeGameQuestion,
}
  from '../games/brain-prime-logic.js';

import {
  generateProgression,
  showProgGameRuleMsg,
  makeProgForOutput,
  saveMissingNumber,
} from '../games/brain-progr-logic.js';

// common result format for 3 games: [number1, number2, 'sign']. [array, num] for 4th:
let generatedRandomResult;

let correctAnswerResult;
const ROUNDSCOUNT = 3;
let isWinning = true;
let playerName;
let playerAnswer;

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const showRulesMessage = (gameName) => {
  if (gameName === 'even') showEvenRuleMessage();
  if (gameName === 'calc') showCalcRuleMessage();
  if (gameName === 'gcd') showGCDRuleMessage();
  if (gameName === 'prog') showProgGameRuleMsg();
  if (gameName === 'prime') showPrimeRuleMessage();
};

const generateRandomThings = (gameName) => {
  let randomThings;

  if (gameName === 'calc') randomThings = generateTwoNumbersAndSign();
  if (gameName === 'even') randomThings = generateRandomNumber();
  if (gameName === 'gcd') randomThings = generateRandNumsForGCD();
  if (gameName === 'prog') randomThings = generateProgression();
  if (gameName === 'prime') randomThings = generateNum();
  return randomThings;
};

const whatIsCorrectAnswer = (gameName) => {
  let correctAnswer;

  if (gameName === 'calc') correctAnswer = calcCorrectAnswerCalcgame(generatedRandomResult);
  if (gameName === 'even') correctAnswer = calcCorrectAnswerEvengame(generatedRandomResult);
  if (gameName === 'gcd') correctAnswer = findGreatCommonDivider(generatedRandomResult);
  if (gameName === 'prog') correctAnswer = saveMissingNumber(generatedRandomResult[0], generatedRandomResult[1]);
  if (gameName === 'prime') correctAnswer = isNumberPrime(generatedRandomResult);
  return correctAnswer;
};

const askPlayer = (gameName) => {
  if (gameName === 'calc') showCalcGameQuestion(generatedRandomResult);
  if (gameName === 'even') showEvenGameQuestion(generatedRandomResult);
  if (gameName === 'gcd') showGCDGameQuestion(generatedRandomResult);
  if (gameName === 'prog') makeProgForOutput(generatedRandomResult[0], generatedRandomResult[1]);
  if (gameName === 'prime') showPrimeGameQuestion(generatedRandomResult);
};

const readPlayersAnswer = () => {
  playerAnswer = readlineSync.question('Your answer: ');
};

const isAnswerEqualToCorrect = () => {
  if (playerAnswer === String(correctAnswerResult)) {
    return true;
  }

  return false;
};

const showSuccessRound = () => console.log('Correct!');

const showLoseGame = (name, answer) => {
  const tryAgainMessage = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswerResult}'.\nLet's try again, ${name}!`;
  console.log(tryAgainMessage);
};

const playRounds = (gameName, rounds) => {
  let tempRounds = rounds;
  while (tempRounds > 0) {
    generatedRandomResult = generateRandomThings(gameName);
    correctAnswerResult = whatIsCorrectAnswer(gameName);
    askPlayer(gameName);
    readPlayersAnswer();

    if (isAnswerEqualToCorrect()) {
      showSuccessRound();
      tempRounds -= 1;
    } else {
      tempRounds = 0;
      isWinning = false;
    }
  }
  return isWinning;
};

const showWinGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

// main function that starts the game depends on parameter:
const playGame = (gameName) => {
  greetUser();
  showRulesMessage(gameName);
  playRounds(gameName, ROUNDSCOUNT);
  if (isWinning === true) return showWinGame(playerName);
  return showLoseGame(playerName, playerAnswer);
};

export default playGame;
