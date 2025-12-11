// Rest parameter

// When the spread operator is used as a parameter, it is known as the rest 
// parameter.
// You can also accept multiple arguments in a function call using the rest 
// parameter.

// Example 1 
// When a single argument is passed to the func() function, the rest parameter takes only 
// one parameter.
// When three arguments are passed, the rest parameter takes all three parameters.
// Using the rest parameter will pass the arguments as array elements.


let myfun = function (...args){
    console.log(args)
}
myfun(3);
myfun(3,4,5,6);

// Example 2 

function demo1(...args){
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
}
demo1(10,20);


// Example 3
function demo2(...args){
    for(var i=0 ; i<args.length;i++){
        console.log(args[i]);
    }
}
demo2(10,20,30,40,50);
