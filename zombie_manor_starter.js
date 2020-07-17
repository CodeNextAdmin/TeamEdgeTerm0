//make sure to add this to your package in the shell:  $npm install readline-sync

const READLINE = require("readline-sync");
 
//*********************** VARIABLES ****************************
let inputMsg ="" //an empty string to hold our user inputs
let gameIsOn = true 
let currentRoom = null
let isFighting = false
let rooms = []
let items =[]

let zombieImg = [
    "           ",
    "  ▄███▄    ", 
    " ▒█████▒   ",
    "▒██░█░██▒  ",
    "▒██▄█▄██▒  ",
    " ▒█   █▒   ", 
    "  ▒█▓█▒    ",
    "           ",
    " ZOMBIE!!! ",
    "           ",    
   
   ]
   
  zombieImg = zombieImg.join("\n") //make the array into a string with line breaks.
   
 
//******************** DEFINE CLASSES  ********************
  class Room {

     constructor(name, description, objects, npcs,paths, visited, key) {
        this.name = name
        this.description = description
        this.objects = objects
        this.npcs =npcs
        this.paths = paths
        this.visited = visited
        this.key = key


        
      }
  }

  class Player {
    constructor(name, items, hitPoints){
        this.name =name
        this.items = items
        this.hitPoints = hitPoints
    }
  }

   class Item {

      constructor(name, type, description,  location,  powerLvl, specialPower ){

         this.name = name
         this.type = type
         this.location = location
         this.powerLvl = powerLvl
         this.description = description
         this.specialPower = specialPower
         //can make power or an array of things to do with it
          
        
      }
    }

    class Enemy {

        constructor(name, type, description,  location, hitPoints, weakness, image ){
  
           this.name = name
           this.type = type
           this.location = location
           this.description = description
           this.weakness = weakness
           this.hitPoints = hitPoints
           this.image = image
           //can make power or an array of things to do with it
            
          
        }
      }

  let player = new Player()
  player.name = null
  player.items = []
  player.hitPoints = 100;


 //******************** START GAME ************************
function start(){
 

    console.log("Welcome to ....\n");
    console.log(`


    ·▄▄▄▄•      • ▌ ▄ ·. ▄▄▄▄· ▪  ▄▄▄ .    • ▌ ▄ ·.  ▄▄▄·  ▐ ▄       ▄▄▄  
    ▪▀·.█▌▪     ·██ ▐███▪▐█ ▀█▪██ ▀▄.▀·    ·██ ▐███▪▐█ ▀█ •█▌▐█▪     ▀▄ █·
    ▄█▀▀▀• ▄█▀▄ ▐█ ▌▐▌▐█·▐█▀▀█▄▐█·▐▀▀▪▄    ▐█ ▌▐▌▐█·▄█▀▀█ ▐█▐▐▌ ▄█▀▄ ▐▀▀▄ 
    █▌▪▄█▀▐█▌.▐▌██ ██▌▐█▌██▄▪▐█▐█▌▐█▄▄▌    ██ ██▌▐█▌▐█ ▪▐▌██▐█▌▐█▌.▐▌▐█•█▌
    ·▀▀▀ • ▀█▄▀▪▀▀  █▪▀▀▀·▀▀▀▀ ▀▀▀ ▀▀▀     ▀▀  █▪▀▀▀ ▀  ▀ ▀▀ █▪ ▀█▄▀▪.▀  ▀
 
    `)                  
             

    let name = READLINE.question("What is your name, player? ")
    player.name = name
    console.log("Welcome, " + name);
    console.log("You can type [help] to learn how to play");

   //begin at the kitchen
    currentRoom = kitchen

    console.log(`You are in a: ${currentRoom.name}. and everything looks normal. The air smells like death`)

    while(gameIsOn){

        checkAnswer(promptUser()) //this makes the game continously prompt and check response

    }
}

function promptUser(){

   let  reply = READLINE.question(`${player.name}, what do you want to do?  >> \n `)

    return reply
}

