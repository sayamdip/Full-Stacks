var number=10;
if(number>=65){
    console.log("You get your income from your pension")
}
else if(number>=18 || number<65){
    console.log("Each month you get salary");
}
else if(number<18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}