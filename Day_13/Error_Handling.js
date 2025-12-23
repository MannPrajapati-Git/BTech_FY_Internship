// Error handling
// The most common way to handle errors when using async-await, good old 
// try-catch. All you need to do is encapsulate your code in a try block and 
// handle any errors that occur in a catch.

let promise = new Promise(function (resolve,reject){
    setTimeout(function () {
        resolve('Promise resolved')
    },4000)
});

// async function 
async function asyncFunc(){
    try{
        let result = await promise;
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
}

asyncFunc();

