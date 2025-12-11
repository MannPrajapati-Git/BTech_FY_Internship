// advanced js 
// ECMA script 2015
//ES6

// topics - arrow function, spread operator, rest parameters , default parameters, forEach() loop.

console.log("Advanced Js") // you can run Js in backend using node `advance_js.js` in terminal

// 1. JavaScript Arrow Function
console.log("JS ARROW FUNCTION") // you can run Js in backend using node `advance_js.js` in terminal


// In the ES6 version, you can use arrow functions to create function expressions.

// to define an arrow function.
// Use the (arguments) => expression; 

// to define an arrow function that has multiple statements.
// Use the (arguments) => { statements }

// Normal Function 
var x = function (x, y) {
    return x * y;
};
console.log("With Function :" + x(10, 20)); //200

//Arrow Function
var x = (x, y) => x * y;
console.log("With Arrow Function :" + x(5, 3)); //15

// There are four types of user define function.
// 1. No Argument ,No Return Type 
// 2. Argument ,No Return Type 
// 3. Argument ,Return Type 
// 4. No Argument ,Return Type

// Type 1: Arrow Function With No Argument, No Return Type
// Normal Function
function msg1() {
    console.log("Hello world")
}
msg1();

// Arrow Function
let msg2 = () => console.log("Hello World") 
msg2(); // Hello World

// Type 2: Arrow Function With Argument, No Return Type
// Normal Function
function msg3(x) {
    console.log(x)
}
msg3("Hello World");

// Arrow Function
let msg4 = x => console.log(x)
msg4( "Hello World"); // Hello World

// Type 3: Arrow Function with Argument, Return Type

// Normal Function
function add1(x,y) {
    return (x+y);
}
console.log(add1(10+20))

// Arrow Function
let add2 = (x,y) => x + y;
console.log(add2(10,20));// 30;


// Type 4: Arrow Function with No Argument, Return Type

// Normal Function
function add3(){
    return 10 + 20 ;
}
console.log(add3());

// Arrow Function
let add4 = () => 10+20;
console.log(add4());// 30;

// Arrow Function as an Expression

let age = 5;
let show = (age < 18) ?
() => console.log('Invalid age') :
() => console.log('Valid age');
show();// Invalid age

// Multiline Arrow Functions

let sum = (a,b) => {
    let result = a + b;
return result;
}
let result1 = sum(5,7);
console.log(result1);// 12


console.log("Recap...")

// 1. simple Function
let welcome = () => console.log("Welcome sir.");
welcome();

// 2. Parameter
let greeting = (x) => console.log("Hello guys, Myself " + x + " Welcome to My Advanced JS folder.")
greeting("Mann Prajapati.");

// 3. Parameter with Return value 
let sum1 = (x,y) => x + y;
var ans1 = sum(10,20);
console.log("Sum is : "+ ans1);

// 4. Ternary Condition 
let age1 = 25;
let show1 = (age1 < 18) ?
() => console.log('Invalid age') :
() => console.log('Valid age');
show1();// Invalid age

// Return Value Multiple line 
let addition = (a,b) =>{
     let result = a + b;
     return result;
}
let result = addition(5,7);
console.log(result)
