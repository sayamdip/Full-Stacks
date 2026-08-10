// Generate A Random Color

const randomColor=function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()* 16)]
    }
    return color
}
let intervalId=null
const startChangingColor=function(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
    if(intervalId ==null){
    intervalId=setInterval(changeBgColor,1000)
    }
    console.log("STARTED");
    

}
const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null
    console.log("STOPPED")
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)