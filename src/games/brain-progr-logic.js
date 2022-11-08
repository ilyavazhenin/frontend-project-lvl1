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

  // calc index based on progression's array length:
  const hideIndex = getRandomNumber(0, progression.length - 1);
  const missingNumber = progression[hideIndex];

  return [progression, hideIndex, missingNumber];
};

const getQuestionAndAnswer = () => {
  const progressionValues = generateProgression();
  const array = progressionValues[0];
  const index = progressionValues[1];
  let outputString = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === index) outputString += ' ..';
    else outputString += ` ${array[i]}`;
  }
  const question = outputString;
  const correctAnswer = progressionValues[2];
  return [question, correctAnswer];
};

export const saveMissingNumber = (array, index) => {
  const missingNumber = array[index];
  return missingNumber;
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
