const user = {
    username: "sayamdip",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome To Website`) // We Can Only Use this In An Object

        // To Print Current Context
        console.log(this)
    }
}

user.welcomeMessage()

user.username = "Rick"

user.welcomeMessage()

function chai(){
    console.log(this);
    
}
chai()


const chainew = function(){
    let username = "sayamdip"
    console.log(this.username) // We Cannot Declare this Without An Object
}
chainew()

// Arrow Functions

const chaiarrow = () => {
    let username = "sayamdip"
    console.log(this.username);
    console.log(this)
    
}

chaiarrow()

const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(8, 9))

// Implicit return

const addTwoNumbers = (num1, num2) => (num1 + num2)

console.log(addTwoNumbers(8, 9))

const returnuser = () => ({username:"sayamdip"})

console.log(returnuser())

const myArray = [2,5,3,7,8]

// console.log(myArray.forEach(() => {}))