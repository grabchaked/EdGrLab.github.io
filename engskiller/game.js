/*
*	English Skiller Core
*	Developed by Eduard Grabchak 
*
*	engskiller.hol.es
*	(c) 2015
*/


var utils = {};

var OPTIONS = {};
var CURRENT = {};

var words = {};
var score = 0;
var time;
var timerCount = 0;

var updateTopics = function() {
		levels = $("#level")[0].selectedIndex;
		if (levels > 0 ) {
			$("#topics").show();
		} else {
			$("#topics").hide();
		}
};

utils.randomNum = function(min,max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);

    return rand;
}


function init(){
	if(localStorage.getItem("top") != null) {
				$("#record").html("<strong>Рекорд: </strong> "+ localStorage.getItem("top"));
		
	}
	
	
	resetOptions();
	$("#greatAlert").hide();
}


function resetOptions() {
	$("#level")[0].selectedIndex = 0;
	$("#topics")[0].selectedIndex = 0;
}

//Start the game
function start(){
			//Check, if user selected all options
			if($("#level")[0].selectedIndex==0 ){
				alert("Ви не вказали рівень важкості!");
				return;
			}
		
			if($("#topics")[0].selectedIndex==0 ){
				alert("Ви не вказали тему!");
				return;
			}
			
			//Prepare to game
			switch($("#level")[0].selectedIndex) {
				case 1:
					OPTIONS.perLetterDelay = 1500;
					break;
				case 2:
					OPTIONS.perLetterDelay = 1000;
					break;
				case 3:
					OPTIONS.perLetterDelay = 500;
					break;
				default:
					OPTIONS.perLetterDelay = 1000;
					break;
			}
			
			//Hiding all LISHNIE inputs
			$("#text").show();
			$("#text").focus();
			$("#text").val("");
			$("#topics").hide();
			$("#level").hide();
			$("#hide").hide();
			
			selectedTopic = $("#topics option:selected").text();
			
			for (var i=0;i<db.length;i++) {
				if (db[i].title == selectedTopic){
					words = db[i].words;
					break;
				}
			}
			
			
			
			update();
			
 window.addEventListener("keydown", skills, false );



}

function skills(e) {

if (e.keyCode == 27) {
    	alert("Press OK to continue");
	} }

function update(){
	$("#text").focus();
	$("#text").val("");
	CURRENT.word = words[utils.randomNum(0,words.length)];
	$("#currentWord").html(CURRENT.word);
										
	time = setTimeout(endGame, CURRENT.word.length*OPTIONS.perLetterDelay);
}

/*function lose(){

	alert('Ви програли, ваш рахунок:'+score);
	if(localStorage.getItem("top") == null) {
			localStorage.setItem("top",score);

	} else {
			localStorage.setItem("top",score);
	}
	location.reload();

}*/



function endGame() {

$("#score").html(score);
//alert('Ви програли, ваш рахунок:'+score);
	$('#myModal').on('hidden.bs.modal', function (e) {
	  location.reload();
	});
	$('#myModal').modal('show');


	
	if(localStorage.getItem("top") == null) {
			localStorage.setItem("top",score);

	} else {
			localStorage.setItem("top",score);
	}
}

function check(){
	userWord = $("#text").val();
	
	if (userWord.toLowerCase() == CURRENT.word.toLowerCase()) {
		clearTimeout(time);
		score++;
		$("#timer").show();
		$("#text").hide();
		$("#greatAlert").show();
		timerCount = 6;
		timer();
		
		  $.getJSON( "https://translate.yandex.net/api/v1.5/tr.json/translate?",{
		   key:"trnsl.1.1.20150810T184612Z.fe5c939f50bd02fa.dd86ae1a5e88151b603069fc602f6273f2ad0ec7",
		   text: CURRENT.word,
		   lang: "uk"
		  },function( data ) {
				$("#translate").html(data.text[0]);
		  });
	}
	
}



function timer() {
	timerCount--;
	$("#timer").html(timerCount);
	
	if (timerCount == 0) {
		$("#timer").hide();
		$("#text").show();
		$("#greatAlert").hide();
		update();
		return;
	} else {
		setTimeout(timer, 1000);
	}
	
	
}