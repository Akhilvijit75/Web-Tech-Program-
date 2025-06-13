console.log("Functions in JavaScript");

//! How to create function in javascript

// function functionName(){
// Startement
// }
 
function greet(){
    console.log("How are you?");
    
}
//! Calling the function
greet();
greet();
greet();


//parameter
function welcome(name){
    console.log(name);
    console.log(name,"welcome to web tech");
}
welcome("john");


//calculator

function add(a,b){
    console.log("Addition = " ,a+b);
    console.log("Subtraction = " ,a-b);
    console.log("Multiplication = " ,a*b);
    console.log("Division = ",a/b);
    
}
add(10,20)