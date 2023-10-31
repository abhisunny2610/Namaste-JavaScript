/*
    Closuers: A closure is the combination of a function bundled 
    together(enclosed) with reference to its surroundings state( the lexical environment).
    
    In other words, a closure gives you access to an outer function's scope from an inner function.
    In javascript, closuers are created every time a function is created, at function creation time.

*/

function x() {
    var a = 7

    // function y have a function x its lexical environment.
    function y() {
        console.log(a)

    }
    y()
}

x()

function a() {
    var x = 7

    // function y have a function x its lexical environment.
    function b() {
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

function timeout() {
    var name = "Abhishek"
    setTimeout(function () {
        console.log(name)
    }, 3000)
    console.log("Hello, What is your name ?")
}

timeout()

// print 1 after 1 sec, 2 after 2sec, 3 after 3sec and soo on...

// this solution is wrong.
function print_with_time() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}

print_with_time()


// this is correct solution
function print_with_time2() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}

print_with_time2()

// this is correct solution without using let
function print_with_time3() {
    for (var n = 1; n <= 5; n++) {
        function close(d) {
            setTimeout(function () {
                console.log("3 example", d)
            }, d * 1000)
        }
        close(n)
    }
}
print_with_time3()