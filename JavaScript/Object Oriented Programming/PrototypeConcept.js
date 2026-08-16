// function multiplyBy5(num){
//     return num * 5
// }
// multiplyBy5.power = 5
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype);


// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`Score Is ${this.score}`)
// }

// const chai = new createUser("Chai", 25)

// const tea = new createUser("Tea", 250)

// chai.printMe()

// // Prototype Concept
// let myName = "Sayamdip    "


// console.log(myName.length)
// // console.log(myName.truelength())

// let myHeroes = ["Thor","Spiderman"]
// let heroPower = {
//     thor: "Hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`Spidy Power Is ${this.spiderman}`)
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`Hitesh Is Present In All Objects`)
// }
// heroPower.hitesh()

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh Says Hello`)
// }
// myHeroes.hitesh()
// myHeroes.heyHitesh()



// Inheritence

// Old Syntax
const user={
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignement",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user 

// Modern/ New Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function(){ // It Is Included In All Strings
    console.log(`${this.name}`);
    console.log(`${this}`)
    console.log(`True Length Is ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()

anotherUsername.trueLength()
"Sayamdip  ".trueLength()
"Rick   ".trueLength()