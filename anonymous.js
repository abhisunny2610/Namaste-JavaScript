/* 
    Anonymous function: It is a function that does not have any name associated with it.
    Normally we use the function keyboard before the function name to define in javascript.
    However, in anonymous functions in Javascript, we use only the function keyboard without the function name.
*/


// function statement : The function statement declares a function. A declared function is "saved for later use", 
// and will be executed later, when it is invoked (called).
// function statement also known as function declaration.
function a(){
    console.log("a called")
}
a()

// Function Expression
// function expression can be stored in a variable
// after a function expression has been stored in a varibale, the variable can be used as a function.

var b = function(){
    console.log("B called")
}
b()

/* 
    Main difference between two is hositing
    1. in normal we called it before declaration
    2. in function expression we can't excutie function before initilazation.

*/


// Anonymous function
var c = function(){

}

// named function expression
var d = function newfun(){
    console.log("fun function")
}

// newfun() // throgh error
d()

// First class function
