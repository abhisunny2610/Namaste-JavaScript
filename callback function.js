// console.log("Abhishek")

/* 

Ques1. What is Callback function in Javascript ?

Ques2. Javascript is a synchronous and single-threaded language?

Ques3. Blocking the main thread

Ques4. Power of Callback?

Ques5. Deep about Event Listener

Ques6. Clousers Demo with Event Listeners

Ques7. Scope Demo with Event Listeners

Ques8. Garbage collection & removeEventListeners

*/


/*

Ans.1
A caalback is a function that passed as an argument to another function.
This technique allows a function to call another function.
A callback function run after another function has finished.

*/

document.getElementById("clickme").addEventListener("click", function(){
    console.log("Hello, Abhishek button clicked is called")
})


function x(y){
console.log("X")
y()
}

x(function y(){
    console.log("Y")
})

setTimeout(function(){
    console.log("Timer")
}, 5000)





