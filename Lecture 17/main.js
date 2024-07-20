𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐬 𝐈𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 - 𝐂𝐥𝐚𝐬𝐬 𝟏𝟕

CONCEPTS COVERED - 1. Scope
                   2. Hoisting
                   3. Arrow functions

With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.

function testing() {
    var abc = 20; // Function-scoped variable
    let def = 100; // Block-scoped variable
    console.log(abc);

    // Block scope
    if (1) {
        var xyz = 'block scoped'; // var is not block-scoped
        console.log('Inside If', xyz);
        console.log(abc);
    }
    console.log('Outside if', xyz);
}

testing(); // calling a function

var name = 'Cipher'; // Global variable
let year = 2020; // Global variable

function test() {
    console.log(name);
    console.log(year);
}

test();


//2. Hoisting 

myFunc(); // Function declaration is hoisted
// myFunc2(); // This would result in an error since myFunc2 is a variable and not hoisted before this line

function myFunc() {
    console.log('Inside myFunc Declaration');
}

// Function expression
let myFunc2 = function () {
    console.log('Inside myFunc2: function expression');
}

console.log(name2); // Undefined, as the variable is hoisted but not initialized yet
// name(); // This would result in an error since name is a variable and not hoisted before this line

var name2 = 'Mrudula'; // Hoisted but not initialized yet

function name() {
    console.log('hello');
}

//3. Arrow Functions - es6 Feature 
// this - context 

let newFunc = () => {
    console.log('Arrow Functions Created');
    console.log(this); // 'this' in arrow functions refers to the enclosing context (lexical scoping)
}

newFunc();

let funcExp = function () {
    console.log(' Function expression Created');
    console.log(this); // 'this' in regular functions depends on how they are called
}

funcExp();

let newFun = name => console.log(name); // Arrow function with a single argument

newFun('cipher'); // argument
