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

const getCorrectAnswer = (symbol, firstValue, secondValue) => {
  let result;
  switch (symbol) {
    case '*': result = firstValue * secondValue;
      break;
    case '-': result = firstValue - secondValue;
      break;
    case '+': result = firstValue + secondValue;
      break;
    default: result = null;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  // increase range for higher difficlulty:
  const randomNumber1 = getRandomNumber(1, 25);
  const randomNumber2 = getRandomNumber(1, 25);
  const mathSign = getRandomSign();
  const correctAnswer = getCorrectAnswer(mathSign, randomNumber1, randomNumber2);
  const question = ` ${randomNumber1} ${mathSign} ${randomNumber2}`;
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
