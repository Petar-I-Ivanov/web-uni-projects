const questions = [
		'Изберете всички снимки на плажове.',
		'Изберете всички снимки на поляни.',
		'Изберете всички снимки на градове.',];

var randomNumber;
var correctAnswers = 0;

function placeQuestion() {
	
	beach1.style.border = '2px solid black';
	beach2.style.border = '2px solid black';
	field1.style.border = '2px solid black';
	field2.style.border = '2px solid black';
	city1.style.border = '2px solid black';
	city2.style.border = '2px solid black';
	
	result.innerHTML = '';
	
	randomNumber = Math.floor(Math.random() * questions.length);
	question.innerHTML = questions[randomNumber];
}

function beachClick(e) {
	
	if (randomNumber == 0) {
		e.style.border = '5px solid green';
		result.innerHTML = 'Това е правилната снимка.';
		correctAnswers++;
	}
	else {
		e.style.border = '5px solid red';
		result.innerHTML = 'Това НЕ е правилната снимка.';
	}
	
	if (correctAnswers == 2) setTimeout(placeQuestion, 1000);
}

function fieldClick(e) {
	
	if (randomNumber == 1) {
		e.style.border = '5px solid green';
		result.innerHTML = 'Това е правилната снимка.';
		correctAnswers++;
	}
	else {
		e.style.border = '5px solid red';
		result.innerHTML = 'Това НЕ е правилната снимка.';
	}
	
	if (correctAnswers == 2) setTimeout(placeQuestion, 1000);
}

function cityClick(e) {
	
	if (randomNumber == 2) {
		e.style.border = '5px solid green';
		result.innerHTML = 'Това е правилната снимка.';
		correctAnswers++;
	}
	else {
		e.style.border = '5px solid red';
		result.innerHTML = 'Това НЕ е правилната снимка.';
	}
	
	if (correctAnswers == 2) {
		setTimeout(placeQuestion, 1000);
	}
}

window.onload = placeQuestion;