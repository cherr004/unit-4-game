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
    $("#randNum").text(randNum);

//Function to reset the game
function reset(){
    
}

//Setting up a function to reset the game and give an alert if the player wins, add the current score, and reset the game
function win(){
    alert("You win smarty pants");
    wins++;
    $("#wins").append(wins)
    reset();
}
//Setting up a function to reset the game and give an alert if the player losses
function lose(){
    alert("You lose dumb dumb!");
    losses++;
    $("#losses").append(losses)
    reset();
}



    // .on('click to add a listen event for a click) - Then function to create the random number (1-12) when clicking the crystal
    $("#redButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum1 = Math.floor(Math.random() * 120) + 1;
    //Adding the random number from the crystal click to the current score from the play (sum of all clicks)
            userNumAgg = userNumAgg + randNum1;
    //console.log to check if it works
            console.log("playerScoreTotal="+userNumAgg);
    //adding the current score to it's appropriate div
            $("#randNumAgg").text(userNumAgg);
    //if statement setting rules for wins and loss, then resetting the game based on the functions I set up earlier for win and lose
                if (userNumAgg == randNum){
                win();
                }
                else if (userNumAgg > randNum){
                    lose();
                }
        };

    $("#blueButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum2 = Math.floor(Math.random() * 120) + 1;
            userNumAgg = userNumAgg + randNum2;
            console.log("playerScoreTotal="+userNumAgg);
            $("#randNumAgg").text(userNumAgg);
                if (userNumAgg == randNum){
                win();
                }

                else if(userNumAgg > randNum){
                lose();
                }
            };
        });

            
    $("#yellowButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum3 = Math.floor(Math.random() * 120) + 1;
            userNumAgg = userNumAgg + randNum3;
            console.log("playerScoreTotal="+userNumAgg);
            $("#randNumAgg").text(userNumAgg);
                if (userNumAgg == randNum){
                win();
                }

                else if(userNumAgg > randNum){
                lose();
                }
        };
    });

    $("#greenButton").on("click", function () {
        for (i = 0; i < 0; i++) {
            var randNum4 = Math.floor(Math.random() * 120) + 1;
            userNumAgg = userNumAgg + randNum4;
            console.log("playerScoreTotal="+userNumAgg);
            $("#randNumAgg").text(userNumAgg);
                if (userNumAgg == randNum){
                win();
                }

                else if(userNumAgg > randNum){
                lose();
                };
            };
        });


}

reset()

else if (userNumAgg = randNum) {
    losses++;
    document.querySelector('.losses').innerHTML = "Losses:" + losses;
    alert("You lost noob");
    reset();
}
    });