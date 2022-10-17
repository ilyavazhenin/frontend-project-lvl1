import readlineSync from 'readline-sync';

export const greetUser = () => {
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}!`);
  return inputName;
};

export default greetUser;
