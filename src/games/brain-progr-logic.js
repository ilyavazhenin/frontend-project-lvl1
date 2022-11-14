import getRandNum from '../helper.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (startingElement, step, length) => {
  const progression = [startingElement];
  let element = startingElement;
  for (let i = 1; i < length; i += 1) {
    element += step;
    progression.push(element);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const generatedProg = getProgression(getRandNum(0, 20), getRandNum(2, 5), getRandNum(5, 10));
  const hideIndex = getRandNum(0, generatedProg.length - 1);
  const correctAnswer = String(generatedProg[hideIndex]);

  let outputString = '';
  for (let i = 0; i < generatedProg.length; i += 1) {
    if (i === hideIndex) outputString += ' ..';
    else outputString += ` ${generatedProg[i]}`;
  }
  const question = outputString;
  return [question, correctAnswer];
};

export default () => {
  playGame(gameDescription, getQuestionAndAnswer);
};
