console.log("Hello Everyone!")

let compScore = 0;
let humanScore = 0;


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

let compChoice;
if (getRandomInt() == 0) {
    compChoice = "Rock";
} else if (getRandomInt() == 1) {
    compChoice = "Paper";
} else {
    compChoice = "Scissors";
}

let z;
let y;

if ( compChoice == "Scissors") {
    z = compScore++
} else {
    y = humanScore++
}

console.log(`Computer score = ${compScore} || Your score = ${humanScore}`);
let x = `Computer choose ${compChoice}!`;
console.log(x)