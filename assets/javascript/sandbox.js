// JavaScript function that wraps everything and makes it so that html and css fully run on the DOM before Javascript/Jquery starts
$(document).ready(function () {

    //Variables we will use
    var totalScore = 0;
    var losses = "";
    var wins = "";

    // function to create the random number (19-120) that will appear in the randNum div
    var randNumComp = 19 + (Math.floor(Math.random() * 111) + 1);

    //Setting function for the random number for the crystals (1-12)
    var randNumCrystalRed = Math.floor(Math.random() * 12) + 1;
    var randNumCrystalBlue = Math.floor(Math.random() * 12) + 1;
    var randNumCrystalYellow = Math.floor(Math.random() * 12) +1;
    var randNumCrystalGreen = Math.floor(Math.random() * 12) + 1;

    //function called when we reset everything after win or lose
    function reset() {
        randNumCrystalRed = "";
        randNumCrystalBlue = "";
        randNumCrystalYellow = "";
        randNumCrystalGreen = "";
        totalScore = 0;
    };

    //Setting up a function to reset the game and give an alert if the player wins, add the current score, and reset the game
    function win() {
        alert("You win smarty pants");
        wins++;
        $("#wins").text("Wins:" + wins);
        reset();
    }
    //Setting up a function to reset the game and give an alert if the player losses
    function lose() {
        alert("You lose dumb dumb!");
        losses++;
        $("#losses").text("Losses:" + losses);
        reset();
    };

    // function for if else statement stating that if the total score after the button click is = to the generated ranom number you win, if it's greater than the random number, you lose
    function winLoss() {
        if (totalScore === randNumComp) {
            win();
        }
        else if (totalScore > randNumComp) {
            lose();
        }
    };
    // Insert (like Appending) the randNum to the randNum div
    $("#randNum").text(randNumComp);

    // .on('click to add a listen event for a click) - Then function to create the random number (1-12) when clicking the crystal
    $("#redButton").on("click", function () {

        //Adding the random number from the crystal click to the current score from the play (sum of all clicks)
        totalScore = totalScore + randNumCrystalRed;

        //console.log to check if it works
        console.log("totalScore=" + totalScore);

        //adding the current score to it's appropriate div
        $("#randNumAgg").text(totalScore);

        // adding the winLoss function to state whether the game was won or lost
        winLoss();
    });

    //Blue button function
    $("#blueButton").on("click", function () {
        totalScore = totalScore + randNumCrystalBlue;
        console.log("totalScore=" + totalScore);
        $("#randNumAgg").text(totalScore);
        winLoss();
    });

    //Yellow button functionality code
    $("#yellowButton").on("click", function () {
        totalScore = totalScore + randNumCrystalYellow;
        console.log("totalScore=" + totalScore);
        $("#randNumAgg").text(totalScore);
        winLoss();
    });

    //Green Button functionality code
    $("#greenButton").on("click", function () {
        totalScore = totalScore + randNumCrystalGreen;
        console.log("totalScore=" + totalScore);
        $("#randNumAgg").text(totalScore);
        winLoss();
    });
});