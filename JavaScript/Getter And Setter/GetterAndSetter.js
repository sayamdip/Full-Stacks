class User{
    constructor (email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this.new_email.toUpperCase()
    }
    set email(value){
        this.new_email = value
    }

    get password(){
        return this.new_password.toUpperCase()
    }
    set password(value){
        this.new_password = value
    }
}

const sayamdip = new User("sayamdip@gmail.com","abc")
console.log(sayamdip.email)
console.log(sayamdip.password)
