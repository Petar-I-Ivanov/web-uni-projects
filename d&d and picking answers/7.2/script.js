function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	
    if (ev.target.id == "first" ||
	    ev.target.id == "second" ||
	    ev.target.id == "third") {
		
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

        var srcParent = data.parentNode;
        var tgt = ev.currentTarget.firstElementChild;

        ev.currentTarget.replaceChild(data, tgt);
        ev.appendChild(data);
    }
	else {
		alert('Wrong div to place.');
	}
}

function check() {
	
	var toFirst = 'quiet';
	var toSecond = ['good', 'skill'];
	var toThird = ['talkative', 'professional'];
	
	if (first.textContent == toFirst) {
		first.style.color = "green";
	} else {first.style.color = "red";}
	
	if (second.textContent == toSecond[0] || second.textContent == toSecond[1]) {
		second.style.color = "green";
	} else {second.style.color = "red";}
	
	if (third.textContent == toSecond[0] || third.textContent == toSecond[1]) {
		third.style.color = "green";
	} else {third.style.color = "red";}
}