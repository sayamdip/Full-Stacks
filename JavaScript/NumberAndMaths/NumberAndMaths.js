// ---- Numbers ----

const score = 400

const balance = new Number(400)
console.log(balance)

console.log(balance.toString())

console.log(balance.toFixed(3)) // It Is Used To Determine The Number Of Zeroes After Decimal

const otherName = 23.8966

console.log(otherName.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"))

// ---- Maths ----

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.9))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.4))
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))
console.log(Math.round(Math.random() * 10 + 1))

const min = 40
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // This Very Important