//******************** HANDLE THE PLAYER INPUT ******************/
function checkAnswer(input){

   // inputMsg = input;

    input = input.split(" ")
    console.log("input : " + input)

    let command = input.splice(0,1)

    console.log("Input, after command : " + input)
    inputMsg = input.join(" "); //put it back together

    console.log(" input message: " + inputMsg)


//GO
        if(command.includes("go")){

            //split the string in two 

            let msgArray  = inputMsg.split(" ") //TODO: use splice...
            let newRoom = inputMsg;


            console.log("tyring to go to: " + newRoom)

             if(currentRoom.paths.includes(newRoom)){

                console.log("Current room includes the room : " + newRoom)
                //find the room that has that "key" newRoom as a property

                for (room of rooms){

                   
                   

                    if(room.name.toLowerCase() == newRoom.toLowerCase() ){
                        
                        //set the current room by grabbing its index
                        
                        //check if the player has the key!
                        if(room.key==null ||   player.objects.includes(room.key) ){


                            //************ we are in the room finally because it's not locked */

                            let index = rooms.indexOf(room) //get the index of the room
                            currentRoom = rooms[index]

                            //print room info
                            console.log("You are now at the : " + currentRoom.name);
                            console.log("this room has : " + currentRoom.objects)
                            console.log(currentRoom.description)
                            currentRoom.visited = true

                            if(zombie1.location.name == currentRoom.name ){

                                //We found the zombie!
                                console.log(zombieImg)
                                isFighting =true

                                if(player.items.includes(zombie1.weakness[0]) ||player.items.includes(zombie1.weakness[1] )){

                                    //we can beat the zombie!

                                    console.log(`You have a ${zombie1.weakness}! Use it or die!!!` )

                                } else{
                                    //we will get beat!
                                    console.log(`You are unarmed and get quickly swarmed. The last sounds you hear are your own flesh being chewed by ${zombie1.name}` )

                                    //end the game, which kills the game loop
                                    gameIsOn=false

                                    console.log("Game Over! Better luck nexty time. Thanks for dying...I mean playing!")
        

                                }

                                

                            }


                        
                        } 
                        if(room.key !=null) {

                            console.log("This room is locked! It looks like you need to find a special key")
                        }


                    }  
                }

             } else {

                console.log("No, you can't go there")
             }
    

        } else if(command.includes("use")){
//USE
            console.log("------ USE ----------\n")

            console.log("using: " + inputMsg)

            if(isFighting){

                console.logI("Take that, zombie!")
                zombie1.hitPoints = zombie1.hitPoints - 5;
                console.log(`${zombie1.name} has sustained damage..`)

                if(zombie1.hitPoints <= 0){
                    console.log(`${zombie1.name} has been vanquished!!`)
                    zombie1.location = null
                    
                }
            }



            

        }
        
        
        
        else if(command.includes("look")){
 //LOOK 
            //loop through all the objects and paths and print them out so user can see options
            console.log("------ LOOK ----------\n")
            console.log("You see the following: ") 

            for(object of currentRoom.objects){
        
                console.log(" -  " + object)
            }

            console.log("From here you can go to: ")

            for(path of currentRoom.paths){
                console.log(" - " + path)

            }
            console.log("---------------------\n")
//TAKE
        } else if(command.includes("take")){
            console.log("------TAKE----------\n")
            
           // let itemsArray  = inputMsg.split(" ")
            let itemToTake = inputMsg
            //check to see if it is part of the room's inventory..

            if(currentRoom.objects.includes(itemToTake)){

                console.log("Yes you can take this item: " + itemToTake)
                player.items.push(itemToTake) //add to the players items array

                //remove from room
                let indexToRemove = currentRoom.objects.indexOf(itemToTake)

                currentRoom.objects.splice(indexToRemove, 1)

                console.log("player has : " + player.items)

            } else {
                console.log("No you can't pick that up")

            }
            console.log("---------------------\n")
//ROOM
        } else if (command.includes("room")){

            console.log("-------ROOM----------\n")
            console.log( "You are in " + currentRoom.name);
            console.log("---------------------")
//INVENTORY
        }  else if (command.includes("inventory")){
            console.log("--------INVENTORY----------\n")
            console.log("You have the following items: ")
            for(item of player.items){

                console.log(item)
            }
            console.log("---------------------")

//HELP
        } else if (command.includes("help")){
            console.log("---------HELP-------\n")
            console.log("Here are some commands you can type:")
            console.log(" - 'look' to look around. \n - 'go' followed by the name of the room or area you want to walk to. \n - 'take' to add objects to your inventory. ")
            console.log("---------------------")
            
             
        } else if (command == ""){

            console.log(" input: " + inputMsg)
             
            inputMsg = READLINE.question("What do you want to do? You can type 'help' for commands to use >>> ");
        } else {

            console.log(" I don't understand that")
        }
    
}

 

 
//************* Make Rooms *************************/

