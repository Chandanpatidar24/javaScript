

# 📘 Day 3 – JavaScript Data Types

JavaScript variables can hold **8 types of data**, which are divided into **primitive** and **non-primitive (reference)** types. Understanding these data types is essential for writing robust JavaScript code.

---

## 🔹 JavaScript Data Types

| Type      | Description                                   |
| --------- | --------------------------------------------- |
| String    | A text of characters enclosed in quotes       |
| Number    | A number representing a mathematical value    |
| BigInt    | A number representing a large integer         |
| Boolean   | A data type representing true or false        |
| Object    | A collection of key-value pairs of data       |
| Undefined | A primitive variable with no assigned value   |
| Null      | A primitive value representing object absence |
| Symbol    | A unique and primitive identifier             |

✅ **Note:** `Symbol` is a primitive data type introduced in ES6 and is used for creating **unique identifiers**.

---

## 🔹 Primitive Data Types

Primitive types are **immutable** and stored directly by value.

```js
// String
let str = "Hello";

// Number
let num = 42;
let pi = 3.14;

// BigInt
let big = 123456789012345678901234567890n;

// Boolean
let isActive = true;

// Undefined
let x;
console.log(x); // undefined

// Null
let y = null;

// Symbol
let sym = Symbol("id");
```

---

## 🔹 Non-Primitive (Reference) Data Types

Non-primitive types are **stored as references**.

```js
// Object
let person = { name: "Alice", age: 25 };
console.log(person);

// Array → ordered list of values
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Function → callable object
function greet() {
  return "Hello from function";
}
console.log(greet());
```

Other reference types include `Date`, `RegExp`, `Map`, `Set`, `WeakMap`, `WeakSet`, etc.

---

## 🔹 Using `typeof` in JavaScript

The `typeof` operator **returns a string indicating the type** of a value or variable.

```js
console.log(typeof "Hello");                  // "string"
console.log(typeof 42);                       // "number"
console.log(typeof 1234567890123n);           // "bigint"
console.log(typeof true);                     // "boolean"
console.log(typeof undefined);                // "undefined"
console.log(typeof null);                     // "object" (quirk!)
console.log(typeof Symbol("id"));             // "symbol"
console.log(typeof [1,2,3]);                  // "object"
console.log(typeof { name: "Alice" });        // "object"
console.log(typeof function greet(){});       // "function"
```

**Key Notes:**

* `typeof null` returns `"object"` (a known JavaScript quirk).
* Arrays are technically objects. Use `Array.isArray(arr)` to check arrays.
* Functions are callable objects, so `typeof` returns `"function"`.

---

## 🔹 Summary Table

| Category      | Data Types                                               |
| ------------- | -------------------------------------------------------- |
| **Primitive** | String, Number, BigInt, Boolean, Undefined, Null, Symbol |
| **Reference** | Object (includes Array, Function, Date, Map, Set, etc.)  |

---

## 🎯 Mini Challenges – Test Your Knowledge

 **Create an Object `car`**

   * Properties: `brand` (string), `year` (number), `isElectric` (boolean)

---

✨ **Key Takeaways for Day 3**

* JavaScript has **7 primitive types** + **1 reference type**.
* Use `typeof` to check variable types.
* Objects and arrays are flexible and foundational for all JS programming.
* Symbols are unique identifiers useful for hidden object properties.
