// Data Types

// =========================
// Primitive Data Types
// =========================

// These are immutable and stored directly by value.

// String → sequence of characters used to represent text
let str = "Hello";


// Number → represents mathematical values

let num = 42;
let pi = 3.14;

// BigInt → represents very large integers

let big = 123456789012345678901234567890n;

// Boolean → represents true or false

let isActive = true;

// Undefined → a variable declared but not assigned a value

let nothing;

// Null → a primitive value representing absence of value

let empty = null;

// Symbol → a unique and immutable identifier

let sym = Symbol("id");


// typeof Operator in JavaScript

// The typeof operator returns a string indicating the type of a value or variable.

console.log(typeof str);      // "string"
console.log(typeof num);      // "number"
console.log(typeof big);      // "bigint"
console.log(typeof isActive); // "boolean"
console.log(typeof nothing);  // "undefined"
console.log(typeof empty);    // "object" (this is a known JavaScript quirk!)
console.log(typeof sym);      // "symbol"


// =========================
// Non-Primitive (Reference) Data Types
// =========================

// These are stored as references (objects).

// Object → a collection of key-value pairs

let person = { name: "Alice", age: 25 };
    console.log(person);

// Array → an ordered collection of values

let arr = [1, 2, 3, 4, 5];
    console.log(arr);

// Function → a callable object

function greet()
{
  return "Hello, from function";
}

console.log(greet());




console.log(typeof arr);   // "object"
console.log(typeof person);   // "object"
console.log(typeof greet); // "function"



console.log(" ")

//Mini Challenges

let car = {
   brand:'Rolls-Royce Phantom VIII',
   year: 2017,
   isElectric: false
}

// * Properties: `brand` (string), `year` (number), `isElectric` (boolean)

console.log(car.brand);
console.log(car.year);
console.log(car.isElectric);
