/********************************************************************
 *                                                                  
 *  Team Edge Mini-project: WHILE LOOP CHALLENGES
 * 
 *   Complete the following loop challenges below. Follow the ToDos
 *   1. IN YOUR PRIME: Declare a while loop that prints all the prime 
 *      numbers between 0 and 1000 (remember the modulo?)
 *   2. FOUND: use a while loop to search the contents of an array for
 *      the key!
 *   3. BUGGIN: Find out why these while loops don't do what they say 
 *      they do.
 *   4. MATH QUIZ: Prompt a user to solve a random math problem, if 
 *      they get it right, say congrats, if not, keep prompting.
 *   5. WHAT AM I: Write a game loop that prompts that never stops
 *      asking, "Iknow you are a _____, but what am I?"
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

console.log(`

           hh      iii lll           lll                             
ww      ww hh          lll   eee     lll  oooo   oooo  pp pp    sss  
ww      ww hhhhhh  iii lll ee   e    lll oo  oo oo  oo ppp  pp s     
 ww ww ww  hh   hh iii lll eeeee     lll oo  oo oo  oo pppppp   sss  
  ww  ww   hh   hh iii lll  eeeee    lll  oooo   oooo  pp          s 
                                                       pp       sss  

`)



console.log("------------------- CHALLENGE 1 : IN YOUR PRIME -------------------")

 //Here is a humble while loop in action. We need a variable to hold the counter value.
let num = 0
while(num <= 10){

console.log("example counter--> " + num)
num++
}
//-->TODO: Declare a while loop that prints all the prime numbers between 0 and 1000



console.log("------------------- CHALLENGE 2 : FOUND   -------------------")

//here is an array full of items
let items = ["pencil" , "eraser" , "mirror" , "comb" , "spoon" , "key" , "earrings" ,"cat food" , "magazine"]

//-->TODO: Use a while loop to search the contents of an array for the key! If it exists, print "found the key!"





console.log("------------------- CHALLENGE 3 : BUGGIN   -------------------")

//Oh no! these functions have loops that don't do what they say they should do. Can you fix that?
//One more thing...to stop an infite loop you hit Control + C in the terminal  

//-->TODO: Make me count  2, 4, 6,..., 50

function evenNumbersToFifty(){

    let num = 50
    while(num <50){

        console.log("number: " + num)

    }
}
evenNumbersToFifty()

//-->TODO: Make this design  below
//
//          [ 0 ]
//          [ 0, 1 ]
//          [ 0, 1, 2 ]
//          [ 0, 1, 2, 3 ]
//          [ 0, 1, 2, 3, 4 ]
//          [ 0, 1, 2, 3, 4, 5 ]
//          [ 0, 1, 2, 3, 4 ]
//          [ 0, 1, 2, 3 ]
//          [ 0, 1, 2 ]
//          [ 0, 1 ]
//          [ 0 ]



function pattern(){

    let index = 0 
    let array =[]
    
    while(index <= 5 ){
      
        array.push(index)
    
       // console.log(array)
        index++
    }

}
pattern()


console.log("------------------- CHALLENGE 4 : MATH QUIZ   -------------------")



//-->TODO: Make a Math Quiz that asks two random numbers (between 0 and 100 to make it easy).
//         The user enters the answer. If wrong, keep prompting. If correct, say congrats!!
//         Use this handy boolean to get you started! You will need readline_sync!

let isCorrect = false


console.log("------------------- CHALLENGE 5 : WHAT AM I?   -------------------")

//-->TODO: Write a game loop that prompts that never stops asking, "Iknow you are a _____, but what am I?"
//         You are given to starter functions and a loop to get started! 
//         Notice how one function calls the other and uses the returned value as the input. This is called Recursion! 

let keepAsking = false
while(keepAsking){

 //response(promptUser())
}

function promptUser(){

  

}

function response(response){

  

}

//-->TODO: Challenge! write a secret word to break out of the loop!