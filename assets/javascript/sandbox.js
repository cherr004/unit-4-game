// JavaScript function that wraps everything and makes it so that html and css fully run on the DOM before Javascript/Jquery starts
$(document).ready(function () {

    //Variables we will use
    var randNumComp = 0;
    var randNumCrystal = 0;
    var totalScore = 0;
    var losses = "";
    var wins = "";

    // function to create the random number (19-120) that will appear in the randNum div
    var randNum = Math.floor(Math.random() * 120) + 1;

    //Setting function for the random number for the crystals (1-12)
    var randNumCrystal = Math.floor(Math.random() * 12) + 1;

    //functions that puts the amount of wins/losses tallied into the div for win/losses after the text that was created in the html
    //this is where connect to HTML to fill in visual data for user 

    var winsTallied = function () {
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
    };

    var lossesTallied = function () {
        document.querySelector("#losses").innerhtml = "Losses:" + losses;
    };

    //function called when we reset everything after win or lose
    function reset() {
        randNumComp = "";
        randNumCrystal = "";
        totalScore = "";
    };

    // Append the randNum results to the randNum div
    $("#randNum").text(randNum);

    //Setting up a function to reset the game and give an alert if the player wins, add the current score, and reset the game
    function win() {
        alert("You win smarty pants");
        wins++;
        $("#wins").append(wins)
        reset();
    }
    //Setting up a function to reset the game and give an alert if the player losses
    function lose() {
        alert("You lose dumb dumb!");
        losses++;
        $("#losses").append(losses)
        reset();
    };

    // function for if else statement stating that if the total score after the button click is = to the generated ranom number you win, if it's greater than the random number, you lose
    function winLoss() {
        if (totalScore == randNumComp) {
            win();
        }
        else if (totalScore > randNumComp) {
            lose();
        }
    };

    // .on('click to add a listen event for a click) - Then function to create the random number (1-12) when clicking the crystal
    $("#redButton").on("click", function () {

        //Adding the random number from the crystal click to the current score from the play (sum of all clicks)
        totalScore = totalScore + randNumCrystal;

        //console.log to check if it works
        console.log("totalScore=" + totalScore);

        //adding the current score to it's appropriate div
        $("#randNumAgg").text(totalScore);

        // adding the winLoss function to state whether the game was won or lost
        winLoss();
    });

    //Blue button function
    $("#blueButton").on("click", function () {
        totalScore = totalScore + randNumCrystal;
        console.log("totalScore=" + totalScore);
        $("#randNumAgg").text(totalScore);
        winLoss();
    });

    //Yellow button functionality code
    $("#yellowButton").on("click", function () {
        totalScore = totalScore + randNumCrystal;
        console.log("totalScore=" + totalScore);
        $("#randNumAgg").text(totalScore);
        winLoss();
    });

    //Green Button functionality code
    $("#greenButton").on("click", function () {
        totalScore = totalScore + randNumCrystal;
        console.log("playerScoreTotal=" + userNumAgg);
        $("#randNumAgg").text(totalScore);
        winLoss();
    });
});