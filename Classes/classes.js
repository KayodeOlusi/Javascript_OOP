//classes are used to make multiple objects easily without repeating different syntax
class User {
    constructor( name, email, age, status ) {
        this.name = name,
        this.email = email,
        this.age = age,
        this.status = status
        this.score = 0
    }
    login(){
        console.log( this.email, 'just logged in')
        return this
    }
    logout(){
        console.log( this.email, 'just logged out')
        return this
    }
    updateScore(){
        this.score++
        console.log(this.score)
        return this
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter( u => {
            return u.email != user.email
        })
    }
}



//the new keyword creates an empty object and sets the 'this' keyword to the object in context

var userOne = new User( 'Mario','mario@gmail.com', 28, false )
var userTwo = new User( 'Yoshi','yoshi@gmail.com', 27, true )
var admin = new Admin( 'Shuan',' shuan@gmail.com', '30', true)

var users = [ userOne, userTwo, admin ]

admin.deleteUser(userOne);

console.log(users)

// console.log(userOne)
// console.log(userTwo)

// userOne.login()
// userTwo.logout()

//Method chaining
// userOne.login().updateScore().updateScore().logout()
