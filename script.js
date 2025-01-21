alert("Heads up PlayerOne, you've got 10 rounds of gameplay per session! \n Rule: To win, you need to score at least 5.")

let compScore = 0;
let humanScore = 0;

console.log(`Computer score = ${compScore} || Your score = ${humanScore}`);

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

let humanInput = prompt("Choose between Rock, Paper and Scissors:")
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
}

alert("Round 1")
console.log("Round 1:")
playRound();

alert("Round 2")
console.log("Round 2:")
playRound();

alert("Round 3")
console.log("Round 3:")
playRound();

alert("Round 4")
console.log("Round 4:")
playRound();

alert("Round 5")
console.log("Round 5:")
playRound();

alert("Round 6")
console.log("Round 6:")
playRound();

alert("Round 7")
console.log("Round 7:")
playRound();

alert("Round 8")
console.log("Round 8:")
playRound();

alert("Round 9")
console.log("Round 9:")
playRound();

alert("Round 10 (Final)")
console.log("Round 10:")
playRound();

if (compScore > humanScore) {
    alert("You lose this session to a COMPUTER! shame!")
} else if (compScore < humanScore && humanScore > 4) {
    alert("You won sha, thank God for ya life...")
} else {
    alert("Seems this session is a draw, either you had less than five or had same score as computer")
}