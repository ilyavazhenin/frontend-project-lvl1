import readlineSync from 'readline-sync';
import _ from 'lodash';

let playerName;
let successfullTries = 0;
let randomThings;
let playerAnswer;
let correctAnswer;
let isWon = true;
const gameRuleMessage = 'What is the result of the expression?';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const showRulesMessage = (message) => {
  console.log(`${message}`);
};

const generateRandomThings = () => {
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
  return randomThings;
};

const whatIsCorrectAnswer = (array) => {
  switch (array[2]) {
    case '*': correctAnswer = array[0] * array[1];
      break;

    case '-': correctAnswer = array[0] - array[1];
      break;

    case '+': correctAnswer = array[0] + array[1];
      break;

    default: correctAnswer = null;
  }
  return correctAnswer;
};

const askPlayer = () => {
  console.log(`Question: ${randomThings[0]} ${randomThings[2]} ${randomThings[1]}`);
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

export const startGame = () => {
  greetUser();
  showRulesMessage(gameRuleMessage);
  while (successfullTries < 3) {
    generateRandomThings();
    whatIsCorrectAnswer(randomThings);
    askPlayer();
  }

  if (isWon === true) console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
