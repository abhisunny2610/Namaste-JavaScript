
// Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// a variable can be used before it has been declared.

console.log(x)
getName()
console.log(getName)

var x = 7;

function getName(){
    console.log("Abhishek Singh")
}

// Variables defined with let and const are hoisted to the top of the block, but not initialized.


// getName()
// console.log(x)

console.log(getName)