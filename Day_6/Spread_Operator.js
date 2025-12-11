// Spread … operator

// ES6 provides a new operator called spread operator that consists of three / 
// 3 dots (...). (3 Dots … is required)
// The spread operator allows you to spread out elements of an iterable object 
// such as an array, map, or set.

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined); // [ 2, 4, 6, 1, 3, 5 ]

// 1. Constructing array literal
// The spread operator allows you to insert another array into the initialized 
// array when you construct an array using the literal form.

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

// 2. Concatenating arrays
// Also, you can use the spread operator to concatenate two or more arrays:

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

// 3. Copying an array
// In addition, you can copy an array instance by using the spread operator
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

