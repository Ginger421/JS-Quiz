var correct = 0;
var incorrect = 0;

//timer
setInterval(timer)

//create start button

//I decided to create the button in js
var button = document.createElement("button");

//tell user what the button is for
button.innerText = "Start Quiz";

//add event listener to the button
//when button is clicked 1)start timer that counts down
//2)start questions 

button.addEventListener("click", takeQuiz);

//create a variable for the questions and hide them
//hide the questions
var questions = getElementByClassName("question");
questions.style.display = "none";

//function to be executed when button is clicked
function takeQuiz() {
    
}

//FROM RPS
//var options = ["R", "P", "S"];
//  var index = Math.floor(Math.random() * options.length);
//var computerChoice = options[index];