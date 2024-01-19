const prompt = require('prompt-sync')({ sigint: true });
const CHOICES = {
  rock: {
    beats: 'scissors',
  },
  paper: {
    beats: 'rock',
  },
  scissors: {
    beats: 'paper',
  },
}

// Player and Computer choices
function getChoices() {
  const playerChoice = prompt("What's your choice?").toLowerCase();
  if (!(Object.keys(CHOICES).includes(playerChoice))) {
    console.log("Invalid choice. Please try again.")
    return getChoices();
  }
  const randomChoice = Math.floor(Math.random() * Object.keys(CHOICES).length)
  const computerChoice = Object.keys(CHOICES)[randomChoice];
  return [playerChoice, computerChoice];
}

let playerScore = 0, computerScore = 0;

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  console.log(`\nPlayer: ${playerChoice}             Computer: ${computerChoice}\n`);
  if (CHOICES[playerChoice].beats === computerChoice) {
    playerScore++;
    console.log(`You win! ${playerChoice} beats ${computerChoice}\n\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
  } else if (playerChoice === computerChoice) {
    console.log(`It's a tie!\n\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
  } else if (CHOICES[computerChoice].beats === playerChoice) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${playerChoice}\n\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`);
  }
}

const game = () => {
  counter = 0;
  while (playerScore < 5 && computerScore < 5) {
    console.log(`Player Score: ${playerScore}                 Computer Score: ${computerScore}\n`)
    console.log(`Round ${++counter}\n`);
    const [playerChoice, computerChoice] = getChoices();
    result(playerChoice, computerChoice);
  }
  console.log(`            Final Score:\nPlayer: ${playerScore}                 Computer: ${computerScore}`);
  return playerScore > computerScore ? '          Player Wins' : '          Computer Wins'

}

console.log(game());