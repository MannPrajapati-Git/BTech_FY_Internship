// Class Inheritance

// When the properties and the methods of the parent class are accessed by 
// the child class, we call the concept has inheritance. 
// To use class inheritance, you use the extends keyword.
// The child class can inherit the parent method and give own method 
// implementation, this property is called overridden method. 
// Inheritance enables you to define a class that takes all the functionality from 
// a parent class and allows you to add more.
// Using class inheritance, a class can inherit all the methods and properties of 
// another class.
// Inheritance is a useful feature that allows code reusability.


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
}
//Object of Student Class
let student1 = new Student('Mann');
student1.greet();




// Extends to Multiple Class
// parent class
class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class student extends person {
}
// inheriting parent class
class professor extends person {
    subject() {
        console.log(`I Teach JavaScript`);
    }
}
//Object of Student Class
let student2 = new student('Mann');
student1.greet();
let professor1 = new professor('Heli');
professor1.greet();
professor1.subject();