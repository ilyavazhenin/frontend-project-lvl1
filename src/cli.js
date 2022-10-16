import readlineSync from 'readline-sync';

const greetings = () => {
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
};

export { greetings };