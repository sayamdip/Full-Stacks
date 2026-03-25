let a=30;
let b=40;
let c=true;

console.log("\n----Additional Operators----");

console.log("\n1) Logical AND Operators: &&");
console.log(a<10 && b>35);

console.log("\n2) Logical OR Operator: ||");
console.log(a<10 || b>35);

console.log("\n3) Logical NOT Operator");
console.log(!c);

console.log("\n4) Equality Operator: ==");
console.log(a==b);

console.log("\n5) Inequality Operator: !=");
console.log(a!=b);

console.log("\n6) Strict Inequality Operator: !==");
console.log(a!=="40");

console.log("\n7)Concatenation Assiqgnment Operator: +=");
console.log(a+=b);

console.log("\n8) Modulus Operator: %");
console.log(b%a);

console.log("\nUse + Operators For String Concatenation");
let char1="Inter";
let char2="net";
console.log(char1+char2);
let char3=" Days";
let char4=" Months";
console.log(365+char3);
console.log(12+char4);

console.log("\nOperator Precedence And Associativity");
var num = 10; // the value on the right is assigned to the variable name on the left

console.log(5 > 4 > 3);
/* The 5 > 4 is evaluated first (to 'true'), then true > 3 is evaluated to 'false', 
   because the 'true' value is coerced to '1' */


console.log("\nCheck A Number Is Even Or Odd");
let num1=8;
let num2=5;
let p=num1%2;
let o=num2%2;
console.log("Is: ",num1," is an even number?",p==0);
console.log("Is: ",num2," is an odd number?",o!=0);