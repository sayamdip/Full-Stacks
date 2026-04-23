// push() Operations 

// Example 1

var fruits=[];
fruits.push("Apple"); // To Add Item In An Array
fruits.push("Jackfruit");
console.log(fruits);

// Example 2

function arrayBuilder(one,two,three){
    var arr=[];
    arr.push(one);
    arr.push(two);
    arr.push(three);

    arr.pop(); // pop() Operation
    arr.pop();
    return arr;
}
console.log(arrayBuilder("Apple","Pear","Plum"));