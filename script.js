//alert("Heads up PlayerOne, you've got 10 rounds of gameplay per session! \n Rule: To win, you need to score at least 5.")

let compScore = 0;
let humanScore = 0;

console.log(`Computer score = ${compScore} || Your score = ${humanScore}`);

let humanInput = "";
function playRound() {
function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

let compChoice;
if (getRandomInt() == 0 || getRandomInt() == 4 || getRandomInt() == 7) {
    compChoice = "paper";
} else if (getRandomInt() == 1 || getRandomInt() == 3 || getRandomInt() == 5) {
    compChoice = "scissors";
} else {
    compChoice = "rock";
}

let humanChoice = humanInput.toLowerCase();

console.log(`You chose: ${humanChoice}; Computer chose: ${compChoice}`);

//block code to evaluate which player wins a round

if (compChoice == "rock" && humanChoice == "scissors") {
    console.log("Computer won: Rock beats Scissors");
    compScore++;
} else if (compChoice == "rock" && humanChoice == "paper") {
    console.log("You won: Paper beats Rock");
    humanScore++;
} else if (compChoice == "rock" && humanChoice == "rock") {
    console.log("That was a draw: You both picked rock");
} else if (compChoice == "paper" && humanChoice == "scissors") {
    console.log("You won: Scissors beats Paper");
    humanScore++;
} else if (compChoice == "paper" && humanChoice == "rock") {
    console.log("Computer won: Paper beats Rock");
    compScore++;
} else if (compChoice == "paper" && humanChoice == "paper") {
    console.log("That was a draw: You both picked Paper");
} else if (compChoice == "scissors" && humanChoice == "rock") {
    console.log("You won: Rock beats Scissors");
    humanScore++;
} else if (compChoice == "scissors" && humanChoice == "paper") {
    console.log("Computer won: Scissors beats Paper");
    compScore++;
} else if (compChoice == "scissors" && humanChoice == "scissors") {
    console.log("That was a draw: You both picked Scissors");
} else {
    console.log("Your inout wasn't recognised, please choose either Rock, Paper or Scissors");
}

console.log(`Computer score = ${compScore} || Your score = ${humanScore}`);
scoreBar.textContent = `Computer = ${compScore}: Human = ${humanScore}`;

choiceBar.textContent = `You chose: ${humanChoice}; Computer chose: ${compChoice}`;
button.insertBefore(choiceBar, scoreBar);

if (compScore === 5 || humanScore === 5) {
    endOfRound();
    const sessionButton = document.createElement("button");
    sessionButton.textContent = "Start another session";
    button.appendChild(sessionButton)
    sessionButton.addEventListener("click", () => {
        startRound();

        function startRound() {
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
            scoreBar.textContent = "Computer = 0: Human = 0";
            button.removeChild(choiceBar);
            compScore = 0;
            humanScore = 0;
            button.removeChild(sessionButton);
        };
        
    })
} else {
   
};


/*let winnerText;
function winner() {
    if (compScore) {
        winnerText = `Computer won! Computer chose ${compChoice}; You chose ${humanChoice}`;
    } else if (humanScore++) {
        winnerText = `You won! Computer chose ${compChoice}; You chose ${humanChoice}`;
    } else {
        winnerText = `It's a draw. Computer chose ${compChoice}; You chose ${humanChoice}`;
    }
}
winner();
const winnerBar = document.createElement("p");
winnerBar.textContent = winnerText;
button.insertBefore(winnerBar, scoreBar);
*/
}



if (compScore > humanScore) {
    alert("You lose this session to a COMPUTER! shame!")
} else if (compScore < humanScore && humanScore > 4) {
    alert("You won sha, thank God for ya life...")
} else {
    //alert("Seems this session is a draw, either you had less than five or had same score as computer")
}

// creating html with javascript

const button = document.querySelector("#buttons");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"
button.appendChild(rockButton);
button.appendChild(paperButton);
button.appendChild(scissorsButton);

console.log(compScore);

const scoreBar = document.createElement("p");
scoreBar.textContent = `Computer = 0: Human = ${humanScore}`;
button.insertBefore(scoreBar, rockButton);

const choiceBar = document.createElement("p");

rockButton.addEventListener("click", () => {
    humanInput = "rock";
    playRound();
});
paperButton.addEventListener("click", () => {
    humanInput = "paper";
    playRound();
}
);
scissorsButton.addEventListener("click", () => {
    humanInput = "scissors";
    playRound();
});

function endOfRound() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


