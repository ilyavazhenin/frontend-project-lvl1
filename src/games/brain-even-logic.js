import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isNumberEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
