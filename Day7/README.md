
# Day 7 - JavaScript Loops 

This repository contains examples and exercises related to loops in JavaScript. Loops allow you to run a block of code multiple times, which is useful when printing numbers, iterating through arrays or objects, and performing repetitive calculations.

---

## Printing Numbers Without Loops

Printing numbers from 1 to 10 manually:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
````

> Note: This approach is fine for small numbers, but impractical for large ranges like 1 to 1000 or 1 to 10⁶. Loops solve this problem efficiently.

---

## Types of Loops in JavaScript

### 1. `for` Loop

Use a `for` loop when you know how many times you want to repeat code.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i); // prints 1 to 5
}
```

**Syntax:**

```javascript
for (initialization; condition; increment/decrement) {
  // code to run each iteration
}
```

---

### 2. `while` Loop

Use a `while` loop when you don’t know the exact count but have a condition.

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

**Syntax:**

```javascript
initialization;
while (condition) {
  // code to run
  increment/decrement;
}
```

---

### 3. `do...while` Loop

Runs at least once, even if the condition is false.

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

**Syntax:**

```javascript
initialization;
do {
  // code to run
  increment/decrement;
} while (condition);
```

---

### 4. `for...of` Loop

Loops through arrays, strings, or other iterable objects.

```javascript
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
```

---

### 5. `for...in` Loop

Loops through the keys of an object.

```javascript
let person = { name: "Ali", age: 20, city: "Lahore" };
for (let key in person) {
  console.log(key + " → " + person[key]);
}
```

---

## Mini Quiz Exercises

1. **Print numbers from 1 to 10.**
2. **Print even numbers between 1 and 50.**
3. **Multiplication table of a number (input via prompt).**
4. **Sum of numbers from 1 to N.**
5. **Factorial of a number.**


---
