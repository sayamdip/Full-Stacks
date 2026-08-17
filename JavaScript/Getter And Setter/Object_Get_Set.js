const User = {
    _email: "sayamdip@gmail.com",
    _password: "h@hc.com",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}
const user1 = Object.create(User)
console.log(user1.email)