import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const ROUNDSCOUNT = 3;

const playGame = (description, gameLogicFunction) => {
  const playerName = greetUser();
  console.log(`${description}`);

  let tempRounds = ROUNDSCOUNT;
  while (tempRounds > 0) {
    const [generatedQuestion, correctAnswerResult] = gameLogicFunction();
    console.log(`Question:${generatedQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === String(correctAnswerResult)) {
      console.log('Correct!');
      tempRounds -= 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerResult}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
