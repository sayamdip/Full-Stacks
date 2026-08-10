let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let myCreatedDate = new Date(2026, 0, 25, 5, 3)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let newDate = new Date()
console.log(newDate.toLocaleString())

console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
console.log(newDate.toLocaleString("defaul",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
}))
