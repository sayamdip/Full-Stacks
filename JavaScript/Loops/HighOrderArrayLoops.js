// For Of Loops

const arr = [1, 2, 3, 4, 5]

for(const val of arr){
    console.log(val)
}

const greetings = "Hello World!"
for(const greet of greetings){
    if(greet ==" "){
        continue
    }
    console.log(`Each Char = ${greet}`)
}


// Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("Fr", "France")

console.log(map)

for(const [key,value] of map){
    console.log(key, ":- ", value)
}


// For In Loops

const myObj = {
    "game1": "NFS",
    "game2": "GTA",
    "game3": "SpiderMan"
}
for(const key in myObj){
    console.log(`${key} is for ${myObj[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming){
    console.log(programming[key])
}


// For Each Loop (This Is Quite Important Specially During Handling Database)

const coding = ["js", "rb", "py", "java", "cpp"]
coding.forEach((item) => {
    console.log(item)
})

coding.forEach((item, index, arr) => {
    console.log(item, index ,arr)
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})

const values = myCoding.forEach((items) => {
    console.log(`${items.languageName} -> ${items.languageFileName}`)
})