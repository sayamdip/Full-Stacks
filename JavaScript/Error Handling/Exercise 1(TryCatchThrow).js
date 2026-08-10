function addTwoNums(a,b){
    try{
        if(typeof(a)!="number" && typeof(b)=="number"){ 
            throw new TypeError("The first argument is not a number");
        }
        else if(typeof(b)!="number" && typeof(a)=="number"){
            throw new TypeError("The second argument is not a number");
        }
        else if(typeof(a)!="number" && typeof(b)!="number"){
            console.log("Both the arguments are not numbers")
        }
        else{
            console.log(a+b);
        }
    }catch(err){
        console.log(err.message);
    }
    
}
addTwoNums("5","5");
