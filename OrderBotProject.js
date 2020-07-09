/* -------------------------------------------- 
	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	At the end of the meal, you and your friends have to split the bill. 
	Wouldn't it be great if we could automate that math?
					Let's try it!
  -------------------------------------------- 
Scenario Parameters: 
	When you and your friends eat out, each of you have the option to order:
		A meal
		A drink
	At the end of the meal, the receipt comes and you all have to calculate for each person:
		Tax
		Tip 
After this program finishes running, it should output a specific total for each person
  -------------------------------------------- */

const READLINE = require("readline-sync");
let pOne = READLINE.question("Enter Your Name: ");
let pTwo = READLINE.question("Enter Your Friend's Name: ");
let pThree = READLINE.question("Enter Your Other Friend's Name: ");

/* -------------------------------------------- 
Part 1:
Let's start by taking the order of the table(you and two friends). What did each person order?
Write a function that will take the table's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 
Remember! Functions are meant to be reusable, so write a function that will work when called for each person!
-------------------------------------------- */

let pOneMeal;
let pOneDrink;
let pTwoMeal;
let pTwoDrink;
let pThreeMeal;
let pThreeDrink;

function takeOrder(person, item){
	cost = parseInt(READLINE.question(`Enter the price of ${person}'s ${item}: `));
	return cost;
}

pOneMeal = takeOrder(pOne, `meal`);
pOneDrink = takeOrder(pOne, `drink`);
pTwoMeal = takeOrder(pTwo, `meal`);
pTwoDrink = takeOrder(pTwo, `drink`);
pThreeMeal = takeOrder(pThree, `meal`);
pThreeDrink = takeOrder(pThree, `drink`);

console.log(pOneMeal, pOneDrink, pTwoMeal, pTwoDrink, pThreeMeal, pThreeDrink);

/* -------------------------------------------- 
Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's meal(including tip and tax).
Write a function that will calculate the cost of each person's meal, including:
- Cost of their meal
- Cost of their drink
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)
Remember! Functions are meant to be reusable, so write a function that will work when called for each person!
-------------------------------------------- */

let pOneTotal;
let pTwoTotal;
let pThreeTotal;

function calculateCosts(meal, drink){
	userTip = READLINE.question(`How much do you want to tip?  15%?  18%?  20%? `);
	meals = meal + drink;
	tax = meals * 0.0875;
	totalwTax = meals + tax;
	let tip = 0
	if(userTip == `15%`){
		tip = totalwTax * .15;	
	}
	else if(userTip == `18%`){
		tip = totalwTax * .18;	
	}
	else if(userTip == `20%`){
		tip = totalwTax * .2;	
	}
	total = totalwTax + tip;
	return total;
}

pOneTotal = calculateCosts(pOneMeal, pOneDrink);
pTwoTotal = calculateCosts(pTwoMeal, pTwoDrink);
pThreeTotal = calculateCosts(pThreeMeal, pThreeDrink);

console.log(pOneTotal, pTwoTotal, pThreeTotal);

/* -------------------------------------------- 
Part 3:
Let's print out a receipt for each person.
Write a function that will take the values of each person's meal and total cost and print it out in an appealing way.
The receipt should include:
- Cost of their meal
- Cost of their drink
Remember! Functions are meant to be reusable, so write a function that will work when called for each person!
-------------------------------------------- */

function printReciept(person, meal, drink, total){
	console.log(`${person}:
		Meal: ${meal}
		Drink: ${drink}
		+ tax & tip
		Total: ${total}`);
}

printReciept(pOne, pOneMeal, pOneDrink, pOneTotal);
printReciept(pTwo, pTwoMeal, pTwoDrink, pTwoTotal);
printReciept(pThree, pThreeMeal, pThreeDrink, pThreeTotal);


/* -------------------------------------------- 
Part 4: Upchallenges!
How many of these upchallenges can you implement?
- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any appetizers ordered for the table?
- Display the tax and tip values
-------------------------------------------- */
