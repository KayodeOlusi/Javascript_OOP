var userOne = {
    //object key : key value
    name : 'Mario',
    email : 'mario@gmail.com',
    //a method is a function assigned to an object
    login() {
        console.log( this.name, 'has logged in')
    },
    logout() {
        console.log( this.name, 'has logged out')
    },
    //the 'this keyword' refers to the object in scope 
}

console.log(userOne.name) // Mario
console.log(userOne['email']) //mario@gmail.com

//Accessing properties
//Bonus way
var prop = 'name'
console.log(userOne[prop])// Mario