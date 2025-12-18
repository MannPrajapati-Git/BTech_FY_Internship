// this keyword

// The this keyword indicates that we use the class's own methods and 
// properties, and allows us to have access to them within the class's scope.
// The this keyword allows us to approach the class properties and methods 
// from within the class using the following syntax:

// class Js_ThisKeyword{
//     constructor(name){
//         this.name = name
//     }
// }

// Access Property Outside Class Using Object
// Objectname.variablename

// Calling Member Variable using Object
class Js_ThisKeyword{
    constructor(name){
        console.log('Hello my name is')
        this.name = name
    }
}

const obj = new Js_ThisKeyword("Mann");
console.log(obj.name)