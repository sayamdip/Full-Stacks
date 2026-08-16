class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // This super() Keyword Is Very Important Concept Here
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A New Course Was Added By ${this.username}`)
    }
}

const chai = new Teacher("Chai", "Chai@gmail.com", "123")

chai.addCourse()

const masalaChai = new User('masalaChai')
masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User)
