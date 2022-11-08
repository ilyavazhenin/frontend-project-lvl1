import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const getRandomSign = () => {
  const randomSignStart = 0;
  const randomEnd = signs.length - 1;
  const randomIndex = getRandomNumber(randomSignStart, randomEnd);
  const randomSign = signs[randomIndex];
  return randomSign;
};

const getQuestionAndAnswer = () => {
  // increase range for higher difficlulty:
  const randomNumber1 = getRandomNumber(1, 25);
  const randomNumber2 = getRandomNumber(1, 25);
  let correctAnswer;
  const randomSign = getRandomSign();
  switch (randomSign) {
    case '*': correctAnswer = randomNumber1 * randomNumber2;
      break;
    case '-': correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '+': correctAnswer = randomNumber1 + randomNumber2;
      break;
    default: correctAnswer = null;
  }

  const question = ` ${randomNumber1} ${randomSign} ${randomNumber2}`;

  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
