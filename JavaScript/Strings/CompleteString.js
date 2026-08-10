let a = "It Is A Lovely Day. "
let b = "My Name Is Sayamdip Dey Chaklader."

console.log("String Concatenation\n");
let c = a + b;
console.log(c); // Always Use Double Quotation As With It You Can Write Sentences

const name = "Sayamdip"
const repoCount = 50


console.log(`Hello My Name Is ${name} And My RepoCount Is ${repoCount}`)

const gameName = new String("Sayamdip")

console.log(gameName)

// ---- String Methods -----

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-8,5)
console.log(anotherString)

const newStringOne = " Sayamdip "
console.log(newStringOne)
console.log(newStringOne.trim(" "))

const url = "https://%sayamdip%40%deychaklader"
console.log(url.replace("%40","-"))

console.log(url.includes("sayamdip"))

console.log(url.split("%"))