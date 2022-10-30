import getRandomNumber from '../src/helping-logic.js';

export const calcRuleMessage = 'What is the result of the expression?';
export const generateTwoNumbersAndSign = () => {
  // increase modifiers for higher difficlulty:
  const STARTRANGE = 1;
  const ENDRANGE = 25;
  const randomNumber1 = getRandomNumber(STARTRANGE, ENDRANGE);
  const randomNumber2 = getRandomNumber(STARTRANGE, ENDRANGE);

  const SIGNS = ['+', '-', '*'];
  let randomSign;
  const randomSignStart = 0;

  // amount of operation in array to generate a random one from:
  const randomEnd = SIGNS.length - 1;
  const getRandomSign = () => {
    const randomIndex = getRandomNumber(randomSignStart, randomEnd);
    randomSign = SIGNS[randomIndex];
    return randomSign;
  };

  getRandomSign();
  const randomThings = [randomNumber1, randomNumber2, randomSign];
  return randomThings;
};

export const calcCorrectAnswerCalcgame = (generatedRandomResult) => {
  let correctAnswer;

  switch (generatedRandomResult[2]) {
    case '*': correctAnswer = generatedRandomResult[0] * generatedRandomResult[1];
      break;
    case '-': correctAnswer = generatedRandomResult[0] - generatedRandomResult[1];
      break;
    case '+': correctAnswer = generatedRandomResult[0] + generatedRandomResult[1];
      break;
    default: correctAnswer = null;
  }

  return correctAnswer;
};

export const showCalcGameQuestion = (generatedRandomResult) => {
  console.log(`Question: ${generatedRandomResult[0]} ${generatedRandomResult[2]} ${generatedRandomResult[1]}`);
};
