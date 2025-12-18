// Getter-Setter Method

// In JavaScript, getter methods get the value of an object and setter methods 
// set the value of an object.
// use the get keyword for getter methods and set for setter methods.

class Js_GetterSetterMethod {
    constructor(name) {
        this.name = name;
    }
    // getter
    get personName() {
        return this.name;
    }
    // setter
    set personName(x) {
        this.name = x;
    }
}
let person1 = new Js_GetterSetterMethod('Mann');
console.log(person1.name); 
// changing the value of name property
person1.personName = 'Heli';
console.log(person1.name);