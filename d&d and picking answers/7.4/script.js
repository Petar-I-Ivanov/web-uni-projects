var randomOne;
var randomTwo;

var wins = 0;
var losses = 0;

function generateRandom() {
	randomOne = Math.floor(Math.random() * 1000);
	randomTwo = Math.floor(Math.random() * 1000);
	field.innerHTML = randomOne + " и " + randomTwo;
}

function check() {
	
	rightAnswer.innerHTML = "";
	
	if ((randomOne + randomTwo) == numberGuess.value) wins++
	else {
		losses++;
		var sum = randomOne + randomTwo
		rightAnswer.innerHTML = "Верен отговор: " + sum;
	}
	
	winsLosses.innerHTML = "Wins: " + wins + " | Losses: " + losses;
	generateRandom();
}
window.onload = generateRandom;