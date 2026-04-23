// Way 3
var house2={};
house2["Rooms"]=4;
house2["Color"]="Pink";
house2["priceUSD"]=12345;
console.log(house2);

// Example 1
var car={};
car.color="Red";
car["color"]="Green";
car["speed"]=200;
car.speed=100;
console.log(car);
car["number of doors"]=4;
console.log(car);

// Example 2 ( Very Important Concept)
var arrOfKeys=["Speed","Altitude","Color"];
var drone={
    Altitude:200,
    Speed:100,
    Color:"Red"
}
for(let i=0;i<arrOfKeys.length;i++){
    console.log(drone[arrOfKeys[i]]);
}