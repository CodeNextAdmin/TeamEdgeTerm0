/* -------------------------------------------- 
                                                                  
   In Lab 5, you learned about arrays. 
   Arrays are data structures athat allow us to store multiple values together. 
   Each element in the array can be accessed by its index.                                     
   
   Arrays can be useful when you want to store data that is similar. 
   For example, in a game, to keep track of high scores, instead of creating a new variable to store each high score, 
   all of the scores can be stored together in an array named highScores. 

   Remember! Test often and use the debugging tips you learned in the last lab!
    
  -------------------------------------------- */

 console.log(`
  _______                             ______ __           __ __                                
 |   _   |.----.----.---.-.--.--.    |      |  |--.---.-.|  |  |.-----.-----.-----.-----.-----.
 |       ||   _|   _|  _  |  |  |    |   ---|     |  _  ||  |  ||  -__|     |  _  |  -__|__ --|
 |___|___||__| |__| |___._|___  |    |______|__|__|___._||__|__||_____|__|__|___  |_____|_____|
                          |_____|                                           |_____|            `);


/* -------------------------------------------- 
Challenge 1: Introduction to Arrays
-------------------------------------------- */

 console.log("------------------- Challenge 1 -------------------")

// Example: Declaring an array of values and printing it out.
let emptyArray = [] //This is an empty JavaScript Array
let names = ["Sam", "Wolf", "Alex", "Bella", "Shaquan"]
console.log("names: " + names)  


// **** Challenge 1 : Part 1 **** 
// Given an array named food, fill the array with 5 strings.

let food = []
console.log("food: " + food)  


// **** Challenge 1 : Part 2 **** 
// Declare an array named numbers with 5 numbers.


console.log("numbers: " + numbers)   


// **** Challenge 1 : Part 3 **** 
// Declare and log two more arrays with anything you want. 





/* -------------------------------------------- 
Challenge 2: Accessing Data in Arrays
-------------------------------------------- */

console.log("------------------- CHALLENGE 2 -------------------")
 
// Example: This code logs the first element of the names array.
console.log("The first name is " + names[0]);


// **** Challenge 2 : Part 1 **** 
// Log the name of the person from your food array you spoke to last.




// **** Challenge 2 : Part 2 **** 
// Log the first AND last elements of any array you made.




/* -------------------------------------------- 
Challenge 3: Modifying Data in Arrays
-------------------------------------------- */

console.log("------------------- CHALLENGE 3 -------------------")

// Example: The value of the second element of the names array is updated to 'Alyssa'.
names[1] = "Alyssa"
console.log(names)


// **** Challenge 3 : Part 1 **** 
// Update all values of your food array with new food items that you're craving.






// Example: The code below uses the timesTen function to multiply the first element in our array by 10:
numbers[0] = timesTen(numbers[0])
console.log(numbers)

function timesTen(number){
    timesTenNumber = number * 10
    return timesTenNumber
}

// **** Challenge 3 : Part 2 **** 
// Write a function that multiplies a number by 1000 and log the array. 






/* -------------------------------------------- 
Challenge 4: Multidimensional Arrays
-------------------------------------------- */

console.log("------------------- CHALLENGE 4 -------------------")

// Example: Arrays can also store other arrays. below, two arrays have been declared and stored within another array.
let clubs = ["3D Modeling", "Laser Cutting" , "Intro to Python", "Web Development", "Robotics"]
let bootcamps = ["Public Speaking" ,"Branding" , "React", "Cybersecurity" , "Artificial Intelligence"]
let programs = [clubs, bootcamps]
console.log("Current Program Offerings: " + programs);


// **** Challenge 4: ****
// Declare a new array named 'orders' and store the food and numbers arrays in it. Log the orders array.







/* -------------------------------------------- 
Challenge 5: Array Methods
-------------------------------------------- */

console.log("------------------- CHALLENGE 5 -------------------")

// Example: Elements can be added into an array wihtout modifying any other elements. Using push() adds an element to the END of the array:
let movies = ["Toy Story 4", "The Dark Knight", "Parasite"]
console.log("Movies: " + movies)
movies.push("Joker")
movies.push("Black Panther")
console.log("Movies now has: " + movies)


// **** Challenge 5 : Part 1 **** 
// Add 2 more food items and numbers using .push() to the food and numbers arrays respectively. Log both arrays before and after adding new values.





// Example: Elements can also be removed from an array using .pop(), which removes the last element. 
// The function will return the value it removed and it can be stored in a variable.
let cities = ["New York", "Oakland", "Las Vegas", "Topeka"]
console.log("Cities: " + cities)
let removedCity = cities.pop()
console.log("Removed City: " + unwantedCity)


// **** Challenge 5 : Part 2 **** 
// Remove your last food item using .pop() and log the removed element.





//Note: There are more methods to remove and modify array elements. If you're curious, check out the reference on the course website.

/* -------------------------------------------- 
Challenge 6: Array Properties
-------------------------------------------- */

console.log("------------------- CHALLENGE 6 -------------------")

// Example: Arrays have properties that allow us to determine its size or length.
let numCities = cities.length
console.log(`There are ${numCities} ciites in my array`)


// **** Challenge 6 : Part 1 **** 
// Print out the number of food items using string literals.




// Example: The length property is key, especially in conditionals or to simply count how many times to do something.
if(numbers.length > 3){
    console.log("There are more than 3 numbers in my array")
} else{
    console.log("I need more numbers in my array!!!")
}

// **** Challenge 6 : Part 2 **** 
// Write an if/else statement to check the size of your food array. If you have 5 of less, add two more food items.






/* -------------------------------------------- 
Challenge 7: String Properties and Methods
-------------------------------------------- */

console.log("------------------- CHALLENGE 7 -------------------")

// Exammple: Strings can also be thought of arrays. 
// When we use the split() method, it wil return an array of elements what were split by the argument passed in. 
// If no argument is passed in, it will split every character into a new element in the array.
let sentence = "Welcome to Team Edge!"
let sentenceToArray = sentence.split(" ") 
console.log("The sentence as an array: " + sentence)

let word = "Abracadabra"
let wordSplitArray = word.split("") 
console.log("letter by letter: " + wordSplitArray)


// **** Challenge 7 : Part 1 **** 
// Change the name of the person who is late in this sentence and log it.
let whosLate = "I heard Alex was late to class today."





// **** Challenge 7 : Part 2 **** 
// Add an exclamation mark to this sentence using split() and push(), then log.
let makeMeExciting = "What a wonderful day"





// Example: We can also join our array elements into a string using join()!
let rejoined = sentenceToArray.join(" ")  //joins it using spaces
console.log('Back in one string: ' + rejoined)

// **** Challenge 7 : Part 3 **** 
// Join one of your arrays together and print out the returned



