// Default Parameters

// The concept of default parameters is a new feature introduced in the ES6 
// version of JavaScript. This allows us to give default values to function 
// parameters.


function sum1(x = 5, y = 5) {
    return x + y;
}
console.log(sum1(2, 1)) // 3
console.log(sum1(2)) // 7
console.log(sum1()) // 10

// Passing Parameter as Default Values

function sum2(x = 1, y = x, z = x + y) {
    console.log(x + y + z);
}
sum2(); // 4