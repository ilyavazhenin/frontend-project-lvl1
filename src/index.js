import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const roundsCount = 3;

const playGame = (description, gameLogicFunction) => {
  const playerName = greetUser();
  console.log(`${description}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [generatedQuestion, correctAnswerResult] = gameLogicFunction();
    console.log(`Question:${generatedQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === String(correctAnswerResult)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerResult}'.`);
      console.log(`Let's try again, ${playerName}!`);
      i = roundsCount;
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
