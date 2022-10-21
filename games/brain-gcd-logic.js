export const showGCDRuleMessage = () => {
  const gcdRuleMessage = 'Find the greatest common divisor of given numbers.';
  console.log(`${gcdRuleMessage}`);
};

export const generateRandNumsForGCD = () => {
  const randomNumber1 = Math.round(Math.random() * 50);
  const randomNumber2 = Math.round(Math.random() * 50);
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

export const findGreatCommonDivider = (generatedRandomResult) => {
  let greatCommonDivider = 1;
  const resultArray = [1];
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
  let shortArray;
  let longArray;

  if (firstNumberDividers.length > secondNumberDividers.length) {
    shortArray = secondNumberDividers;
    longArray = firstNumberDividers;
  } else {
    shortArray = firstNumberDividers;
    longArray = secondNumberDividers;
  }

  // since arrays already sorted, we just shift 0-index elem of longest array everytime:
  for (let i = 0; i < shortArray.length; i += 1) {
    if (shortArray[i] === longArray[0]) {
      resultArray.push(shortArray[i]);
      longArray.shift();
    } else {
      while (shortArray[i] !== longArray[0] && shortArray.length && longArray.length) {
        longArray.shift();
      }
      if (shortArray[i] === longArray[0]) resultArray.push(shortArray[i]);
      longArray.shift();
    }
  }

  for (let i = 0; i < resultArray.length; i += 1) {
    greatCommonDivider *= resultArray[i];
  }
  return greatCommonDivider;
};

export const showGCDGameQuestion = (generatedRandomResult) => {
  console.log(`Question: ${generatedRandomResult[0]} ${generatedRandomResult[1]}`);
};
