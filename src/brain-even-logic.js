const evenRuleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRandomNumber = () => {
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomThings = [randomNumber1, null, null]; // need to refactor later!
  return randomThings;
};

function isNumberEven(someNumber) {
  if (someNumber % 2 === 0) return true;
  return false;
}

export const showEvenRuleMessage = () => {
  console.log(`${evenRuleMessage}`);
};

export const calcCorrectAnswerEvengame = (generatedRandomResult) => {
  let correctAnswer;

  if (generatedRandomResult[0] % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  return correctAnswer;
};

export const showEvenGameQuestion = (generatedRandomResult) => {
  console.log(`Question: ${generatedRandomResult[0]}`);
};

export { evenRuleMessage, isNumberEven };
