import _ from 'lodash';

// !to refactor late: make this func universal and usable in all games
const generateRandomInRange = (num1, num2) => {
  const result = _.random(num1, num2);
  return result;
};

const START = 0;
const END = 20;

const STEPSTART = 2;
const STEPEND = 5;

const PROGLENGTHSTART = 5;
const PROGLENGTHEND = 10;

export const generateProgression = () => {
  let numberToPush = generateRandomInRange(START, END);
  const randomStep = generateRandomInRange(STEPSTART, STEPEND);
  const randProgressionLength = generateRandomInRange(PROGLENGTHSTART, PROGLENGTHEND);
  const progression = [];
  for (let i = 1; i < randProgressionLength; i += 1) {
    numberToPush += randomStep;
    progression.push(numberToPush);
  }
  const hideIndex = generateRandomInRange(0, progression.length - 1);
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

export const showProgGameRuleMsg = () => {
  console.log('What number is missing in the progression?');
};
