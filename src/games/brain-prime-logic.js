import getRandomNumber from '../helping-logic.js';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67,
  71, 73, 79, 83, 89, 97, 101, 103, 107,
  109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
  167, 173, 179, 181, 191, 193, 197, 199,
];

const RANGESTART = 0;
const RANGEEND = 200;

export const primeRuleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// to refactor: move into separeted module and make universal:
export const generateRandForPrime = () => {
  const result = getRandomNumber(RANGESTART, RANGEEND);
  return result;
};

const isNumberPrime = (num) => {
  if (primeNumbers.includes(num)) return true;
  return false;
};

export const getCorrectAnswerPrime = (num) => {
  if (isNumberPrime(num) === true) return 'yes';
  return 'no';
};

export const showPrimeGameQuestion = (num) => {
  console.log(`Question: ${num}`);
};
