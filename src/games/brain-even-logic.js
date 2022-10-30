import getRandomNumber from '../helping-logic.js';

export const evenRuleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const RANGESTART = 1;
const RANGEEND = 100;

export const getRandNumEvenGame = () => {
  const result = getRandomNumber(RANGESTART, RANGEEND);
  return result;
};

function isNumberEven(num) {
  if (num % 2 === 0) return true;
  return false;
}

export const calcCorrectAnswerEvengame = (num) => { // СЮДА ПЕРЕДАТЬ randomNumber!!
  let correctAnswer;

  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  return correctAnswer;
};

export const showEvenGameQuestion = (num) => { // СЮДА ПЕРЕДАТЬ randomNumber!!
  console.log(`Question: ${num}`);
};

export { isNumberEven };
