import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  let numberToPush = getRandomNumber(0, 20);
  const randomStep = getRandomNumber(2, 5);
  const randProgressionLength = getRandomNumber(5, 10);
  const progression = [];
  for (let i = 0; i < randProgressionLength; i += 1) {
    numberToPush += randomStep;
    progression.push(numberToPush);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const generatedProgression = generateProgression();
  const hideIndex = getRandomNumber(0, generatedProgression.length - 1);
  const correctAnswer = String(generatedProgression[hideIndex]);

  let outputString = '';
  for (let i = 0; i < generatedProgression.length; i += 1) {
    if (i === hideIndex) outputString += ' ..';
    else outputString += ` ${generatedProgression[i]}`;
  }
  const question = outputString;
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
