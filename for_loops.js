/********************************************************************
 *                                                                  
 *  Team Edge Array Mini-project: FOR LOOP CHALLENGES
 * 
 *   Complete the following loop challenges below. Follow the ToDos
 *   1. COUNTER: Write a loop that prints a happy birthday message for every
 *      year you have been alive.
 *   2. ITERATOR: Write a for for loop that logs every item in an array
 *   3. DEBUG: Fix a for loop that has an error (out-of-bounds)
 *   4. EVEN COUNTDOWN: Write a for loop that counts down from 100 to 0, 
 *      logging only the odd numers
 *   5. FINDER: Write a function that takes in an array and a word and prints 
 *      CONGRATULATIONS!! if the word is found in the array
 *   6. NESTED: Write a function that logs every letter in a sentence
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

console.log("------------------- CHALLENGE 1 : COUNTER -------------------")

//this array logs every number between 0 and 10, using the index i

for(let i = 0 ; i <=10 ; i++) {

    console.log("Counter at: " + i)
   
   }

//-->TODO: Write a loop that prints a happy birthday message for every year you have been alive.



console.log("------------------- CHALLENGE 2 : ITERATOR ----------------------")

//here is an array full of colors...
let colors = ['red' , 'violet' , 'cyan' , 'pink' , 'lime' , 'white' , 'yellow', 'black' , 'magenta', 'green', 'orange']

//This is how you can iterate through an array using the length property:
for(let i = 0 ; i< colors.length; i ++) {

    console.log("The color is: " + colors[i])
}

//-->TODO: Declare an array with at least 10 animals. You provide the animals.
let animals = []

//-->TODO: Log all the animals in the array with a for loop. 


console.log("------------------- CHALLENGE 3 : DEBUG -------------------------")

//-->TODO: fix this code so it no longer logs the last item as undefined...
for(let i = 0 ; i<= colors.length; i ++) {

    console.log("The color is: " + colors[i])
}

//-->TODO: fix this code! What could be wrong? It should print out the 5 times tables all the way to 12.

console.log("Behold...the 5 times table: ")
for(let i = 0 ; i > 12;  i++) {

    console.log(` 5 x ${i} =  ` + i*5 )
     
}

//-->TODO: This function takes in an array, but needs to log the items inside. What's missing?

function logArray(array){

    for(let i = 0 ; i<array.length ; i++){

        console.log(i)
    }
}

 

console.log("------------------- CHALLENGE 4 : EVEN COUNTDOWN ------------------")


// This makes a random number between 0-50
let random = Math.floor(Math.random() * 51); //

//this if/else statement checks if the number is even using the modulo operator (%)
if(random % 2 == 0){

    console.log(random + " is even!")
}else {

    console.log(random + " is odd!")
}

//-->TODO: Write a function that counts BACKWARDS from 100 and logs only odd numbers


//-->TODO: Write a function that counts BACKWARDS from the given random number and logs only even numbers


console.log("------------------- CHALLENGE 5 : Finder ------------------")

//This code uses .includes() to see if an element exists in an array. It only has to appear once.
let color = READLINE.question('Type a one word color and see if it is one of my favorite colors! >> ')
if(colors.includes(color)){

    console.log("Yes, that color is a fav")
}else{

    console.log("No, that color is not one my favorites")
}

//-->TODO Declare an array of any strings you  want: cities, friends, movies, etc.


//-->TODO Prompt the user to "Guess" if an element is present. Store their response in a varaible


//-->TODO Write function to prompt the user and see if the element is present. If so, print CONGRATULATIONS!


//-->TODO Call your function.



console.log("------------------- CHALLENGE 6 : Nested ------------------")

//this is how you get the length of a word:
let bigWord = "antidisestablishmentarianism"
console.log(`${bigWord} has  ${bigWord.length} letters` )

//this is how you can nest for loops, one insde the other! Theseloops through all the colors, and then through all the characters in the color
for(let i = 0; i < colors.length ; i++){
//for all the colors:

   console.log(colors[i] ) 

     for(let j = 0 ; j < colors[i].length; j++){

            console.log(" - " + colors[i][j]) //log each letter. Remember, a string is also an array of characters.

     }

}

//-->TODO Write a function that logs every letter in a sentence that a user enters.


//-->CHALLENGE Let the user know which word is the shortest one!

