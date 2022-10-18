const evenRuleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

function isNumberEven(someNumber) {
  if (someNumber % 2 === 0) return true;
  return false;
}

export { evenRuleMessage, isNumberEven };
