

# JavaScript Functions – Learning and Practice

## Overview

This repository covers the fundamentals of **JavaScript functions**. It includes explanations, examples, and mini coding quizzes to practice creating and using functions effectively.

Functions are reusable blocks of code that perform specific tasks, helping make your code organized, readable, and efficient.


## **1. Understanding Functions**

### **What is a Function?**

A function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you can put it in a function and call it whenever needed.


### **Function Names**

Every function has a name to identify and call it. A good function name should describe what it does, e.g., `calculateSum` or `greetUser`.


### **Parameters**

Functions can take inputs called **parameters**. These values allow the function to work with different data each time it is called, similar to ingredients in a recipe.


### **Return Values**

Functions can return a result using a **return value**. This is the output after performing the task. If a function does not return anything, it just performs an action, like printing a message.


### **Function Expressions**

Instead of defining a function with a name, you can store a function in a variable. This provides flexibility, such as passing the function as a value or reassigning it.


### **Arrow Functions**

A modern, shorter way to write functions, ideal for small or single-purpose tasks like calculations or conditional checks.


### **Immediately Invoked Function Expressions (IIFE)**

Functions can run immediately after being defined, without needing to be called separately. Useful for code that runs once and keeps variables private.


### **Why Use Functions?**

* Avoid repetition of code
* Make code organized and readable
* Reuse logic in multiple places
* Break complex tasks into smaller, manageable parts


## **2. Function Examples**

### **1. Basic Function**

Prints a simple message.

```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello(); // Output: Hello!
```


### **2. Function with Parameters**

Accepts inputs and performs actions based on them.

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
```


### **3. Function with Return Value**

Calculates and returns a result.

```javascript
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8
```


### **4. Function Expression**

Function stored in a variable for flexibility.

```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // Output: 20
```


### **5. Arrow Function**

Shorter syntax for writing functions.

```javascript
const divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5
```


### **6. Immediately Invoked Function Expression (IIFE)**

Function that runs immediately after definition.

```javascript
(function() {
    console.log("This runs immediately!");
})();
```


## **3. Mini Coding Quizzes**

Practice creating functions with these exercises:

1. **Square of a Number**
   Write a function that takes a number and returns its square.
   *Example:* input `4` → output `16`

2. **Greeting Function**
   Create a function that takes a name and prints `"Hello, <name>!"`.

3. **Sum of Two Numbers**
   Write a function that takes two numbers and returns their sum.

4. **Check Even or Odd**
   Create a function that takes a number and returns `"Even"` if divisible by 2, otherwise `"Odd"`.
