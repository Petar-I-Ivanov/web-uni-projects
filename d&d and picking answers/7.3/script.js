const figures = ['кръга',
		'правоъгълника',
		'квадрата',
		'звездата',];

const askQuestion = 'Кликнете върху ';
var randomFigure;

function placeQuestion() {
	
	circle.style.fill = 'yellow';
	rectangle.style.fill = 'yellow';
	square.style.fill = 'yellow';
	star.style.fill = 'yellow';
	
	
	randomFigure = figures[Math.floor(Math.random()*figures.length)];
	question.innerHTML = askQuestion + randomFigure;
}

function circleCheck() {
	if(randomFigure == figures[0]) {
		circle.style.fill = 'green';
		result.innerHTML = 'Вярно!';
		setTimeout(placeQuestion, 2000);
	}
	else {
		circle.style.fill = 'red';
		result.innerHTML = 'Грешно!';
	}
}

function rectangleCheck() {
	if(randomFigure == figures[1]) {
		rectangle.style.fill = 'green';
		result.innerHTML = 'Вярно!';
		setTimeout(placeQuestion, 2000);
	}
	else {
		rectangle.style.fill = 'red';
		result.innerHTML = 'Грешно!';
	}
}

function squareCheck() {
	if(randomFigure == figures[2]) {
		square.style.fill = 'green';
		result.innerHTML = 'Вярно!';
		setTimeout(placeQuestion, 2000);
	}
	else {
		square.style.fill = 'red';
		result.innerHTML = 'Грешно!';
	}
}

function starCheck() {
	if(randomFigure == figures[3]) {
		star.style.fill = 'green';
		result.innerHTML = 'Вярно!';
		setTimeout(placeQuestion, 2000);
	}
	else {
		star.style.fill = 'red';
		result.innerHTML = 'Грешно!';
	}
}

window.onload = placeQuestion;