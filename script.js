// first the variables
let playerchoice =  "";
let computerchoice = "";
let playerscore = 0;
let computerscore = 0;

//the default message in the scorebox
document.getElementById("target-score").innerText = "Player: " + playerscore + " Computer: " + computerscore;

//determine what happens if you click the buttons
document.getElementById("rock").addEventListener("click",function(){
    playerchoice = "rock";
})
document.getElementById("paper").addEventListener("click",function(){
    playerchoice = "paper";
})
document.getElementById("scissors").addEventListener("click",function(){
    playerchoice = "scissors";
})
document.getElementById("lizard").addEventListener("click",function(){
    playerchoice = "lizard";
})
document.getElementById("spock").addEventListener("click",function(){
    playerchoice = "spock";
})

//make the computer pick a random item
document.getElementById("computers-move").addEventListener("click",function(){
    let number = Math.floor(Math.random() *5) +1;
    switch(number){
        case 1:
            computerchoice = "rock";
            break;
        case 2:
            computerchoice = "paper";
            break;
        case 3:
            computerchoice = "scissors";
            break;
        case 4:
            computerchoice = "lizard";
            break;
        case 5:
            computerchoice = "spock";
            break;
    }

//the player should always play first, and then the computer, so:
    if (playerchoice === ""){
        document.getElementById("target").innerText = "Humans always go first!"

//if it is a tie:
    } else if (playerchoice === computerchoice){
        document.getElementById("target").innerText = "You chose " + playerchoice + ", the computer chose " + computerchoice + ". It's a tie! ";

//if one of the two won, determining who and declaring the winner in the target and the scorebox
    } else if ((playerchoice === "scissors" && computerchoice === "paper")
            || (playerchoice === "paper" && computerchoice === "rock")
            || (playerchoice === "rock" && computerchoice === "lizard")
            || (playerchoice === "lizard" && computerchoice === "spock")
            || (playerchoice === "spock" && computerchoice === "scissors")
            || (playerchoice === "scissors" && computerchoice === "lizard")
            || (playerchoice === "lizard" && computerchoice === "paper")
            || (playerchoice === "paper" && computerchoice === "spock")
            || (playerchoice === "spock" && computerchoice === "rock")
            || (playerchoice === "rock" && computerchoice === "scissors")){

        document.getElementById("target").innerText = "You chose " + playerchoice + ", the computer chose " + computerchoice + ". You won! ";
        playerscore++;
        document.getElementById("target-score").innerText = "Player: " + playerscore + " Computer: " + computerscore;
    } else {

        document.getElementById("target").innerText = "You chose " + playerchoice + ", the computer chose " + computerchoice + ". You lost! ";
        computerscore++;
        document.getElementById("target-score").innerText = "Player: " + playerscore + " Computer: " + computerscore;
    }

})

// the reset button to clear all data
document.getElementById("reset").addEventListener("click", function(){
     playerchoice =  "";
     computerchoice = "";
     playerscore = 0;
     computerscore = 0;
     document.getElementById("target").innerText = "";
     document.getElementById("target-score").innerText = "player: " + playerscore + " computer: " + computerscore;

})


