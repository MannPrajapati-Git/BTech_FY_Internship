//Javascript Class Methods:

// To access the method of an object, you need to call the method using its
// name followed by ().


class Js_ClassAndMethod {
    constructor(name) {
        this.name = name;
    }
    // defining method
    greet() {
        console.log(`Hello ${this.name} `);
    }
    color(){
        console.log("He wore Blue hoodie." )
    }
}
let person1 = new Js_ClassAndMethod('Heli');
let person2 = new Js_ClassAndMethod('Mann');
// accessing property
console.log(person1.name);
// accessing method
person1.greet();
person1.color();
console.log(person2.name);
person2.greet();

