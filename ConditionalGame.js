/* -------------------------------------------- 

	You've just learned about variables, conditionals.
	Just from knowing those two topics, you can do so much!
	
	Let's try to make a simple program that responds to the user.
	We're going to recreate the Magic 8 Ball!!!
			
			Never heard of it? That's ok!

					You got this!

  -------------------------------------------- 

	How a Magic 8 Ball Works:

	The user asks a question and vigoriously shakes the ball. 
	Then the ball will respond with one of twenty responses, chosen at random. 

	That's pretty simple right?

  -------------------------------------------- 

	Part 1: 
	Print instructions on the screen and 
	prompt the user to ask a question

	Tip: Don't forget to import the readline-sync module!

  -------------------------------------------- */

const READLINE = require("readline-sync");

console.log(`Thanks for using the Magic 8 Ball!`);
let userInput = READLINE.question(`What would you like to know?  `);

/* -------------------------------------------- 

	Part 2: Next, we need to randomly select a response from 20 options.

	Randomly select a number from 0 - 19 
	Use that to select from the following responses:
		0 - It is certain.
		1 - It is decidedly so.
		2 - Without a doubt.
		3 - Yes - definitely.
		4 - You may rely on it.
		5 - As I see it, yes.
		6 - Most likely.
		7 - Outlook good.
		8 - Yes.
		9 - Signs point to yes.
		10 - Reply hazy, try again.
		11 - Ask again later.
		12 - Better not tell you now.
		13 - Cannot predict now.
		14 - Concentrate and ask again.
		15 - Don't count on it.
		16 - My reply is no.
		17 - My sources say no.
		18 - Outlook not so good.
		19 - Very doubtful.

	Look up Math.random to see how you can use it to select a random number.

  -------------------------------------------- */

let response = Math.floor(Math.random() * 20);

if(response == 0){
	console.log(`It is certain.`);
}
else if(response == 1){
	console.log(`It is decidedly so.`);
}
else if(response == 2){
	console.log(`Without a doubt.`);
}
else if(response == 3){
	console.log(`Yes - definitely.`);
}
else if(response == 4){
	console.log(`You may rely on it.`);
}
else if(response == 5){
	console.log(`As I see it, yes.`);
}
else if(response == 6){
	console.log(`Most likely.`);
}
else if(response == 7){
	console.log(`Outlook good.`);
}
else if(response == 8){
	console.log(`Yes.`);
}
else if(response == 9){
	console.log(`Signs point to yes.`);
}
else if(response == 10){
	console.log(`Reply hazy, try again.`);
}
else if(response == 11){
	console.log(`Ask again later.`);
}
else if(response == 12){
	console.log(`Better not tell you now.`);
}
else if(response == 13){
	console.log(`Cannot predict now.`);
}
else if(response == 14){
	console.log(`Concentrate and ask again.`);
}
else if(response == 15){
	console.log(`Don't count on it.`);
}
else if(response == 16){
	console.log(`My reply is no.`);
}
else if(response == 17){
	console.log(`My sources say no.`);
}
else if(response == 18){
	console.log(`Outlook not so good.`);
}
else if(response == 19){
	console.log(`Very doubtful.`);
}







