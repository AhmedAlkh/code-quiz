var startButton = document.querySelector("#start-btn");
var questions = document.querySelector("#question");
var time = document.queryselector("#time")
var correctAnswer
var score = 0;

// Timer 
function setTime() {
    var countDown = setInterval(function () {
        counter --;
        if (counter === -1) {
            clearInterval(countdown);
        }
        timer.textcontent = counter; 
    }, 1000);
};
// Timer ends

function startQuiz() {
    var showQuestions = document.getElementById("#questions");

    //start timer when first question is revealed
    setTime();
};

// Questions, options, answers
var questions = [
{
title: "Commonly used data types do not include:",
Choices: ["strings", "booleans", "alerts", "numbers",],
correctAnswer: "alerts",
},
{
title: "The condition in an if / else statement is enclosed with ____ ?",
Choices: ["quotes", "curly brackets", "parenthesis", "square brackets",],
correctAnswer: "parenthesis",
},
{
title: "Arrays in JavaScript can be used to store ____ ?",
Choices: ["Numbers & Strings", "Other arrays", "Booleans", "All of the above",],
correctAnswer: "All of the above",
},
{
title: "String Values must be enclosed within ____ when being assigned to variables.",
Choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis",],
correctAnswer: "Quotes",
},
{
title: "A very useful tool used during development and debugging for printing content to the debugger is:",
Choices: ["Javascript", "Terminal/Bash", "for loops", "console.log",],
correctAnswer: "console.log",
},
];
// Questions, options, answers ends

// Local storage
/*

When user clicks the submit buttons
add click event listener

//Highscore
var storage = JSON.parse(localStorage.getitem("user"));
if(storage === null) {
    storage = []; - empty array
}
var user = {
name: input.value,
score: score, 
};

storage.push(user);
localStorage.setItem("user", JSON.strigify(storage));

JSON.stringify to send it(store), JSON.parse to get it(retreive).
*/

// score += 20 - add this to if statements for questions. If question is answered correctly, add 20 points.