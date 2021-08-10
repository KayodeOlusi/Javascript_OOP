function User( name, email) {
    this.name = name,
    this.email = email,
    this.online = false
}

User.prototype.login = function() {
    this.online = true
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function() {
    this.online = false
    console.log(this.email, 'has logged out')
}


//Creating a new method while inheriting values from previous users
function Admin(...args) {
    User.apply( this, args )
    this.role = 'super admin'
}


//This inherits the userOne and userTwo prototype
Admin.prototype = Object.create(User.prototype)

//Adding a new prototype only accessible to admin
Admin.prototype.deleteBtn = function (u) {
    users = users.filter( user => {
        return user.email != u.email
    })
}

var userOne = new User( 'Mario','mario@gmail.com' )
var userTwo = new User( 'Yoshi','yoshi@gmail.com' )
var admin = new Admin( 'Shuan', 'shaun@gmail.com' )
var users = [ userOne, userTwo, admin ]

// console.log(userOne)
// userOne.login()

console.log(admin.deleteBtn( users[1] ))
console.log(users)
