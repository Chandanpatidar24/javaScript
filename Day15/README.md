
---

# JavaScript Array Sorting Guide

This guide covers the essential methods for sorting and reversing arrays in JavaScript, including the newest ES2023 methods. It also includes numeric sorting, random sorting, finding minimum and maximum values, and sorting arrays of objects.

---

## Table of Contents

- JavaScript Array Sorting Guide
- Table of Contents
- Sorting Arrays
- Alphabetic Sort
- Reversing Arrays
- `toSorted()` and `toReversed()` (ES2023)
- Numeric Sorting
- Random Sorting
- Finding Min and Max Values
- Using `Math.min()` / `Math.max()`
- Home-made Methods
- Sorting Arrays of Objects
---

## Sorting Arrays

### Alphabetic Sort

```javascript
let fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

---

## Reversing Arrays

```javascript
let fruits = ["Banana", "Apple", "Orange"];
fruits.reverse();
console.log(fruits); // ["Orange", "Apple", "Banana"]
```

---

## `toSorted()` and `toReversed()` (ES2023)

* `toSorted()`: Returns a sorted **new array** without changing the original.
* `toReversed()`: Returns a reversed **new array** without changing the original.

```javascript
let numbers = [3, 1, 4];
let sortedNumbers = numbers.toSorted();
let reversedNumbers = numbers.toReversed();

console.log(numbers); // [3, 1, 4] - unchanged
console.log(sortedNumbers); // [1, 3, 4]
console.log(reversedNumbers); // [4, 1, 3]
```

---

## Numeric Sorting

By default, `sort()` treats numbers as strings. To sort numerically, use a **compare function**:

```javascript
let numbers = [40, 100, 1, 5];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [1, 5, 40, 100]

numbers.sort((a, b) => b - a); // descending
console.log(numbers); // [100, 40, 5, 1]
```

---

## Random Sorting

**Incorrect way:**

```javascript
points.sort(() => Math.random() - 0.5); // may favor some numbers
```

**Correct way: Fisher-Yates Shuffle**

```javascript
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

---

## Finding Min and Max Values

### Using `Math.min()` / `Math.max()`

```javascript
let numbers = [5, 1, 8, 3];
console.log(Math.min(...numbers)); // 1
console.log(Math.max(...numbers)); // 8
```

### Home-made Methods

```javascript
function myArrayMin(arr) {
  let min = Infinity;
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}

function myArrayMax(arr) {
  let max = -Infinity;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
```

---

## Sorting Arrays of Objects

You can sort objects using a compare function:

```javascript
let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
```

---

## Mini Tasks

Try these exercises to practice each concept:

1. **Alphabetic Sort:**
   Sort an array of your favorite fruits alphabetically.

2. **Reverse Array:**
   Reverse the sorted array without changing the original array using `toReversed()`.

3. **Numeric Sort:**
   Sort an array of numbers in ascending and descending order.

4. **Random Shuffle:**
   Implement Fisher-Yates shuffle on a deck of card numbers `[1-52]`.

5. **Min and Max:**
   Find the smallest and largest numbers in `[23, 54, 12, 67, 34]` using `Math.min`, `Math.max`, and your own functions.

6. **Sort Objects:**
   Create an array of objects with `name` and `score` properties and sort it by `score` ascending.

7. **Combine Methods:**
   Take an array of numbers, sort them ascending, then reverse the sorted array using `toReversed()`, without modifying the original.

---

