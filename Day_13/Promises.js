// Promises

// A promise is an object that allows you to handle asynchronous operations.
// It’s an alternative to plain old callbacks.
// A promise is basically an advancement of callbacks in js. While developing an
// application you may encounter that you are using a lot of nested callback
// functions.

// Promises advantages
// ▪ The syntax is user-friendly and easy to read
// ▪ Make the async code easier to read.
// ▪ Provide combined error handling.
// ▪ Better control flow. You can have async actions execute in parallel or series.
// ▪ Promises are used to handle asynchronous http requests

// Promise states
// There are four states in which the promises can be:
// • Pending:
// initial state. Async operation is still in process.
// • Fulfilled:
// the operation was successful. It invokes .then callback. E.g., .then(onSuccess).
// • Rejected:
// the operation failed. It invokes the .catch or .then ‘s second argument (if any). E.g., .catch(onError) or .then(..., onError)
// • Settled:
// it’s the promise final state. The promise is dead. Nothing else can be resolved or rejected anymore. The .finally method is invoked.

// Syntax
// create a Promise object
// const myPromise = new Promise();
// It takes two parameters, one for success (resolve) and one for fail (reject):
// const myPromise = new Promise((resolve, reject) => {
// condition
// });

// Syntax
// there will be a condition. If the condition is met, the Promise will be resolved,
// otherwise it will be rejected:

// const myPromise = new Promise((resolve, reject) => {
//  let condition;
//  if(condition is met) {
//      resolve('Promise is resolved successfully.');
//  } else {
//      reject('Promise is rejected');
//  }
// });

// Chaining Promises
// .then() and .catch() methods always return a promise. So you can chain 
// multiple .then calls together. 
// then() : is invoked when a promise is either resolved or rejected.
// catch() : is invoked when a promise is either rejected or some error has occured in 
// execution.

// Syntax :
// .then(function(result){
//handle success
// }, function(error){
//handle error
// })


// Promise then()
// The then method allows you to get notified when the asynchronous 
// operation is done, either succeeded or failed. 
// It takes two arguments, one for the successful execution and the other one if 
// an error happens
// promise.then(onSuccess, onError);
// You can also use catch to handle errors:
// promise.then(onSuccess).catch(onError);


// Promise catch()
// Promise .catch the method takes a function as an argument that handles 
// errors if they occur. 
// If everything goes well, the catch method is never called.
// Promise.resolve()
//  .then(a)
//  .then(b)
//  .then(c)
//  .then(d)
//  .catch(console.error)


// Promise chaining
// then returns a new promise so you can chain multiple promises together
// Promise.resolve immediately resolves the promise as successful. So all the 
// following then are called. The output would be
// Promise.resolve()
//  .then(() => console.log('then#1'))
//  .then(() => console.log('then#2'))
//  .then(() => console.log('then#3'));
// then#1
// then#2
// then#3


// then() catch()
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0) {
        resolve('Hello, I am positive number!');
    }
    reject('I failed some times');
})
myPromise.
    then(function (data) {
        console.log('Resolved: ' + data);
    }).
    catch(function () {
        console.log('Reject: ' + data);
    });
console.log("------------------------------------------------------")

// Promise finally

// The finally method is called only when the promise is settled.
// You can use a .then after the .catch, in case you want a piece of code to 
// execute always, even after a failure.

// Finally ()
const myPromise2 = new Promise((resolve, reject) => {
    if (Math.random() > 0) {
        resolve('Hello, I am positive number!');
    }
    reject('I failed some times');
})
myPromise.
    then(function (data) {
        console.log('Resolved: ' + data);
    }).
    catch(function () {
        console.log('Reject: ' + data);
    }).
    finally(() => console.log("It's done!"));
console.log("------------------------------------------------------")

const a1 = () => new Promise((resolve) => setTimeout(() => { console.log('a1'), resolve() }, 1000));
const b1 = () => new Promise((resolve) => setTimeout(() => { console.log('b1'), resolve() }, 1000));
const c1 = () => new Promise((resolve, reject) => setTimeout(() => { console.log('c1'), reject('Oops!') }, 1000));
const d1 = () => new Promise((resolve) => setTimeout(() => { console.log('d1'), resolve() }, 1000));
Promise.resolve()
 .then(a1)
 .then(b1)
 .then(c1)
 .then(d1)
 .catch(console.error)
 console.log("------------------------------------------------------")


// Promise class Methods
// There are four static methods that you can use directly from the Promise 
// object.
// ▪ Promise.all
// ▪ Promise.reject
// ▪ Promise.resolve
// ▪ Promise.race

// Executing promises in Parallel with Promise.all
const a2 = () => new Promise((resolve) => setTimeout(() => resolve('a2'), 2000));
const b2 = () => new Promise((resolve) => setTimeout(() => resolve('b2'), 1000));
const c2 = () => new Promise((resolve) => setTimeout(() => resolve('c2'), 1000));
const d2 = () => new Promise((resolve) => setTimeout(() => resolve('d2'), 1000));
console.time('promise.all');
Promise.all([a2(), b2(), c2(), d2()])
 .then(results => console.log(`Done! ${results}`))
 .catch(console.error)
 .finally(() => console.timeEnd('promise.all'));

// Promise race
// The Promise.race(iterable) takes a collection of promises and resolves as 
// soon as the first promise settles.

const a3 = () => new Promise((resolve) => setTimeout(() => resolve('a3'), 2000));
const b3 = () => new Promise((resolve) => setTimeout(() => resolve('b3'), 1000));
const c3 = () => new Promise((resolve) => setTimeout(() => resolve('c3'), 1000));
const d3 = () => new Promise((resolve) => setTimeout(() => resolve('d3'), 1000));
console.time('promise.all');
Promise.race([a3(), b3(), c3(), d3()])
 .then(results => console.log(`Done! ${results}`))
 .catch(console.error)
 .finally(() => console.timeEnd('promise.race'));

