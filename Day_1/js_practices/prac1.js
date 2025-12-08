// variable declaration

var x = 5;  // for global use var
let y = 10;
let c = x + y;
// let c = x - y;
// let c = x * y;
// let c = x ** y;
// let c = x /  y;
// let c = x %  y;

console.log("--------------------------------------------------")
let x1 = x += 5;
console.log("x += 5 : ", x1);


console.log("increment with 1 x value :", x++, x);
// console.log("increment with 1 x value :", x-- , x)

const carname = "MG";
// carname = "BMW";
console.log("Car name : " + carname);



{
    let x = 10; // for block scope use let 
    console.log("x inside block :" + x);
}




console.log("value of x : ", x);

console.log("sum : " + c);
const fname = "John";

console.log(typeof fname);
console.log(typeof x);

console.log("--------------------------------------------------")



// if else 

let age = 17;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA" && age >= 16) {
    text = "You can drive!";
    console.log(text);
}
else {
    console.log(text)
}



// ternary operator
let permission = (age >= 16) ? "you can drive the car." : "you can't drive the car";
console.log(permission)



// switch case

let day;
x = 3;


// switch (new Date().getDay()) {
switch (x) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    default:
        text = "enter valid";
}
console.log(day);

console.log("--------------------------------------------------")

// for loop 

for (let i = 0; i < 5; i++) {
    console.log(i)
}

const cars = ["BMW", "Volvo", "Ford"];
let len = cars.length;

let t1 = "";
for (let i = 0; i < len; i++) {
    t1 += cars[i];
}
console.log(t1)


console.log("------------------------------------------------")


// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Call the toCelcius() function
let value = toCelsius(77);
console.log(value);







// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let t2 = person.name + "," + person.age + "," + person.city;
console.log(t2)