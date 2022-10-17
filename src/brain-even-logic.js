#!/usr/bin/env node
import readlineSync from 'readline-sync';

let playerName;
let successfullTries = 0;
let randomNumber;
let playerAnswer;
let correctAnswer;
let isWon = true;

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const brainEvenRulesMessage = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const generateRandomNumber = () => {
  randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const isNumberEven = (someNumber) => {
  if (someNumber % 2 === 0) return true;
  return false;
};

const whatIsCorrectAnswer = () => {
  if (isNumberEven(randomNumber) === true) {
    correctAnswer = 'yes';
    return correctAnswer;
  }
  correctAnswer = 'no';
  return correctAnswer;
};

const askPlayer = () => {
  console.log(`Question: ${randomNumber}`);
  playerAnswer = readlineSync.question('Your answer: ');
  const tryAgainMessage = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;

  if (playerAnswer.toLowerCase() === correctAnswer) {
    successfullTries += 1;
    return console.log('Correct!');
  }

  successfullTries = 3;
  isWon = false;
  return console.log(tryAgainMessage);
};

export const startGame = () => {
  greetUser();
  brainEvenRulesMessage();
  while (successfullTries < 3) {
    generateRandomNumber();
    whatIsCorrectAnswer();
    askPlayer();
  }

  if (isWon === true) console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
