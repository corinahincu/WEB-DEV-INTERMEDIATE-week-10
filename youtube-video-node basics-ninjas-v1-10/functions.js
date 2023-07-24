

// normal function statement 
function sayHi(){
    console.log("hi")
}

sayHi()

// function expression
var sayBye = function(){
    console.log("bye")
}

sayBye()

// function as a parameter
function callFunction(fun){
    fun() // calling the function here
}
callFunction(sayHi) // or (sayBye) , in acest caz functia sayHi sau sayBye, trece prin functia ca parametru si it is called