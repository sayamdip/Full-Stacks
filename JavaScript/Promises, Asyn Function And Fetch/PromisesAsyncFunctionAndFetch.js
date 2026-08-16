// A) Creating Promises
const promiseOne = new Promise(function(resolve, reject){
    // Do An async task
    // 1) DB Calls
    // 2) Cryptography
    // 3) Network

    setTimeout(function(){
        console.log('Asyn Task Is Complete')
        resolve() // Connecting With .the()
    },1000)
})

// B) Consuming Promise
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

// C) Doing Both Creating And Consuming In One Place
new Promise(function(resolve, reject){
    setTimeout(function(){
        // In real-world applications, real async tasks like fetch() or database queries take an unknown amount of time over the network. When learning or testing Promises, setTimeout is the standard way to create artificial delays so you can see how Promises handle async behavior and timing.

        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved")
})

// D) Returning Data From A Promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sayamdip", email:"sayamdip@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"sayamdip",password:"123"})
        }
        else{
            reject("Something Went Wrong")
        }
    },1000)
})

// E) Chaining Promise
const username = promiseFour.then((user)=> {
    console.log(user)
    return user.username
})
.then((username) => {
     console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finally, The Promise Is Either Reolved Or Rejected")
})

console.log(username);

// F) async and await
const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("Error! JS Went Wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const respone = await promiseFive
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// G) Fetch API
async function getAllUsers(){

    try{
        const response = await fetch("https://api.github.com/users/sayamdip")
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(`${error} Occured`)
    }
    
}
getAllUsers()


// H) Fetch With .then .catch
fetch("https://api.github.com/users/sayamdip")
.then((response) => {
    return response.json()
})
.catch((error) => {
    console.log(error)

})
.then((data) => {
    console.log(data)
})