var car={};
car.mileage=98765;
car.color="Red";
console.log(car);
car.turnTheKey=function(){
    console.log("The Engine Is Running");
}
car.lightsOn=function(){
    console.log("The Lights Are On");
}
console.log(car);
car.turnTheKey();
car.lightsOn();