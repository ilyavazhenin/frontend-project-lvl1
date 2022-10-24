import _ from 'lodash';

export const showGCDRuleMessage = () => {
  const gcdRuleMessage = 'Find the greatest common divisor of given numbers.';
  console.log(`${gcdRuleMessage}`);
};

const endOfRange = 50;
export const generateRandNumsForGCD = () => {
  const randomNumber1 = Math.round(Math.random() * endOfRange);
  const randomNumber2 = Math.round(Math.random() * endOfRange);
  const randomThings = [randomNumber1, randomNumber2, null];
  return randomThings;
};

export const calcDividers = (number) => {
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

// idea: cycle - pulling out elements that we already counted and pushed to the result array:
const findGCDnotTrivialCases = (array1, array2) => {
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

export const findGreatCommonDivider = (generatedRandomResult) => {
  let greatCommonDivider = 1;
  const number1 = generatedRandomResult[0];
  const number2 = generatedRandomResult[1];

  const firstNumberDividers = calcDividers(number1);
  const secondNumberDividers = calcDividers(number2);

  // 3 trivial cases (no need to check if numbers are equal):
  if (number1 % number2 === 0) {
    greatCommonDivider = number2;
    return greatCommonDivider;
  }

  if (number2 % number1 === 0) {
    greatCommonDivider = number1;
    return greatCommonDivider;
  }

  if (secondNumberDividers.length === 1 && firstNumberDividers.length === 1) {
    return greatCommonDivider;
  }

  // normal cases:
  greatCommonDivider = findGCDnotTrivialCases(firstNumberDividers, secondNumberDividers);
  return greatCommonDivider;
};

export const showGCDGameQuestion = (generatedRandomResult) => {
  console.log(`Question: ${generatedRandomResult[0]} ${generatedRandomResult[1]}`);
};
