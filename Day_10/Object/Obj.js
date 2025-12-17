// In JavaScript, an object is an unordered collection of key-value pairs. Each 
// key-value pair is called a property.

// object example

obj = {
    firstname : "Mann",
    lastname : "Prajapati"
};

// How to Create Object?
// We can create object using {}.
// To create an object with properties, you use the key:value within the curly 
// braces
// The key of a property can be a string. And the value of a property can be any 
// value, e.g., a string, a number, an array, and even a function.

// objectname = {
// Key: "Value",
// Key: 0,
// Key: "String",
// }


// To access a property of an object, you use one of two notations: 

// 1. the dot notation
// objectName.propertyName
console.log(obj.firstname)
console.log(obj.lastname)

// 2. array-like notation.
// objectName['propertyName']
console.log(obj['firstname'])
console.log(obj['lastname'])


// Checking if a property exists

console.log("firstname" in obj); // true
console.log("age" in obj); // false

// Adding a new property to an object

obj.age = 21;
console.log(obj.age)

// Modifying the value of a property

obj.firstname = "Heli"
obj.lastname = "Gandhi"
obj.age = 22

console.log(obj.firstname)
console.log(obj.lastname)
console.log(obj.age)

// Deleting a property of an object

delete obj.age;
console.log(obj.age) // undefined

// Nested Object and Object with Array

let person = {
    fn : "Mann",
    cars : {
        car1 : "MG",
        car2 : "BMW"
    },
    study : ["Btech", "Mtech"]
}

console.log(person.cars.car2);
console.log(person.cars['car1']);
console.log(person.study[0]);


// print using loops 

for(i in obj){
    console.log("key is ", i , "and value is ",obj[i]);
}


