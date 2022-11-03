import getRandomNumber from '../helping-logic.js';
import playGame from '../new-index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67,
  71, 73, 79, 83, 89, 97, 101, 103, 107,
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
  167, 173, 179, 181, 191, 193, 197, 199,
];

const RANGESTART = 0;
const RANGEEND = 200;

const isNumberPrime = (num) => {
  if (primeNumbers.includes(num)) return true;
  return false;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(RANGESTART, RANGEEND);
  const question = ` ${number}`;
  let correctAnswer;
  if (isNumberPrime(number) === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
