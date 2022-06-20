// Datatypes in JavaScript
// Primitive Datatypes in JavaScript (Not Objects) Stack
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// reference types in JavaScript (objects) Heap
// Objects  - Arrays, Functions, Dates, RegExp, Error, Map, Set, WeakMap, WeakSet
// Functions
// Arrays
// Dates

//String
let name = "Zeeshan " + "Amjad";
console.log(name);
console.log(typeof name);

//Number
let age = 30;
console.log(age);
console.log(typeof age);

// Boolean
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

// Null
let car = null;
console.log(car);
console.log(typeof car);

// Undefined
let test;
console.log(test);
console.log(typeof test);

// Symbol
let symbol = Symbol("Zeeshan");
console.log(symbol);
console.log(typeof symbol);

// reference types in JavaScript (objects) Heap
myarr = [1, 2, 3, 4, 5, false,"Zeeshan"];
console.log(myarr);
console.log(typeof myarr);

// object literal
let myObject = {
    name: "Zeeshan",
    age: 30,
    isMarried: false,
    car: null,
    symbol: Symbol("Zeeshan"),
}
console.log(myObject);

// Objects  - Arrays, Functions, Dates, RegExp, Error, Map, Set, WeakMap, WeakSet
// Functions
let myFunction = function() {
    console.log("hello Zeeshan"); 
}
myFunction();

// Dates
let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);

