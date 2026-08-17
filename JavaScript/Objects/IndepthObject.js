const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)

// console.log(Math.PI)

const chai = {
    name:"ginger chai",
    price:250,
    IsAvailable: true,
    function (){
        console.log("Code Phat Gaya");
        
    }
}

console.log(chai)

const desc = Object.getOwnPropertyDescriptor(chai,"price")

console.log(desc)

// Define Object

const define= Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})
console.log(define)
const description= Object.getOwnPropertyDescriptor(chai,'name')
console.log(description)

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
    
}