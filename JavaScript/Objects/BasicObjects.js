// Approach- Object Literal

const mySym = Symbol("Key1")

const JsUser = {
    name: "Sayamdip",
    "full name": "Dey Chaklader",
    [mySym]: "myKey1",
    age: 22,
    location: "Alipurduar Junction",
    email: "sayamdip@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof mySym)


JsUser.email = "rickdeychaklader@gmail.com"
console.log(JsUser)

// Object.freeze(JsUser)

// JsUser.email = "rick@gmail.com" // Email Cannot Be Changed.
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)
