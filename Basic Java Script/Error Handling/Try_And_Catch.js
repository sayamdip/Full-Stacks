// Example 1
try{
    console.log(a+b);
}catch(err){
    // Do Something
    console.log("There Was An Error");
    console.log("The Error Was Saved In The Error Log");
}
console.log("My Program Does Not Stop");

// Example 2
try{
    //Code That Might Cause An Error
    console.log(a/b);
}catch(error){
    // If Something Goes Wrong, This Block Runs
    console.log("Something Went Wrong:",error.message)
}