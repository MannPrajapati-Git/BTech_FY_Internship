// JavaScript Callback Synchronous

// In JavaScript, you can also pass a function as an argument to a function. This 
// function that is passed as an argument inside of another function is called a 
// callback function.

function ShowMsg(name,Callback){
    console.log("Hello " + name);
    Callback();
}
function DemoCallback(){
    console.log("I Am A Callback Function.")
}
ShowMsg("Mann",DemoCallback);
console.log("------------------------------------------------------")
// CallBack using SetTimeOut
// setTimeout() is a JavaScript asynchronous function that executes a code 
// block or evaluates an expression through a callback function after a delay set 
// in milliseconds.

console.log("Welcome")
setTimeout(()=>{
    console.log("Hello callback setTimeout function")
},3000)
console.log("Byee")
console.log("------------------------------------------------------")


// JavaScript Callback Asynchronous
// Callbacks can also be used to execute code asynchronously.

function AsyncFunction(then){
    setTimeout(then,1000);
    console.log("call first asynchronously.")
}

AsyncFunction(function(){
    console.log("Done");
});
console.log("Call Second.")
console.log("------------------------------------------------------")

// Callback hell
// Multiple functions can be created independently and used as callback 
// functions. These create multi-level functions. When this function tree 
// created becomes too large, the code becomes incomprehensible sometimes 
// and is not easily refactored. This is known as callback hell.

// Syntaxt

// asyncFunction(function(){
//     asyncFunction(function(){
//         asyncFunction(function(){
//             asyncFunction(function(){
//                 // ...
//             });
//         });
//     });
// });

