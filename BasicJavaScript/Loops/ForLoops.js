// For Loop
for (let index = 0; index < 10; index++){
    const element = index;
    if (element == 5){
        console.log("5 Is The Best Number")
    }
    console.log(element)
}

for (let i = 1; i <= 10; i++){
    //console.log(`Outer Loop Value: ${i}`)
    for (let j = 1; j <= 10; j++){
        //console.log(`Inner Loop Value: ${j} And Outer Loop: ${i}`)
        console.log(i+" * "+ j+" = "+ i*j)
    }
}

let myArray = ["Flash", "Batman", "Superman"]
console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

// 

