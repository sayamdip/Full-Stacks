class User{
    constructor (email, password){
        this.email = email
        this.password = password
    }

    get email(){ // getter
        return this.new_email.toUpperCase()
    }
    set email(value){ // setter
        this.new_email = value
    }

    get password(){ // getter
        return this.new_password.toUpperCase()
    }
    set password(value){ // setter
        this.new_password = value
    }
}

const sayamdip = new User("sayamdip@gmail.com","abc")
console.log(sayamdip.email)
console.log(sayamdip.password)
