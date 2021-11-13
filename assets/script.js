var startButton = document.querySelector("#start-btn");
var questions = document.getElementById("#question");

function startQuiz();

function questions();


/* Questions 

Quetion:
Choices:
correctAnwer:

Q: Commonly used data types do not include:
A: strings, booleans, alerts, numbers.

Q: The condition in an if / else statement is enclosed with ____ ?
A: quotes, curly brackets, parenthesis, square brackets.

Q: Arrays in JavaScript can be used to store ____ ?
A: Numbers & Strings, Other arrays, Booleans, All of the above.

Q: String Values must be enclosed within ____ when being assigned to variables.
A: Commas, Curly brackets, Quotes, Parenthesis.

Q: A very useful tool used during development and debugging for printing content to the debugger is:
A: Javascript, Terminal/Bash, for loops, console.log.
*/

// Timer
// var time = document.queryselector("#timer") - global

/* function setTime() {
    var countDown = setInterval(function () {
        counter --;
        if (counter === -1) {
            clearInterval(countdown);
        }
        timer.textcontent = counter; 
    }, 1000);
}

setTime(); - Call after first question
*/

// Local storage
/*

var score = 0; - global variable

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