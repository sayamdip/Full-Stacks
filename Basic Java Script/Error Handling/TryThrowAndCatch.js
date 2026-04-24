try{
    throw new Error();
}catch(err){
    console.log(err);
}
console.log("This Line Now Runs");

