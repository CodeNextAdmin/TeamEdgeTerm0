//This is the starter file for zombie_manor.js
//Use it to develop your skills as needed

const READLINE = require("readline-sync")

let inputMsg ="" //an empty string to hold our user inputs
let gameIsOn = true //the game loop will depend on this being true
let currentRoom = null //to keep track of where we are
let rooms = [] //push any new rooms you create to this array

//******** DEFINE CLASSES *******************
  class Room {

     constructor(name, description, objects, paths) {
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.paths = paths;
        
      }
  }

  class Player {
    constructor(name, items){
        this.name =name
        this.items = items
    }
  }

//**********INSTANTIATE OBJECTS ***************
  let player = new Player()
  player.name = null
  player.items = []


  let kitchen = new Room()
   kitchen.name = "Kitchen"
   kitchen.description = "The kitchen is a really nice one! It has all the stuff you need to cook a healthy meal...of zombie parts! on the table there is a red pill."
   kitchen.objects =["potion", "sandwich", "knife"]
   kitchen.paths=["Living Room" , "Bathroom" , "Backyard" ]

   let bathroom = new Room()
   bathroom.name= "Bathroom"
   bathroom.description ="You are in a Bathroom. Everything is a mess. There is blood on the floor. The shower is still on... "
   bathroom.objects = ["towel" , "toothbrush", "toilet Paper", "soap"]
   bathroom.paths =["Kitchen"]

rooms.push(kitchen, bathroom) //add the rooms to the rooms array
 
//************* START GAME *************************
function start(){

    console.log("Welcome to Zombie Manor!!");
    let name = READLINE.question("What is your name, player? ")
    player.name = name
    console.log("Welcome, " + name);

   //begin at the kitchen
    currentRoom = kitchen

    console.log(`You are in a: ${currentRoom.name}. and everything looks normal. The air smells like death`)

    while(gameIsOn){

        checkAnswer(promptUser()) //this makes the game continously prompt and check response

    }
}

function promptUser(){

   let  reply = READLINE.question("What do you want to do?  >>  ")

    return reply
}

function checkAnswer(input){

    console.log("checking input :  " +  input)

    inputMsg = input

//GO
        if(inputMsg.includes("go")){

            //split the string into two arguments

            let msgArray  = inputMsg.split(" ")
            let newRoom = msgArray[1] //get the second element

             console.log(" user typed go to " + newRoom)

             if(currentRoom.paths.includes(newRoom)){

                console.log("Yes you can go there")

                //find the room that has that "key" newRoom as a property

                for (room of rooms){  //Make challenge!!!!

                    if(room.name.toLowerCase() == newRoom.toLowerCase()){

                        //set the current room by grabbing its index
                        let index = rooms.indexOf(room)

                        currentRoom = rooms[index]
                        console.log("You are now at the : " + currentRoom.name);
                       
                    }
                }

             } else {

                console.log("No you can't go there")
             }
 //LOOK          
        } else if(inputMsg.includes("look")){
            //loop through all the objects and paths and print them out so user can see options

            console.log("You see the following: ") 

            for(object of currentRoom.objects){
        
                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }
//TAKE
        } else if(inputMsg.includes("take")){

            console.log("Taking item...")

            let itemsArray  = inputMsg.split(" ")
            let itemToTake = itemsArray[1] //get the second element

            //check to see if it is part of the room's inventory..

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) //add to the players items array

                //remove from room
                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                //console.log("current room items after taking item " + currentRoom.objects)
                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
//Name
        } else  if (inputMsg.includes("name")){
    
            console.log( currentRoom.name);

        }  else if (inputMsg.includes("help")){
    
            console.log(" You can type 'look' to look around and 'go' to follow a path.")
            
        } else if (inputMsg == ""){

            console.log(" input: " + inputMsg)
             
            inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");
        } else {

            console.log(" I don't understand that")
        }
    
}

start()
