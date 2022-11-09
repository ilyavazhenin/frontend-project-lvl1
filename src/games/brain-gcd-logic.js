import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGreatCommonDivisor = (num1, num2) => {
  if (num2 === 0) return num1;
  return findGreatCommonDivisor(num2, num1 % num2);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = ` ${number1} ${number2}`;

  const correctAnswer = findGreatCommonDivisor(number1, number2);
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
