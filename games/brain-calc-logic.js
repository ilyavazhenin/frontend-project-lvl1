import _ from 'lodash';

export const generateTwoNumbersAndSign = () => {
  // increase modifiers for higher difficlulty:
  const randomNumber1 = Math.round(Math.random() * 25);
  const randomNumber2 = Math.round(Math.random() * 25);

  const signs = ['+', '-', '*'];
  let randomSign;
  const randomStart = 0;

  // amount of operation in array to generate a random one from:
  const randomEnd = signs.length - 1;
  const getRandomSign = () => {
    const randomIndex = _.random(randomStart, randomEnd);
    randomSign = signs[randomIndex];
    return randomSign;
  };

  getRandomSign();
  const randomThings = [randomNumber1, randomNumber2, randomSign];
  return randomThings;
};

export const showCalcRuleMessage = () => {
  const calcRuleMessage = 'What is the result of the expression?';
  console.log(`${calcRuleMessage}`);
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
