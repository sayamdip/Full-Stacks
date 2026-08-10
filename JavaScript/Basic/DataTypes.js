// -------- Primitive Data Types --------

// 7 Types: String, Number, Boolean, BigInt, Symbol, Undefined, Null

// -------- Reference (Non-Primitive) Data Types --------



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
const id = Symbol("1234")
const anotherId = Symbol("1234")

console.log(id === anotherId)


const bigNumber = 34567894567878n //BigInt


// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]


let myObj = {
    name: "Sayamdip",
    age: 23
}

const myFunction = function () {
    console.log("Hello World!")
}


console.log(typeof myObj)


console.log(typeof myFunction)