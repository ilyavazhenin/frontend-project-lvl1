import getRandNum from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startingElem = getRandNum(0, 20);
  const progressionStep = getRandNum(2, 5);
  const progressionLength = getRandNum(5, 10);

  const generatedProg = getProgression(startingElem, progressionStep, progressionLength);
  const hideIndex = getRandNum(0, generatedProg.length - 1);
  const correctAnswer = String(generatedProg[hideIndex]);
  generatedProg[hideIndex] = '..';
  const question = generatedProg.join(' ');

  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
