/*
A Rock, Paper and Scissor Simulation
*/

function computerPlay() {
	let selectionArray = ['rock', 'paper', 'scissor'];
	let computerSelection = selectionArray[Math.floor(Math.random() * 3)];
	let playerSelection = prompt('Rock, Paper or Scissor: ');
	var message = '';

	switch (playerSelection) {
		case 'rock':
			if (computerSelection === 'rock') {
				message = 'You tie';
			} else if (computerSelection === 'paper') {
				message = 'You lose';
			} else {
				message = 'You win';
			}
			break;

		case 'paper':
			if (computerSelection === 'rock') {
				message = 'You win';
			} else if (computerSelection === 'paper') {
				message = 'You tie';
			} else {
				message = 'You lose';
			}
			break;

		case 'scissors':
			if (computerSelection === 'rock') {
				message = 'You lose';
			} else if (computerSelection === 'paper') {
				message = 'You win';
			} else {
				message = 'You tie';
			}

			break;
	}

	return `The computer chose ${computerSelection}, ${message}`;
}

computerPlay();
