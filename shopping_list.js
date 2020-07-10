/********************************************************************
 *                                                                  
 *  Team Edge Array Mini-project: THE SHOPPING LIST HELPER
 * 
 *  This project prompts users using readline_sync to add 
 *  (or remove) items from a shopping list. It starts empty
 *  and each time the program is run it asks you to either add or 
 *  remove an item from the list. It also updates the user of its
 *  contents. The shopping list also checks to see if an item 
 *  is already present in the array and prevents you from adding it
 *  again, giving feedback along the way. 
 * 
 * ***************************************************************/

const READLINE = require("readline-sync");

let active = true

console.log("Welcome to: ")

console.log(`
 __..                    .        ,   
(__ |_  _ ._ ._ *._  _   |   * __-+-  
.__)[ )(_)[_)[_)|[ )(_]  |___|_)  |   
          |  |      ._|               

`)

let welcomeMessage = `Hi! I'm your shopping assistant. Let me take your order. \n
You can type 'add milk' to add milk to your shopping list. \n 
or you can type 'remove milk' to remove it. \n`

console.log(welcomeMessage)

let shoppingList = []

while(active){

    checkAnswer(promptUser()) //this makes the game continuously prompt and check response

}

function promptUser(){

    let  reply = READLINE.question("What do you want to add or remove?  >>  ")

    return reply

}

function checkAnswer(response){

    let item = response.split(" ")[1] //split the "add milk" command and grab the second word (index 1)

    if(response.includes("add")){
    
        console.log("adding: " + item) 
        addItem(item)
    

    } else if(response.includes("remove")){

        removeItem(item)

    }else {

        console.log("I didin't understand that. Try typing add/remove followed by an item")


    }

}

function addItem(item){

    if(shoppingList.includes(item)){

        console.log("You already added " + item)

    }else {

        shoppingList.push(item)
        console.log("the shopping list now has: " + shoppingList)
    }


}

function removeItem(item){

    if(shoppingList.includes(item)){

        let itemToRemove = shoppingList.indexOf(item) // indexOf() gets the index of the item we will remofe from the array

        shoppingList.splice(itemToRemove, 1) //removes the item at the given index. 1 means only one item to remove.
        
        console.log(`${item} removed. The shopping list now has: ${ shoppingList}`)


    }else {
        console.log(`Can't remove ${item} because it is not in your shopping list`)

    }

}


