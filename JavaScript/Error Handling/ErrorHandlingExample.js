function division(a,b){
    if(b===0){
        throw new Error("Division By Zero Is Not Allowed");
    }
    return a/b;
}
try{
    console.log(division(5,0));
}catch(err){
    console.log(err.message);
}