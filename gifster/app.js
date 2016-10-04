'use strict';

var MAX_IMAGES = 3;
var frame = 1;

var students = [];
var currentPerson = 0;


function loadEverything() {
	students.push("--TEMPLATE--");
	
	students.push("kate");
	students.push("diana");
	students.push("kishkan");
	students.push("bodya");
	students.push("shtil");
	students.push("grabchak");
	students.push("fenchak");
	students.push("polyak");
	students.push("sakal");
	students.push("kochergan");
	students.push("grys");
	students.push("shek");
	students.push("andriychuk");
	students.push("laba");
	students.push("igor");
	students.push("ne");
	students.push("totin");
	students.push("marta");
	students.push("rebryk");
	students.push("feoktistova");
	students.push("gala");
	
	document.getElementById("frame").style.display = "none";
	updateImage();
}

function changePerson(id) {
	if (currentPerson == 0) {
		document.getElementById("frame").style.display = "block";
		currentPerson = id;
		updateImage();
		return;
	} 

	currentPerson = id;
} 

function updateImage() {
	if (currentPerson == 0) {
		return;
	} 
	document.getElementById("frame").src = students[currentPerson]+"/"+frame+".jpg";
	frame++;
	if (frame > MAX_IMAGES) frame = 1;
	setTimeout(updateImage, 300);
}

loadEverything();
