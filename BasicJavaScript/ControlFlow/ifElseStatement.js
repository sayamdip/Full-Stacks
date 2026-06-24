// if

const isUserLoggedIn = true
if (isUserLoggedIn){

}

// Comparison- <, >, <=, ==, >=, !=, ===, !==

if (2 == "2"){
    console.log("Executed");
}

temp = 41
if (temp < 50){
    console.log("Temperature Less Than 50")
}
else{
    console.log("Temperature Greater Than 50")
}

// Scope Concept

const score = 200
if (score > 100){
    let power = "fly"
    console.log(`User Power: ${power}`)
}

// console.log(`User Power: ${power}`);

const balance = 1000

if (balance < 500){
    console.log("Less Than")
}
else if (balance < 750){
    console.log("Less Than 750")
}
else if (balance < 900){
    console.log("Less Than 900")
}
else{
    console.log("Less Than 1200")
}

const userLoggedIn = true
const debitCard = true
const userLoggedInFromEmail = true
const userLoggedInFromGoogle = true 

if (userLoggedIn && debitCard && 4 == 5){
    console.group("Allow To Buy Courses")
}

if (userLoggedInFromEmail || userLoggedInFromGoogle){
    console.group("user Logged In")
}

// Falsy Values

// false, 0, -0, BigInt(0n), "", null, undefined, NaN

// Truthy Values

// "0", "false", " " (Space), [], {}, function() {}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0){
    console.log("Empty Object");
}

// Ternary Operator

// Condition ? True : False

const iceCreamPrice = 100

iceCreamPrice >= 80 ? console.log("Greater Than 80") : console.log("Less Than 80")

// Nullish Coalescing Operator (??) : null undefined

let val1

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1)