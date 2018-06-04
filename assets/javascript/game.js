// JavaScript function that wraps everything and makes it so that html and css fully run on the DOM before Javascript/Jquery starts
$(document).ready(function () {

    //Variables we will use
    var randNum = 0;
    var userNum = 0;
    var userNumAgg= 0;
    var playerScore = 0;
    var losses = "";
    var wins = "";

//functions that puts the amount of wins/losses tallied into the div for win/losses after the text that was created in the html
//this is where connect to HTML to fill in visual data for user 

var winsTallied = function() {
    document.querySelector("#wins").innerHTML = "Wins:" + wins;

var lossesTallied = function() {
 document.querySelector("#losses").innerhtml = "Losses:" + losses;
};

    //function called when we reset everything after win or lose
    var reset = function () {
        wins = "";
        losses = "";
        totalScore = "";
    };

    // function to create the random number (19-120) that will appear in the randNum div
    var randNum = Math.floor(Math.random() * 120) + 1;

    // Append the randNum results to the randNum div
    $("#randNum").append(randNum);

    // function to create the random number (1-12) when clicking the crystal
    $("#redButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum = Math.floor(Math.random() * 120) + 1;
        };

    $("#blueButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum2 = Math.floor(Math.random() * 120) + 1;

    $("#yellowButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum3 = Math.floor(Math.random() * 120) + 1;
        };

    $("#greenButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum4 = Math.floor(Math.random() * 120) + 1;
        };

//Resetting the game when a win or a loss occurs
if (randNum > userNumAgg) {
    if()
    document.querySelector('#win').innerHTML = "Wins: " + wins;
    alert("You won Dummy!");
}

reset()

else if (userNumAgg = randNum) {
    losses++;
    document.querySelector('.losses').innerHTML = "Losses:" + losses;
    alert("You lost noob");
    reset();
}
    });