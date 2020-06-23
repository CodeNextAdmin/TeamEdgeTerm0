 
/********************************************************************
 *                                                                  
 *  Team Edge objects: SUPERHERO CHALLENGES 
 * 
 *   In this challenge you are going to modify this code to do the
 *   the following below. Before you begin, walkthrough the code 
 *   with your coaches.
 *   
 *   1. Change both superhero and nemesis using same class.
 *   2. Change the constants to modify gameplay and see how it affects
 *      the game outcomes.
 *   3. Make any improvements you think would make this game better.
 *   4. Complete all the comments to demonstrate you understand the code
 *      Be specific about what each code block is doing.
 *     
 * 
 * ***************************************************************/

console.log("-------------------  SUPERHERO !!  -------------------")

const DELAY = 3000
const DAMAGE_LIMIT = 5
const MAJOR_BLOW = DAMAGE_LIMIT -2
const LIVES_TOP_RANGE = 60
const LIVES_BOTTOM_RANGE = 40
let rounds = 1
let gameIsOn = true

//COMMENT 1: 
class Superhero {

    constructor(name, isAlive, friends, hitPoints, isGood , attackPower) {
       this.name = name;
       this.isAlive = isAlive;
       this.taunts=[]
       this.cries=[]
       this.lives = []
       
       
     } attack(enemy){
        
        //COMMENT 2 ....
        if(this.isAlive && enemy.isAlive){  
          
            console.log("  \n   ")
            let damage = randomInteger(0,DAMAGE_LIMIT)         
            enemy.lives.splice(0, damage)
            
            if(damage >= MAJOR_BLOW){

                console.log(` ⚔️⚔️⚔️  Major Blow! ⚔️⚔️⚔️  \n`)
                 
            }

             //COMMENT 3....  
            console.log(`${this.name} 💬 : ${this.taunts[randomInteger(0,this.taunts.length-1)]} \n`)
            console.log(`${this.name}  💥X ${damage} ${enemy.name}  ${enemy.lives} : ${enemy.lives.length} \n`)

            if(enemy.lives.length <= 0){
               
                //COMMENT 4....
                enemy.isAlive=false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${enemy.name} has been slain!!! 💀💀💀💀💀 `)
                console.log(` GAME OVER `)
                clearInterval(timer)
            }
            if(this.lives.length <= 0  ){

                this.isAlive = false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${this.name} has been slain!!! 💀💀💀💀💀`)
                console.log(` GAME OVER `)
                clearInterval(timer);

            }

        } 

     }

     fillHealth(){
          //COMMENT 5....
          let amt = randomInteger(LIVES_BOTTOM_RANGE, LIVES_TOP_RANGE)
           
            for(let i = 0; i <= amt ; i++){

                this.lives.push("💙")
            }

    }
 }

//COMMENT 6....
let batman = new Superhero()
batman.name="Batman 🦸‍♂️"
batman.isAlive = true 
batman.lives=[]
batman.taunts=["The Dark Knight always wins!" , "You can't hang with the bat man" , "Meet my fist, scumbag" , "You Suck!"]
batman.cries=["Ouch!" , "UFF!" , "Gaaaaaaa" , "No!!!!!"]
batman.fillHealth()
 
let joker = new Superhero()
joker.name = "Joker 🦹‍♂️"
joker.isAlive = true
joker.lives=[]
joker.taunts =["You are a schmemer" , "Don't mess with the Joker!" , "Pick your face off the ground, you might need it!", "Getting tired of the beatings?"]
joker.cries = ["Aaaa!" , "Goh!" , "Hmph!" ,"You will pay for this"]
joker.fillHealth()


console.log(`${joker.name} :  ${joker.lives} - ${joker.lives.length}`)
console.log(`${batman.name} : ${batman.lives} -  ${batman.lives.length} `)
console.log(`${batman.name} 💬 ${batman.taunts[1]}  \n `)
console.log(`${joker.name} 💬 ${joker.taunts[1]}  \n `)


//COMMENT 7....
function fight(a, b){
    console.log(" ------------- ROUND -------------> " + rounds)
    
    a.attack(b)
    b.attack(a)
    rounds ++

}

//This helper function returns a random number between a given min and max value, and is used various times in this game.
function randomInteger(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }


  //COMMENT 8....
  let timer = setInterval(function() {

    if(gameIsOn){
        
        fight(batman,joker) 
        console.log(" \n")


    }
}, DELAY);