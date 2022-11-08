import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67,
  71, 73, 79, 83, 89, 97, 101, 103, 107,
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
  167, 173, 179, 181, 191, 193, 197, 199,
];

const isNumberPrime = (num) => {
  if (primeNumbers.includes(num)) return true;
  return false;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(0, 200);
  const question = ` ${number}`;
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
