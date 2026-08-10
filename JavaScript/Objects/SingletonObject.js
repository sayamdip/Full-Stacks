// Singleton Object
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sayamdip"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rick",
            lastname:"Dey Chaklader"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)

const obj = {1: "a", 2: "b", 3: "c"}
const newobj =  {4: "d", 5: "e"}

// const obj3 = Object.assign({}, obj, newobj) // Import Object.assign
const obj3 = {...obj, ...newobj}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "example1@gmail.com"
    },
    {
        id: 2,
        email: "example2@gmail.com"
    },
    {
        id: 3,
        email: "example3@gmail.com"
    }
]

console.log(users[2].email)
console.log(tinderUser)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

// Destructuring In Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sayamdip"
}

const {courseInstructor: instructor} = course

console.log(instructor)

// JSON 

// {
//     name: "Sayamdip",
//     coursename: "js in hindi",
//     price: "999"
// }

// [
//     {},
//     {},
//     {}
// ]
