// Object

// How to create objects from a class?
// We can create several objects from the same class, with each object having 
// its own set of properties.
// In order to work with a class, we need to create an object from it.
// In order to create an object, we use the new keyword.
// Example : 
// bmw = new Car ();
// mercedes = new Car ();


// class Js_Object {
//     constructor() {
//         console.log("This is the constructor")
//     }
// }

// myobj = new Js_Object();



// Creating JavaScript Class with Multiple Object

// creating a class
// class Js_Object {
//     constructor(name) {
//         this.name = name;
//     }
// }
// // creating an object
// const person1 = new Js_Object('Mann');
// const person2 = new Js_Object('Heli');
// console.log(person1.name); 
// console.log(person2.name); 



// Object with Multiple Parameter
// We can pass multiple parameter in Object
// We can access member variable using object.
// Object.variablename


class Js_Object {
    constructor(name,age) {
        console.log("My name and age !")
        this.name = name;
        this.age = age;
    }
}
// creating an object
const person = new Js_Object('Mann',21);
console.log(person)
console.log(person.name); 
console.log(person.age); 