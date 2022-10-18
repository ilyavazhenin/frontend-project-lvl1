import readlineSync from 'readline-sync';
import _ from 'lodash';
import { calcRuleMessage } from './brain-calc-logic.js';
import { evenRuleMessage } from './brain-even-logic.js';

let playerName;
let successfullTries = 0;
let randomThings;
let playerAnswer;
let correctAnswer;
let isWon = true;

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const showRulesMessage = (gameName) => {
  console.log(gameName, 'gamename равна этому');
  if (gameName === 'even') console.log(`${evenRuleMessage}`);
  if (gameName === 'calc') console.log(`${calcRuleMessage}`);
};

const generateRandomThings = (gameName) => {
  if (gameName === 'calc') {
    // increase modifiers for higher difficlulty:
    const randomNumber1 = Math.round(Math.random() * 25);
    const randomNumber2 = Math.round(Math.random() * 25);

    const signs = ['+', '-', '*'];
    let randomSign;
    const randomStart = 0;
    // amount of operation in array to generate a random one from:
    const randomEnd = signs.length - 1;
    const getRandomSign = () => {
      const randomIndex = _.random(randomStart, randomEnd);
      randomSign = signs[randomIndex];
      return randomSign;
    };

    getRandomSign();
    randomThings = [randomNumber1, randomNumber2, randomSign];
  }

  if (gameName === 'even') {
    const randomNumber1 = Math.round(Math.random() * 100);
    randomThings = [randomNumber1, null, null]; // need to refactor later!
  }
  return randomThings;
};

const whatIsCorrectAnswer = (gameName) => {
  if (gameName === 'calc') {
    switch (randomThings[2]) {
      case '*': correctAnswer = randomThings[0] * randomThings[1];
        break;
      case '-': correctAnswer = randomThings[0] - randomThings[1];
        break;
      case '+': correctAnswer = randomThings[0] + randomThings[1];
        break;
      default: correctAnswer = null;
    }
  }

  if (gameName === 'even') {
    if (randomThings[0] % 2 === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
  }
  return correctAnswer;
};

const askPlayer = (gameName) => {
  if (gameName === 'calc') console.log(`Question: ${randomThings[0]} ${randomThings[2]} ${randomThings[1]}`);
  if (gameName === 'even') console.log(`Question: ${randomThings[0]}`);

  playerAnswer = readlineSync.question('Your answer: ');
  const tryAgainMessage = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
  if (playerAnswer === String(correctAnswer)) {
    successfullTries += 1;
    return console.log('Correct!');
  }

  successfullTries = 3;
  isWon = false;
  return console.log(tryAgainMessage);
};

export const startGame = (gameName) => {
  greetUser();
  showRulesMessage(gameName);
  while (successfullTries < 3) {
    generateRandomThings(gameName);
    whatIsCorrectAnswer(gameName);
    askPlayer(gameName);
  }

  if (isWon === true) console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
