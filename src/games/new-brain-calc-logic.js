import getRandomNumber from '../helping-logic.js';
import playGame from '../new-index.js';

const gameDescription = 'What is the result of the expression?';

const getRandomSign = () => {
  const SIGNS = ['+', '-', '*'];
  const randomSignStart = 0;
  const randomEnd = SIGNS.length - 1;
  const randomIndex = getRandomNumber(randomSignStart, randomEnd);
  const randomSign = SIGNS[randomIndex];
  return randomSign;
};

const getQuestionAndAnswer = () => {
  // increase range for higher difficlulty:
  const STARTRANGE = 1;
  const ENDRANGE = 25;
  const randomNumber1 = getRandomNumber(STARTRANGE, ENDRANGE);
  const randomNumber2 = getRandomNumber(STARTRANGE, ENDRANGE);
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
