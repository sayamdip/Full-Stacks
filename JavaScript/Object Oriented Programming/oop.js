const user = {
    username: "sayamdip",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`username: ${this.username}`)
        console.log(this);
        
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)


// Constructor Function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // This Is Not Mandatory, Implicitely It Returns

}

// Concept Of new Keyword
const userOne = new User("Sayamdip", 12, true)
const userTwo = new User("Rick",15,true)
console.log(userOne)
console.log(userTwo)