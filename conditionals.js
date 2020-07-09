
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */

let age = READLINE.question(`How old are you? `);
if(age > 16){
  console.log(`You can drive! Go get your license!`);
}
else{
  console.log(`You can't drive yet...`);
}


/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */

let score1 = 500; 
let score2 = 550;
let score3 = 600;

if(score1 >= score2 && score1 >= score3){
  console.log(score1);
}
else if(score2 >= score1 && score2 >= score3){
  console.log(score2);
}
else if(score3 >= score1 && score3 >= score2){
  console.log(score3);
}


/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...
**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
let weather = `rainy`;


console.log(`It's ${weather} outside!`);
if(weather == `rainy`){
  console.log(`Make sure to bring an umbrella!`);
}
else if(weather == `sunny`){
  console.log(`Make sure to wear a hat and sunglasses!`);
}
else if(weather == `snowing`){
  console.log(`Make sure to wear gloves and a scarf!`);
}


//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/

let temperature = 65;
let rainyWeather = `bring an umbrella`;
let sunnyWeather = `wear a hat and sunglasses`;
let snowyWeather = `wear gloves and a scarf`;

let tempHigh = `sunscreen`;
let tempMid = `a light jacket`;
let tempLow = `warm jacket`;


console.log(`It's ${weather} and ${temperature} degrees outside!`);
if(weather == `rainy` && temperature > 60){
  console.log(`Make sure to ${rainyWeather} and ${tempHigh}!`);
}
else if(weather == `rainy` && temperature > 45){
  console.log(`Make sure to ${rainyWeather} and ${tempMid}!`);
}
else if(weather == `rainy` && temperature > 30){
  console.log(`Make sure to ${rainyWeather} and ${tempLow}!`);
}
else if(weather == `sunny` && temperature > 60){
  console.log(`Make sure to ${sunnyWeather} and ${tempHigh}!`);
}
else if(weather == `sunny` && temperature > 45){
  console.log(`Make sure to ${sunnyWeather} and ${tempMid}!`);
}
else if(weather == `sunny` && temperature > 30){
  console.log(`Make sure to ${sunnyWeather} and ${tempLow}!`);
}
if(weather == `snowy` && temperature > 60){
  console.log(`Make sure to ${snowyWeather} and ${tempHigh}!`);
}
else if(weather == `snowy` && temperature > 45){
  console.log(`Make sure to ${snowyWeather} and ${tempMid}!`);
}
else if(weather == `snowy` && temperature > 30){
  console.log(`Make sure to ${snowyWeather} and ${tempLow}!`);
}


/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */

let num = READLINE.question(`What day of the week is it? `);
if(num == 1){
  console.log(`Monday`);
}
else if(num == 2){
  console.log(`Tuesday`);
}
else if(num == 3){
  console.log(`Wednesday`);
}
else if(num == 4){
  console.log(`Thursday`);
}
else if(num == 5){
  console.log(`Friday`);
}
else if(num == 6){
  console.log(`Saturday`);
}
else if(num == 7){
  console.log(`Sunday`);
}
else{
  console.log(`This is not a valid number.`);
}


/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).
  Those are a lot of conditions...
  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/

let year = READLINE.question(`What year would you like to check?  `);
let leapYearMsg = `${year} is a leap year.`;
let notLeapYearMsg = `${year} is not a leap year.`;
if(year % 4 == 0){
  if(year % 100 == 0){
      if(year % 400 == 0){
        console.log(leapYearMsg);
      }
      else{
        console.log(notLeapYearMsg);
      }
  }
  else{
    console.log(leapYearMsg);
  }
}
else{
  console.log(notLeapYearMsg);
}
