/********************************************************************
 *                                                                  
 *  Team Edge Array Mini-project: FOR LOOP CHALLENGES
 * 
 *   Complete the following loop challenges below. Follow the ToDos
 *   1. COUNTER: Write a for loop that logs every number from 0 to 50
 *   2. ITERATOR: Write a for for loop that logs every item in an array
 *   3. DEBUG: Fix a for loop that has an error (out-of-bounds)
 *   4. EVEN COUNTDOWN: Write a for loop that counts down from 100 to 0, 
 *      logging only the odd numers
 *   5. FINDER: Write a function that takes in an array and a word and prints 
 *      CONGRATULATIONS!! if the word is found in the array
 *   6. NESTED: Write a function that Find the shortest word in a sentence
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

console.log("------------------- CHALLENGE 1 : COUNTER -------------------")

//this array logs every number between 0 and 10, using the index i

for(let i = 0 ; i <=10 ; i++) {

    console.log("Counter at: " + i)
   
   }

//-->TODO: Write another for loop that logs all numbers from 1 to 50, make sure to avoid zero.

for(let i = 1 ; i <=50 ; i++) {



    console.log("loop 2 Counter at: " + i)
   
   }


console.log("------------------- CHALLENGE 2 : ITERATOR ----------------------")

//here is an array full of colors...
let colors = ['red' , 'violet' , 'cyan' , 'pink' , 'lime' , 'white' , 'yellow', 'black' , 'magenta', 'green', 'orange']

//This is how you can iterate through an array using the .length property:
for(let i = 0 ; i< colors.length; i ++) {

    console.log("The color is: " + colors[i])
}

//-->TODO: Declare an array with at least 10 animals. You provide the animals.
let animals = ["unicorn", "manticore", "chimera", "phoenix", "griffin", "kraken", "bigfoot", "chupacabra", "pegasus", "basilisk"]

//-->TODO: Log all the animals in the array with a for loop. 
for(let i = 0 ; i< colors.length; i ++) {

    console.log(`animal ${i} is a ${animals[i]}`)
}


console.log("------------------- CHALLENGE 3 : DEBUG -------------------------")

//-->TODO: fix this code so it no longer logs the last item as undefined...
for(let i = 0 ; i< colors.length; i ++) {

    console.log("The color is: " + colors[i])
}

//-->TODO: fix this code! What could be wrong? It should print out the 5 times tables all the way to 12.

console.log("Behold...the 5 times table: ")
for(let i = 0 ; i <= 12;  i++) {

    console.log(` 5 x ${i} =  ` + i*5 )
     
}

//-->TODO: This function takes in an array, but needs to log the items inside. What's missing?

function logArray(array){

    for(let i = 0 ; i<array.length ; i++){

        console.log(array[i])
    }
}
logArray(animals) //usea any array
 

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
function countBackwards(){

    for(let i = 100 ; i >=0; i--){

        console.log("counting backwards: " + i )
    }
}

countBackwards()

//-->TODO: Write a function that counts BACKWARDS from the given random number and logs only even numbers
function countBackwardsFromRandom(rand){

    for(rand ; rand >=0; rand--){

        

        if(rand % 2 == 0){

            console.log("even from random :" + rand )
        }
    }
}
countBackwardsFromRandom(random)

console.log("------------------- CHALLENGE 5 : Finder ------------------")

//This code uses .includes() to see if an element exists in an array. It only has to appear once.

let color = READLINE.question(' Guess what color am i thinking of? >> ')
if(colors.includes(color)){

    console.log("Yes, that color is a fav")
}else{

    console.log("No, that color is not one my favorites")
}

//-->TODO Declare an array of any strings you  want: cities, friends, movies, etc.
let cities = ["oakland" , "new york" , "philadelphia" , "helsinki", "addis abbaba", "kingston"]

//-->TODO Prompt the user to "Guess" if an element is present. Store their response in a varaible
let chosenCity = READLINE.question(' Guess what city am i thinking of? >> ')


//-->TODO Write function to prompt the user and see if the element is present. IF so, print CONGRATULATIONS!
function findCity(city){
   console.log("Finding city...")
    if (cities.includes(city)){

        console.log("yes! " + city + " is correct!")
    } else {
        console.log("Sorry!")
    }
}


//-->TODO Call your function.

findCity(chosenCity)


console.log("------------------- CHALLENGE 6 : Nested ------------------")

//this is how you get the length of a word:
let bigWord = "antidisestablishmentarianism"
console.log(`${bigWord} has  ${bigWord.length} letters` )

//this is how you can nest for loops, one insde the other!
for(let i = 0; i < colors.length ; i++){
//for all the colors:

   //console.log(colors[i] ) 

     for(let j = 0 ; j < colors[i].length; j++){

            console.log(" - " + colors[i][j]) //log each letter. Remember, a string is also an array of characters.

     }

}

//-->TODO Write a function that finds the shortest word in a sentence. Prompt the user first to write a sentence. Print shortest word to the console.
let sentence = READLINE.question("Write a sentence and I will find the shortest word >> ")

function findShortestWord(){

    let words = sentence.split(" ")
    let shortestWord = words[0] //pick the first word 

      //actually didn't need to nest any loops! 
    for(let i = 0 ; i< words.length; i ++){

       let word = words[i]
       if(word.length < shortestWord.length){

        shortestWord = word
       }
         

    }

    console.log("The shortest word is : " + shortestWord)


}
findShortestWord(sentence)
