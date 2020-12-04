// JavaScript Document


//This will create out the nums used for the numbers
function generateNumsHomePage(){
	// These will be the random nums. Generate every time
	var x = Math.floor(Math.random()* 10)
	var y = Math.floor(Math.random()* 10)
	
	// Allows us to have an answer for user checking
	
	Answer = x + y;
	
	
	var pageText = "What does " + x + " + " + y + " = ?" ;
	document.getElementById("JScode").innerHTML = pageText;
	return Answer;
}
	
function generateNumsAddition(){
	// These will be the random nums. Generate every time
	var x = Math.floor(Math.random()* 10)
	var y = Math.floor(Math.random()* 10)
	
	// Allows us to have an answer for user checking
	
	Answer = x + y;
	
	
	var pageText = "What does " + x + " + " + y + " = ?" ;
	document.getElementById("JScode").innerHTML = pageText;
	return Answer;
}

function generateNumsSubtraction(){
	// These will be the random nums. Generate every time
	var x = Math.floor(Math.random()* 10)
	var y = Math.floor(Math.random()* 10)
	
	// Allows us to have an answer for user checking
	
	Answer = x - y;
	
	
	var pageText = "What does " + x + " - " + y + " = ?" ;
	document.getElementById("JScode").innerHTML = pageText;
	return Answer;
}

function generateNumsMultiplication(){
	// These will be the random nums. Generate every time
	var x = Math.floor(Math.random()* 10)
	var y = Math.floor(Math.random()* 10)
	
	// Allows us to have an answer for user checking
	
	Answer = x * y;
	
	
	var pageText = "What does " + x + " * " + y + " = ?" ;
	document.getElementById("JScode").innerHTML = pageText;
	return Answer;
}

function generateNumsDivision(){
	// These will be the random nums. Generate every time
	var x = Math.floor(Math.random()* 10)
	var y = Math.floor(Math.random()* 10)
	
	// Allows us to have an answer for user checking
	
	Answer = x / y;
	
	
	var pageText = "What does " + x + " / " + y + " = ?" ;
	document.getElementById("JScode").innerHTML = pageText;
	return Answer;
}

function submitProblemForChecking(){
	var UserResult = document.getElementById("UserAnswer").value;
	if(Answer == UserResult){
		document.getElementById("correctAnswer").innerHTML = "Answer: Correct";
	}
	else{
		document.getElementById("correctAnswer").innerHTML = "Answer: Incorrect try again!";
	}
	}
