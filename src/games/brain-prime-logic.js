import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0 && num > 2) return false;

  const square = Math.sqrt(num);
  for (let i = 3; i <= square; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  // const number = getRandomNumber(0, 200);
  const question = getRandomNumber(0, 200);
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
