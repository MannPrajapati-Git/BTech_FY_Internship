// The super keyword used inside a child class denotes its parent class.

// parent class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class Student extends Person {
    constructor(name) {
        console.log("Creating student class");
        // call the super class constructor and pass in the name parameter
        super(name);
    }
}
let student1 = new Student('Mann');
student1.greet();