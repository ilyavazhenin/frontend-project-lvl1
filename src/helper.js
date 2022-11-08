import _ from 'lodash';

const getRandomNumber = (startNum, endNum) => {
  const randNum = _.random(startNum, endNum);
  return randNum;
};

export default getRandomNumber;
