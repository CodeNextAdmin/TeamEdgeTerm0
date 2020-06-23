const READLINE = require("readline-sync");
const options = ["rock", "paper", "scissors"];

console.log(`Let's play Rock Paper Scissors!`);

// Challenge
// Find the bugs below:

while(true){
	let userInput = READLINE.question(`Do you want to play rock, paper, or scissors? `).toLowerCase();
	randomSelection = Math.floor(Math.random()*3);
  computerSelection = options[randomSelection];

	console.log("You played: ${userInput} and the computer played: ${computerSelection}");
  if(userInput === computerSelection){
    console.log("It's a tie!");
  }
  else if((userInput = "rock" && computerSelection = "paper") ||
          (userInput = "paper" && computerSelection = "scissors") ||
          (userInput = "scissors" && computerSelection = "rock")){
    console.log("You Lose!");
  }
  else if{
    console.log("You Win!");
  }