let kitchen = new Room()
kitchen.name = "kitchen"
kitchen.description = "The kitchen is a really nice one! it has all the stuff you need to cook a healthy meal...of zoombie parts! on the table there is a red pill."
kitchen.objects =["potion", "sandwich", "knife"]
kitchen.paths=["dining room" , "bathroom" , "backyard" ]
kitchen.npcs = [];
kitchen.visited = false
kitchen.key = null

let bathroom = new Room()
bathroom.name= "bathroom"
bathroom.description ="You are in a bathroom. Everything is a mess. There is blood on the floor. The shower is still on."
bathroom.objects = ["towel" , "toothbrush", "toilet paper", "soap"]
bathroom.paths =["kitchen"]
bathroom.npcs = [];
bathroom.visited = false
bathroom.key = null

let diningRoom = new Room()
diningRoom.name= "dining room"
diningRoom.description ="The dining room is in disarray. There are strange chewing noises coming from under the table."
diningRoom.objects = ["letter" , "candle", "camera", "key"]
diningRoom.paths =["kitchen",  "study", "living room"]
diningRoom.npcs = [];
diningRoom.visited = false
diningRoom.key = null

let livngRoom = new Room()
livngRoom.name= "living room"
livngRoom.description ="The Living room looks like the dead room. There are half eaten body parts wiggling on the ground. "
livngRoom.objects = ["forearm" , "lamp", "book", "leg"]
livngRoom.paths =["dining room", "stairs", "study", "hallway", "basement"]
livngRoom.npcs = []
livngRoom.visited = false
livngRoom.key = null


let stairs = new Room()
stairs.name= "stairs"
stairs.description ="The stairs are old and wooden. There are pictures of happy people on the wall. \n Remnants of another time. \n There appears to be more rooms upstaris, but its dark."
stairs.objects = ["family portrait" ]
stairs.paths =["living room", "upstairs hallway"]
stairs.npcs = []
stairs.visited = false
stairs.key = null

let brendasRoom = new Room()
brendasRoom.name = "brenda's room"
brendasRoom.description = "Brendas room is dark and humid. You can barely see. The sound of scurrying creatures underfoot makes you anxious."
brendasRoom.objects = ["blue bottle" , "diary" ]
brendasRoom.paths = ["upstairs hallway"] 
brendasRoom.visited =false
brendasRoom.npcs=[]
brendasRoom.key ="gold key"

let upstairsHallway = new Room()
upstairsHallway.name = "upstairs hallway"
upstairsHallway.description = "The hallway seems strangely crooked with an window at the end. Looks like a crow flew in and is busy picking over a torso."
upstairsHallway.objects = [  ]
upstairsHallway.paths = ["brenda's room" , "master bedroom" , "gilbert's bedroom"] 
upstairsHallway.visited =false
upstairsHallway.npcs=[]
upstairsHallway.key = null

let gilbertsBedroom = new Room()
gilbertsBedroom.name = "Gilbert's Bedroom"
gilbertsBedroom.description = "Gilbert was just a kid, so his room is filled with kid things, toys, clothes, books, and ... dead things."
gilbertsBedroom.objects = ["chocolate bar", "science book" ]
gilbertsBedroom.paths = ["brenda's room" , "master bedroom" , "gilbert's bedroom"] 
gilbertsBedroom.visited =false
gilbertsBedroom.npcs=[]
gilbertsBedroom.key= null

