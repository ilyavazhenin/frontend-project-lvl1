import _ from 'lodash';
import getRandomNumber from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calcDividers = (number) => {
  const simpleModifiers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  let tempNumber = number;
  const calculatedDivders = [];

  // take every simpleDivider and check if the number is divided on it:
  for (let i = 0; i < simpleModifiers.length; i += 1) {
    let rest = tempNumber % simpleModifiers[i];
    while (rest === 0) {
      const divider = simpleModifiers[i];
      tempNumber /= divider;
      calculatedDivders.push(divider);
      rest = tempNumber % divider;
    }
  }
  return calculatedDivders;
};

// the idea is pulling out elements that we already counted and pushed to the result array:
const findGCDregularCases = (array1, array2) => {
  const tempArr1 = array1;
  const tempArr2 = array2;
  const intersectedArray = _.intersection(tempArr1, tempArr2);
  const resultArray = [];
  let GCD = 1;

  for (let i = 0; i < intersectedArray.length; i += 1) {
    const elemOfIntersectedArray = intersectedArray[i];
    if (tempArr1.includes(elemOfIntersectedArray) && tempArr2.includes(elemOfIntersectedArray)) {
      resultArray.push(elemOfIntersectedArray);
      const removingIndex1 = _.findIndex(tempArr1, (elem) => elem === elemOfIntersectedArray);
      const removingIndex2 = _.findIndex(tempArr2, (elem) => elem === elemOfIntersectedArray);
      _.pullAt(tempArr1, removingIndex1);
      _.pullAt(tempArr2, removingIndex2);
      i -= 1;
    }
  }
  for (let i = 0; i < resultArray.length; i += 1) GCD *= resultArray[i];
  return GCD;
};

const getQuestionAndAnswer = () => {
  let correctAnswer = 1;
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const firstNumberDividers = calcDividers(number1);
  const secondNumberDividers = calcDividers(number2);
  const question = ` ${number1} ${number2}`;

  // 2 trivial cases:
  if (number1 % number2 === 0) {
    correctAnswer = number2;
    return [question, correctAnswer];
  }

  if (number2 % number1 === 0) {
    correctAnswer = number1;
    return [question, correctAnswer];
  }

  // regular cases when numbers dont divide on each other:
  correctAnswer = findGCDregularCases(firstNumberDividers, secondNumberDividers);
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
