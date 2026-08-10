function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("Y")
    console.log("A")
    console.log("M")
    console.log("D")
    console.log("I")
    console.log("P")
}

sayMyName()

function addTwoNumbers(num1, num2){
    return num1 + num2
}


const result = addTwoNumbers(90 , 89)

console.log("Result: ",result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter A Username")
        return
    }

    return `${username} Just Logged In`
}

console.log(loginUserMessage("sayamdip@gmail.com"))
console.log(loginUserMessage())

// Rest Operator

function calculateCartPrice(...num1){ // To Take Multiple Parameters
    return num1
}

console.log(calculateCartPrice(400, 500, 800))

const user = {
    username: "sayamdip",
    price: 900
}

function handleObject(anyobject){
    console.log(`Username Is ${anyobject.username} And Price Is ${anyobject.price}`)

}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))