let basement = new Room()
basement.name = "Basement"
basement.description = "The basement is dark, obviously. There are old boxes filled with junk. Grandma was a hoarder. There might be a way out if you look carefully."
basement.objects = ["hammer", "creepy doll" , "bones" ]
basement.paths = ["dungeon" , "living room"] 
basement.visited =false
basement.npcs=[]
basement.key = "green key"

let backyard = new Room()
backyard.name = "Backyard"
backyard.description = "The backyard is overgrown and in need of a gardner. Oh wait, the gardner is there, partially eaten and gargling...."
backyard.objects = ["chainsaw", "hose" , "lawn chair" ]
backyard.paths = ["kitchen"] 
backyard.visited =false
backyard.npcs=[]
backyard.key = null

rooms.push(kitchen, bathroom,livngRoom, diningRoom, brendasRoom, upstairsHallway, stairs, gilbertsBedroom, basement, backyard) //add the rooms to the rooms array

 //************* Make Items *************************/

let goldKey = new Item()
goldKey.name = "gold key"
goldKey.description = "The key is heavy and looks like it has been buried for a long time."
goldKey.location =  ""
goldKey.type = "key"
goldKey.specialPower = "open brenda's room"

let greenKey = new Item()
greenKey.name = "green key"
greenKey.description = "The Key has weird markings. Like the head of a bat. The teeth on the key look like fangs."
greenKey.location = ""
greenKey.type = "key"
greenKey.specialPower = "open basement"

let hammer = new Item()
hammer.name = "hammer"
hammer.description = "This hammer was probably used to build this house, it is so old."
hammer.location = ""
hammer.type = "weapon"
hammer.specialPower = "attack"
hammer.powerLvl = 2

let chainsaw = new Item()
chainsaw.name = "chainsaw"
chainsaw.description = "The Chainsaw is ready to go! It has a handsome chrome finish that reflects your good looks, " + player.name
chainsaw.location = ""
chainsaw.type = "weapon"
chainsaw.specialPower = "attack"
chainsaw.powerLvl = 5



 //************* Hide items in random rooms  *************************/

goldKey.location =  rooms[Math.floor(Math.random()*rooms.length)]; //set an random integer as the location, which is an index in the rooms array
while(goldKey.location == brendasRoom){
 
    //make sure it's not in Brenda's room because thats the room it opens. While works better than an if statement here, why?
    goldKey.location =  rooms[Math.floor(Math.random()*rooms.length)]; 
}

console.log("The gold key is: " + goldKey.location.name)


greenKey.location =  rooms[Math.floor(Math.random()*rooms.length)];
while(greenKey.location == basement){
 
    //green key can't be in the basement!
    greenKey.location =  rooms[Math.floor(Math.random()*rooms.length)]; 
}

for (room in rooms) {

    if(greenKey.location == room.name){

        room.objects.push(greenKey.name)
    }
    if(goldKey.location == room.name){

        room.objects.push(goldKey.name)
    }
}



console.log("The green key is: " + greenKey.location.name)

//************* Make Zombies!!  *************************/
let zombie1 = new Enemy()
zombie1.name = "Grandpa Zombie"
zombie1.type = "Zombie"
zombie1.description = "Grandpa Zombie has seen better days! He is hungry and will not listen to reason."
zombie1.hitPoints = 10
zombie1.location = ""
zombie1.weakness = ["chainsaw", "hammer"]


//************* Hide Zombies!!  *************************/
 zombie1.location = rooms[Math.floor(Math.random()*rooms.length)];
 while(zombie1.location == kitchen){
 
    //zombie cannot be in the kitchen, because that is where the game starts
    zombie1.location =  rooms[Math.floor(Math.random()*rooms.length)]; 
}
console.log("The zombie is in: " + zombie1.location.name)


start()

   
