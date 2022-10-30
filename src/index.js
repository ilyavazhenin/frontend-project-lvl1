import readlineSync from 'readline-sync';

import greetUser from './cli.js';

import {
  generateTwoNumbersAndSign,
  calcCorrectAnswerCalcgame,
  showCalcGameQuestion,
  calcRuleMessage,
} from './games/brain-calc-logic.js';

import {
  evenRuleMessage,
  getRandNumEvenGame,
  calcCorrectAnswerEvengame,
  showEvenGameQuestion,
  // showEvenRuleMessage,
} from './games/brain-even-logic.js';

import {
  findGreatCommonDivider,
  generateRandNumsForGCD,
  gcdRuleMessage,
  showGCDGameQuestion,
} from './games/brain-gcd-logic.js';

import {
  primeRuleMessage,
  generateRandForPrime as generateNum,
  isNumberPrime,
  showPrimeGameQuestion,
}
  from './games/brain-prime-logic.js';

import {
  generateProgression,
  progRuleMessage,
  makeProgForOutput,
  saveMissingNumber,
} from './games/brain-progr-logic.js';

// common result format for 3 games: [number1, number2, 'sign']. [array, num] for 4th:
let generatedRandomResult;

let correctAnswerResult;
const ROUNDSCOUNT = 3;
let isWinning = true;
let playerName;
let playerAnswer;

const showRulesMessage = (gameName) => {
  let message;
  if (gameName === 'even') message = evenRuleMessage;
  if (gameName === 'calc') message = calcRuleMessage;
  if (gameName === 'gcd') message = gcdRuleMessage;
  if (gameName === 'prog') message = progRuleMessage;
  if (gameName === 'prime') message = primeRuleMessage;
  console.log(`${message}`);
};

// const showRulesMessage = (gameName) => {
//   if (gameName === 'even') showEvenRuleMessage();
//   if (gameName === 'calc') showCalcRuleMessage();
//   if (gameName === 'gcd') showGCDRuleMessage();
//   if (gameName === 'prog') showProgGameRuleMsg();
//   if (gameName === 'prime') showPrimeRuleMessage();
// };

const generateRandomThings = (gameName) => {
  let randomThings;

  if (gameName === 'calc') randomThings = generateTwoNumbersAndSign();
  if (gameName === 'even') randomThings = getRandNumEvenGame();
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
  playerName = greetUser();
  showRulesMessage(gameName);
  playRounds(gameName, ROUNDSCOUNT);
  if (isWinning === true) return showWinGame(playerName);
  return showLoseGame(playerName, playerAnswer);
};

export default playGame;
