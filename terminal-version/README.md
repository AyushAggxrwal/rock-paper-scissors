# Rock Paper Scissors in Terminal
This is a simple implementation of the classic rock paper scissors game that runs in the terminal.

## How to Play:
1. Clone the repository and `run npm install` to install the dependencies;
1. Run `node index.js` in the terminal to start the game.
1. The game will prompt you to enter either "rock", "paper", or "scissors"
1. The computer will randomly choose rock, paper or scissors
1. The winner is determined by the rules:
- Rock beats scissors
- Scissors beats paper
- Paper beats rock
The game will keep score and declare a winner after 5 rounds

## Code Overview
- The `getChoices` function prompts the user for their choice and randomly selects one of the three options for the computer.
- The `CHOICES` object defines the rules for what beats what.
- The `determineWinner` function compares the player and computer choices and returns the winner.
- The `game` function plays 5 rounds, keeping track of the score and declaring an overall winner