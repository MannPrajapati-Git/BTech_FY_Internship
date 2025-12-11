// Hoisting in JS
// Hoisting in JavaScript refers to the behavior where variable and function 
// declarations are moved to the top of their containing scope during the 
// compilation phase before the code is executed.

// 1. Function Declarations
// Function Declarations are hoisted completely, including their bodies. This 
// means you can call a function before it is defined in the code.

console.log(greet());
function greet() {
    return "Hello World!";
}

// 2. Function Expressions
// Function Expressions, including those using arrow functions, are not hoisted 
// in the same way. Only the variable declaration is hoisted, but the function 
// definition is not. 
// This means you cannot call the function before the point where it is assigned.

// console.log(data()); // TypeError: 
// data is not a function
// var data = function() {
// return "Hello!";
// };

// Arrow Function Expression
// console.log(data()); // TypeError: data is not a function
// var data = () => {
// return "Hi!";
// };


// Differences in Hoisting
// Differences in Hoisting Between Traditional Functions and Arrow Functions
// Traditional Function Declarations: 
// Fully hoisted, including the function body.
// Function Expressions (including Arrow Functions): 
// Only the variable declaration is hoisted, not the assignment. 
// Thus, trying to invoke the function before the assignment will lead to 
// errors.

