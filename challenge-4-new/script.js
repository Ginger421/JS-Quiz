let quiz = [ {
    //question1
    question: "What kind of data type is '100'?",
    options: ["number", "string", "boolean", "undefined"],
    correctAnswer: "string",
},
    //question2
    {
   
}

    //question3
    `question: "Call the following function: playGame()",
    options: ["call playGame()", "playGame();", "playGame", "playGame[]"],`
]



//timer that starts when function is called, runs 90s, -1s every s until 0
//timer is set
let timer = 90




//create quiz questons

//make function to show quiz questions one at a time while the timer is running and check answers


//create scoring method


//create function to pass these through
function showQuiz(quiz) {
    //continuauly run timer until get to 0
    setInterval(() => {
        
    }, 90000);

    if (timer == 0) {
        clearInterval()
    }

//select dom element and modify it
    let questionDiv = document.getElementById("quiz");

    questionDiv.textContent = quiz.question; //SHOWING ERROR

//use query to select
    let opts = document.querySelectorAll(".options");
    console.log(opts);

    opts.forEach(function(element, index){
        element.textContent = quiz.options[index];
})

//set another variable to 0 

}



//to run function
showQuiz(quiz)