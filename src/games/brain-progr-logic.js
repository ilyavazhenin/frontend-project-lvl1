import getRandomNumber from '../helping-logic.js';

const START = 0;
const END = 20;

const STEPSTART = 2;
const STEPEND = 5;

const PROGLENGTHSTART = 5;
const PROGLENGTHEND = 10;

export const progRuleMessage = 'What number is missing in the progression?';

export const generateProgression = () => {
  let numberToPush = getRandomNumber(START, END);
  const randomStep = getRandomNumber(STEPSTART, STEPEND);
  const randProgressionLength = getRandomNumber(PROGLENGTHSTART, PROGLENGTHEND);
  const progression = [];
  for (let i = 0; i < randProgressionLength; i += 1) {
    numberToPush += randomStep;
    progression.push(numberToPush);
  }

  // calc index depends on progression's array length:
  const hideIndex = getRandomNumber(0, progression.length - 1);
  return [progression, hideIndex];
};

export const saveMissingNumber = (array, index) => {
  const missingNumber = array[index];
  return missingNumber;
};

export const makeProgForOutput = (array, index) => {
  let outputString = 'Question:';
  for (let i = 0; i < array.length; i += 1) {
    if (i === index) outputString += ' ..';
    else outputString += ` ${array[i]}`;
  }
  console.log(outputString);
};
