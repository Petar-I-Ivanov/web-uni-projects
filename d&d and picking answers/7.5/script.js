const sentences = [ 'Мария ще разходи ',
	'Иван обича да яде ',
	'Сашо има лекции по ',
	'Стефан има тренировка в ',];
	
var randomNumber;

function placeQuestion() {
	
	answerOne.style.borderColor = 'black';
	answerTwo.style.borderColor = 'black';
	answerThree.style.borderColor = 'black';
	answerFour.style.borderColor = 'black';
	
	randomNumber = Math.floor(Math.random()*sentences.length);
	toFill.innerHTML = sentences[randomNumber];
}

function checkFirstAnswer() {
	if (randomNumber == 0) {
		result.innerHTML = 'Вярно!';
		answerOne.style.borderColor = 'green';
	}
	else {
		result.innerHTML = 'Грешно!';
		answerOne.style.borderColor = 'red';
	}
	setTimeout(placeQuestion, 2000);
}

function checkSecondAnswer() {
	if (randomNumber == 1) {
		result.innerHTML = 'Вярно!';
		answerTwo.style.borderColor = 'green';
	}
	else {
		result.innerHTML = 'Грешно!';
		answerTwo.style.borderColor = 'red';
	}
	setTimeout(placeQuestion, 2000);
}

function checkThirdAnswer() {
	if (randomNumber == 2) {
		result.innerHTML = 'Вярно!';
		answerThree.style.borderColor = 'green';
	}
	else {
		result.innerHTML = 'Грешно!';
		answerThree.style.borderColor = 'red';
	}
	setTimeout(placeQuestion, 2000);
}

function checkFourthAnswer() {
	if (randomNumber == 3) {
		result.innerHTML = 'Вярно!';
		answerFour.style.borderColor = 'green';
	}
	else {
		result.innerHTML = 'Грешно!';
		answerFour.style.borderColor = 'red';
	}
	setTimeout(placeQuestion, 2000);
}
window.onload = placeQuestion;