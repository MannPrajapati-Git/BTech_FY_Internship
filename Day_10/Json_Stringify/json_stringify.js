// JSON
// JavaScript Object Notation (JSON) is a standard text-based format for 
// representing structured data based on JavaScript object syntax. 
// It is commonly used for transmitting data in web applications (e.g., sending 
// some data from the server to the client, so it can be displayed on a web page, 
// or vice versa).

// key:value is the building block.
// { } contains an element.
// [ ] contains an array of elements.
// An element can have multiple key:value pairs.
// Value can be a simple value like number or string etc., or an element or an 
// array.
// Elements in an Array could be accessed using index
// Multiplekey:value pairs or elements are separated by comma


// JSON Stringify
// converts a JavaScript object or value to a JSON string

let person = {
    firstname : "Mann",
    lastname : "Prajapati"
};

let data = JSON.stringify(person);
console.log(data)

// JSON parse
// convert JSON Data into Javascript Object.

let obj = `{
    "firstname" : "Mann",
    "lastname" : "Prajapati"
}`;

let o = JSON.parse(obj);
console.log(o)


