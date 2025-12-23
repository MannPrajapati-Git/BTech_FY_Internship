// What is Async/Await?
// Async/await functions, a new addition with ES2017 (ES8), help us even more in allowing us 
// to write completely synchronous-looking code while performing asynchronous tasks 
// behind the scenes.
// It is the newest way to write asynchronous code in JavaScript. Before we used callbacks 
// and promises. Async/await actually builds on top of promises.
// It is non-blocking (just like callbacks and promises).
// Async/Await is created to simplify the process of working with and writing chained 
// promises.
// An async function returns the Promise. If the function throws an error, the Promise will be 
// automatically rejected, and if a function returns the value, that means the Promise will be 
// resolved.


// Async Function
// To create an async function all we need to do is add the async keyword 
// before the function definition 
// async functions always returns a promise.

// Async Function
// async function add(a, b) {
//     return a + b;
// }


// Await Keyword

// The await keyword can only be used within an async block, otherwise it'll 
// throw a syntax error. This means you cannot use await in the top level of our 
// code, basically, don't use it by itself.
// await blocks the code execution within the async function, of which it (await 
// statement) is a part.
// We will use await to pause the function execution and resume after the data 
// comes in.
// There can be multiple await statements within a single async function.

function DemoPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello World');
        }, 2000);
    });
}
async function msg() {
    const msg = await DemoPromise();
    console.log('Message:', msg);
}
msg();



let promise = new Promise(function (resolve, reject) {
 setTimeout(function () {
 resolve('Promise resolved')}, 4000); 
});
// async function
async function asyncFunc() {
 // wait until the promise resolves 
 let result = await promise; 
 console.log(result);
 console.log('Hello Async() Called ');
}
// calling the async function
asyncFunc();

