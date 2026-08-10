const myArr = [0 ,1 ,2 ,3 ,4]

console.log(myArr[3])

const myHeroes = ["Shaktiman", "Naagraj", "Ironman"]

const myArr3 = new Array(1,2,3,4)
console.log(myArr[3])

myArr.push(5)
console.log(myArr)


myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)


myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr)

// Slice And Splice
console.log("A ", myArr)

const myn = myArr.slice(1,3)
console.log("B ",myn)

const mynew = myArr.splice(1,3)
console.log("C ", myArr)
console.log(mynew)

// Concat And Spread

const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

const allHeroes = marvel_heroes.concat(dc)
console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc]
console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Sayamdip"))
console.log(Array.from("Sayamdip"))
console.log(Array.from({name: "Sayamdip"}))

let score = 400
let value = 500
console.log(Array.of(score,value))


