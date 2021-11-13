var storage = JSON.parse(localStorage.getItem("user"));
var container = document.getElementById("highscore-container");

if (storage === null) {
    empty()
} else {
    AddUser()
}

function empty() {
    //create element h1
    var highscore = document.createElement("h1");
    //set the elements text content = no highscores
    highscore.textContent = "No Highscores";
    // append it to the highscore container
    container.append(highscore);
}

function addUser() {
    // clear the container
    container.innerHTML = "";
    // create ul
    var userHighscore = document.createElement("ul");
    // append ul to container
    container.append(userHighscore);
    // then make a for loop through storage
    for (var i = 0; i < storage.length; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = "name: " + storage[i].name + " score: " + storage[i].score;
        container.append(listItem);
    }
    // in the loop we want to create a li for each storage item at [i]
    // append
}