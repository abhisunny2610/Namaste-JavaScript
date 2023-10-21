
// Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// a variable can be used before it has been declared.

console.log(x)
getName()
console.log(getName)

// console.log(hello())
console.log(hello)


var x = 7;

function getName(){
    console.log("Abhishek Singh")
}

var hello  = () => {
    console.log("Hello JavaScript")
}

// Variables defined with let and const are hoisted to the top of the block, but not initialized.


// getName()
// console.log(x)

console.log(getName)