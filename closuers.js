/*
    Closuers: A closure is the combination of a function bundled 
    together(enclosed) with reference to its surroundings state( the lexical environment).
    
    In other words, a closure gives you access to an outer function's scope from an inner function.
    In javascript, closuers are created every time a function is created, at function creation time.

*/

function x(){
    var a = 7

    // function y have a function x its lexical environment.
    function y(){
        console.log(a)

    }
    y()
}

x()

function a(){
    var x = 7

    // function y have a function x its lexical environment.
    function b(){
        console.log(x)

    }
    // we also return y function
    return b
}

// b have a reference of b function
var b = a()
console.log(b)
b()

/*
Uses of Closuers:
    - Module Design Pattern
    - Currying
    - Function like once
    - memoize
    - maintaining state in async world
    - setTimeouts
    - Iterators
    - and many more...

*/