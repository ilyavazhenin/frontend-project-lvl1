import getRandomNumber from '../helping-logic.js';
import playGame from '../new-index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const RANGESTART = 1;
const RANGEEND = 100;

const isNumberEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(RANGESTART, RANGEEND);
  const question = ` ${number}`;
  let correctAnswer;
  if (isNumberEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
