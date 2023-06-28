const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid selection');
  }
}

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins';
    } else {
      return 'You won!'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins';
    } else {
      return 'You won!'
    }
  }
}

rl.question('Enter your choice (rock, paper, or scissors): ', (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  if (userChoice) {
    const result = determineWinner(userChoice, computerChoice);
    console.log('You chose:', userChoice);
    console.log('The computer chose:', computerChoice);
    console.log(result);
  }
  rl.close();
});
