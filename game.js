/*
A Rock, Paper and Scissor Simulation
*/

computerPlay(checkInput());

function checkInput() {
	let playerSelection = prompt('Rock, Paper or Scissor: ');

	while (true) {
		if (
			playerSelection.toLowerCase() === 'rock' ||
			playerSelection.toLowerCase() === 'paper' ||
			playerSelection.toLowerCase() === 'scissor'
		) {
			return playerSelection.toLowerCase();
		} else {
			playerSelection = prompt(' Invalid try again: Rock, Paper or Scissor: ');
		}
	}
}

function computerPlay(playerSelection) {
	let selectionArray = ['rock', 'paper', 'scissor'];
	let computerSelection = selectionArray[Math.floor(Math.random() * 3)];

	var message = '';

	switch (playerSelection) {
		case 'rock':
			if (computerSelection === 'rock') {
				message = 'You tie, rock same as rock';
			} else if (computerSelection === 'paper') {
				message = 'You lose, rock loses against paper';
			} else {
				message = 'You win, rock beats scissors';
			}
			break;

		case 'paper':
			if (computerSelection === 'rock') {
				message = 'You win, paper beats rock';
			} else if (computerSelection === 'paper') {
				message = 'You tie, paper same as paper';
			} else {
				message = 'You lose, paper loses against scissors';
			}
			break;

		case 'scissor':
			if (computerSelection === 'rock') {
				message = 'You lose, scissor loses against rock';
			} else if (computerSelection === 'paper') {
				message = 'You win, scissor beats paper';
			} else {
				message = 'You tie, scissor same as scissors';
			}

			break;
	}

	return message;
}
