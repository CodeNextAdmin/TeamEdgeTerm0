
/* -------------------------------------------- 
Day 1 Challenges: 
-------------------------------------------- */

// Example
let message = "Hello World!";
console.log(message);

/* -------------------------------------------- 
Challenge 1:
Imagine it's the first day of class. (Wait, it is the first day isn't it..Deja vu?) 
Everyone's participating in an icebreaker and has to introduce themselves. 
It goes something like:
-------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/*--- Solution Code ---*/
let name = "Jane";
let grade = 12;
let funFact = "I love woodworking!"
/*--- Solution Code ---*/

console.log(`Hi! My name is ${name}`);
console.log(`I'm in the ${grade}th grade.`);
console.log(`A fun fact about me is that ${funFact}`);


// **** Challenge 1: Problem 1 ****
// Declare and initalize the variables with your response for the three statements above! 
// Hint: Also think about where you would declare and initialize those variables

// **** Upchallenge! ****
// Can you also print out the data type of the variables? 

/*--- Solution Code ---*/
console.log(typeof(name));
console.log(typeof(grade));
console.log(typeof(funFact));
/*--- Solution Code ---*/


// **** Challenge 1: Problem 2 ****
// Create a string for the different lines of the Happy Birthday Song
// Print out the song using the stings you declared.

/*--- Solution Code ---*/
let happyBirthday = `Happy Birthday to you!`
let dear = `Happy Birthday dear ${name}!`
console.log(`${happyBirthday}
${happyBirthday}
${dear}
${happyBirthday}`);
/*--- Solution Code ---*/


// **** Challenge 1: Problem 3 ****
// Print out a string that has backticks in it.

/*--- Solution Code ---*/
console.log(`She asked, \`How are you today?\``)
/*--- Solution Code ---*/


/* -------------------------------------------- 
Challenge 2: 
Below is a set of problems to help you solidify your understanding of math operators
Write your solution code under each commented problem. 
-------------------------------------------- */

console.log("------------------- Challenge 2 -------------------")

// Here are some variables to get you started
let num1 = 5;
let num2 = 10;

// **** Challenge 2: Problem 1 ****
// Store the sum of num1 and num2 in a variable.
// Print the sum.

/*--- Solution Code ---*/
let sum = num1 + num2;
console.log(sum);
/*--- Solution Code ---*/


// **** Challenge 2: Problem 2 ****
// Store the difference between sum (above) and 7 in a variable.
// Print the difference.

/*--- Solution Code ---*/
let difference = sum - 7;
console.log(difference);
/*--- Solution Code ---*/


// **** Challenge 2: Problem 3 ****
// Store the product of the difference and 3 in a variable.
// Print the product.

/*--- Solution Code ---*/
let product = difference * 3;
console.log(product);
/*--- Solution Code ---*/


// **** Challenge 2: Problem 4 ****
// Store the power of the product squared in a variable.
// Print the power.

/*--- Solution Code ---*/
let power = product ** 2;
console.log(power);
/*--- Solution Code ---*/


// **** Challenge 2: Problem 5 ****
// Store the quotient of the power divided by 4 in a variable.
// Print the quotient.

/*--- Solution Code ---*/
let quotient = power/4;
console.log(quotient);
/*--- Solution Code ---*/


// **** Challenge 2: Problem 6 ****
// Store the remainder of the quotient divided by 2 in a variable.
// Print the remainder.

/*--- Solution Code ---*/
let remainder = quotient%2;
console.log(remainder);
/*--- Solution Code ---*/


// **** Upchallenge! ****
// Given a variable that stores a number, print the values that come right before and right after.
// For example, given the number 4, the program should print 3 and 5. 
// Your code should work if the value of the variable is changed.

let num = 9;

/*--- Solution Code ---*/
let less = num-1;
let more = num+1;

console.log(`${less}, ${more}`);
/*--- Solution Code ---*/


/* -------------------------------------------- */
