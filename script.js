console.log("Fire! Chai");

//Logic for game 
//scoreboard: Human score ----- Computer score
//Choice boaard: You chose ----- Computer chose
//Result board: (xyz) won! ___ beats ___.
//Increments score value of round winner
//After five rounds, a winner (or draw) is declared 
//Then DOM is used to attach the play functions to html buttons
//And console logs are displayed in the html page.

//scoreboard
let humanScore = 0;
let compScore = 0;

//choice board;
let humanChoice;
let compChoice;

//round result annunciation
let roundResult;

//to feed human choice from buttonclicks
function human(choice) {
    humanChoice = choice;
};



function playRound() {
//-----To get computer's choice:    
    let compNum = Math.floor((Math.random() * 5) + 1);
    if(compNum == 1 || compNum == 3) {
        compChoice = "ROCK";
    } else if(compNum == 2 || compNum == 4) {
        compChoice = "PAPER";
    } else {
        compChoice = "SCISSORS";
    };

//-----To evaluate, declare and increment score for the winner of a round:
    if(humanChoice == compChoice) {
        roundResult = "It's a draw";
    } else if(humanChoice == "ROCK" && compChoice == "PAPER") {
        roundResult = "Computer won!";
        compScore++;
    } else if(humanChoice == "ROCK" && compChoice == "SCISSORS") {
        roundResult = "You won!";
        humanScore++;
    } else if(humanChoice == "PAPER" && compChoice == "ROCK") {
        roundResult = "You won!";
        humanScore++;
    } else if(humanChoice == "PAPER" && compChoice == "SCISSORS") {
        roundResult = "Computer won!";
        compScore++;
    } else if(humanChoice == "SCISSORS" && compChoice == "ROCK") {
        roundResult = "Computer won!";
        compScore++;
    } else if(humanChoice == "SCISSORS" && compChoice == "PAPER") {
        roundResult = "You won!";
        humanScore++;
    } else {
        roundResult = "Unaccounted operation!!";
    };


//score display:
    const scoreDisplay = document.querySelector(".score");
    scoreDisplay.textContent = `Your score = ${humanScore}: Computer score = ${compScore}`;

//choice display:
    const choicePanel = document.querySelector(".choice");
    choicePanel.textContent = `You chose ${humanChoice}: Computer chose ${compChoice}`;

//result display:
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = roundResult;

//to end session after a player scores 5:
    if(humanScore == 5 || compScore == 5) {
        for(button of buttons) {
            button.disabled = true;
            button.style.backgroundColor = "rgb(0 120 30)";
            button.style.color = "rgb(120 120 120)";
        }
        if(humanScore > compScore) {
            alert(`You won this session! You: ${humanScore}; computer: ${compScore}.`);
        } else {
            alert(`Computer won this session! Computer: ${compScore}; you: ${humanScore}`);
        }
        reset();
    }
}

//DOM MANIPULATION: BUTTONS
//rock button:
const container = document.querySelector(".container");
const buttonBox = document.querySelector(".buttons");
const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";
buttonBox.appendChild(rockButton); 
rockButton.addEventListener("click", () => {
    human("ROCK");
    playRound();
});

//paper button:
const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
buttonBox.appendChild(paperButton); 
paperButton.addEventListener("click", () => {
    human("PAPER");
    playRound();
});

//scissors button:
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
buttonBox.appendChild(scissorsButton); 
scissorsButton.addEventListener("click", () => {
    human("SCISSORS");
    playRound();
});


//session timer (a session lasts until a player's score reaches 5):


//DOM MANIPULATION: STYLES
//center the page content:
const theBody = document.querySelector(".thebody");
theBody.style.cssText = "text-align: center; background: black; height: 100vh; padding: 1vh 5vw;";

//style the h1:
const header = document.querySelector("h1");
header.style.cssText = "border: 4px solid rgb(0 255 0); background: black; color: white; display: flex; align-items: center; justify-content: center; height: 20vh;";

//style the container
container.style.cssText = "background: rgb(255 0 0); border: 4px solid rgb(120 120 120); color: white; font-weight: 600; padding: 3vh;";

//style the buttons:
const buttons = document.querySelectorAll("button");
for(button of buttons) {
    button.style.cssText = "display: inline-block; background: rgb(0 255 0); width: 15vw; height: 12vh; margin: 9vh 2vw; color: white; font-weight: 800;";

}

//style the reset button:
const resetButton = document.querySelector(".reset");
function reset() {
    resetButton.textContent = "NEW GAME?"
    resetButton.style.cssText = " display: flex; align-items: center; justify-content: center; width: 50vw; background: rgb(0 255 0); color: rgb(50 100 50); font-weight: 800; margin: auto;"
}

//to reload page on click
resetButton.addEventListener("click", () => {
    location.reload();
})