// Destructuring Assignment is a JavaScript expression that allows to unpack 
// values from arrays, or properties from objects, into distinct variables data 
// can be extracted from arrays, objects, nested objects and assigning to 
// variables

// Example 1 : Without ES6

let person = {
    firstname : "Mann",
    lastname : "Prajapati"
};

let fn = person.firstname;
let ln = person.lastname;

console.log(fn , ln);

// With ES6 ( Object Destructuring)

let {firstname , lastname } = person;
console.log(firstname , lastname);

// With ES6 ( Array Destructuring and rest operators)

let colors = ["red" , "green" , "yellow" , "blue" , "pink"];
let [c1,c2,c3,...args] = colors;
console.log(c1)
console.log(c2)
console.log(c3)
console.log(args);