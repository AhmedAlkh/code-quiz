var startButton = document.querySelector("#start-btn");
var questionBox = document.querySelector("#questions-box");
var questionTitle = document.querySelector("#question");
var time = document.querySelector("#time")
var intro = document.querySelector("#introduction");
var answerButtons = document.querySelector("#answer-buttons");
var resultBox = document.querySelector("#result-box");
var result = document.querySelector("#result");
var results = document.querySelector("#results");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit-btn");
var correctAnswer;
var score = 0;
var counter = 75;
var currentQuestion = 0;
var countDown;

// Timer 
function setTime() {   
    counter = 75;     
    countDown = setInterval(function() {
        counter --;        
        if (counter < 0) {                        
            endQuiz();
        } else {
            time.innerText = counter; 
        }
    }, 1000);
};
// Timer ends

// Start quiz
function startQuiz() {    
    intro.classList.add("hidden");
    questionBox.classList.remove("hidden");
    currentQuestion = 0;    

    //start timer when first question is revealed
    setTime();

    //show the first question
    showNextQuestion();
};
// Start quiz ends

// Generate questions
function showNextQuestion() {    
    var question = questions[currentQuestion];
    console.log(question);    
    console.log("Question #" + currentQuestion);
    if (question === undefined) {
        endQuiz();

    } else {
        questionTitle.innerHTML = question.title;
        question.choices.forEach(function(choice, index) {
            var button = document.querySelector("#answer" + index);
            button.innerHTML = choice;     
            button.setAttribute("correctAnswer", question.correctAnswer);            
            
        });
    }
    console.log(question);
}
// Generate questions

// End quiz
function endQuiz() {
    questionBox.classList.add("hidden");
    results.classList.remove("hidden");
    finalScore.innerHTML = score;   
    clearInterval(countDown); 
}
//End quiz ends

// Questions, options, answers
var questions = [
    {
        title: "Commonly used data types do not include:",
        choices: ["strings", "booleans", "alerts", "numbers",],
        correctAnswer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed with ____ ?",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets",],
        correctAnswer: "parenthesis",
    },
    {
        title: "Arrays in JavaScript can be used to store ____ ?",
        choices: ["Numbers & Strings", "Other arrays", "Booleans", "All of the above",],
        correctAnswer: "All of the above",
    },
    {
        title: "String Values must be enclosed within ____ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis",],
        correctAnswer: "Quotes",
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/Bash", "for loops", "console.log",],
        correctAnswer: "console.log",
    },
];
// Questions, options, answers ends

startButton.addEventListener("click", startQuiz);

// Submit button
submitButton.addEventListener("click", function() {
    console.log(initials.value);
    var userInitials = initials.value;
    var storage = JSON.parse(localStorage.getItem("highscores"));
    if (storage === null) {
        storage = [];
    }
    storage.push({
        initials: userInitials,
        score: score
    });
    localStorage.setItem("highscores",JSON.stringify(storage));
    window.location = "./assets/highscore.html";
});
// Submit button ends

// Finding answers loop: correct = +20 points, incorrect = -10 seconds on timer.
var numberOfAnswers = 4;
for (i = 0; i < numberOfAnswers; i++) {
     
    var button = document.querySelector("#answer" + i);           
    button.addEventListener("click", function(){     
        resultBox.classList.remove("hidden");    
    
        if (this.getAttribute("correctAnswer") == this.innerHTML) {
            result.innerHTML = "Correct!";
            score += 20;
        } else {
            result.innerHTML = "Wrong!";
            counter -= 10;
        }
        currentQuestion++;
        showNextQuestion();
    });
    }
// Finding answers loop ends