function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "IOS") {
		correct++;
}
	if (question2 == "hyper text markup language") {
		correct++;
}	
	if (question3 == "2008") {
		correct++;
    }
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's not bad!", "You really need to do better!"];
	var score;

	if (correct == 0) {
		score = 2;
	}
	else if (correct == 3) {
		score = 0;
    }
    else{
        score = 1;
    }

	document.getElementById("resultBox").style.visibility = "visible";
    document.getElementById("correctAnswers").innerHTML = "You got " + correct + " correct.";
    document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
	}