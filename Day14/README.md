
---

# JavaScript Array Search Methods

JavaScript provides several methods to **search elements** in an array. These methods differ in how they search (by value, by condition, or from the beginning/end of the array).

---

## 🔎 Array Search Methods

* `indexOf()`
* `lastIndexOf()`
* `includes()`
* `find()`
* `findIndex()`
* `findLast()`
* `findLastIndex()`

---

### 1. `indexOf()`

The **`indexOf()`** method searches an array for a specific element and returns its **first index**.
If the element is not found, it returns `-1`.

```js
const fruits = ["apple", "banana", "orange", "apple"];
console.log(fruits.indexOf("apple"));  // 0
console.log(fruits.indexOf("mango"));  // -1
```

---

### 2. `lastIndexOf()`

The **`lastIndexOf()`** method works like `indexOf()`, but it returns the **last index** of the element.

```js
const fruits = ["apple", "banana", "orange", "apple"];
console.log(fruits.lastIndexOf("apple")); // 3
```

---

### 3. `includes()`

The **`includes()`** method checks if an array contains a specific value.
Unlike `indexOf()`, it works with `NaN`.

```js
const numbers = [1, 2, 3, NaN];
console.log(numbers.includes(2));   // true
console.log(numbers.includes(4));   // false
console.log(numbers.includes(NaN)); // true
```

---

### 4. `find()`

The **`find()`** method returns the **first element** that satisfies a given condition (test function).

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id > 1);
console.log(user); // { id: 2, name: "Bob" }
```

---

### 5. `findIndex()`

The **`findIndex()`** method returns the **index** of the first element that satisfies a condition.

```js
const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(num => num > 10);
console.log(index); // 1 (because 12 is the first > 10)
```

---

### 6. `findLast()`

The **`findLast()`** method (added in **ES2023**) searches from the **end** of the array and returns the first matching element.

```js
const numbers = [5, 12, 50, 130, 44];
const last = numbers.findLast(num => num > 45);
console.log(last); // 130
```

---

### 7. `findLastIndex()`

The **`findLastIndex()`** method returns the **index** of the last element that satisfies a condition.

```js
const numbers = [5, 12, 50, 130, 44];
const lastIndex = numbers.findLastIndex(num => num > 45);
console.log(lastIndex); // 3 (130 is last element > 45)
```

---

## 📝 Mini Task: Practice

Try the following:

```js
const scores = [45, 67, 89, 67, 32, 89, 100];

1. Find the first index of 67
2. Find the last index of 89
3. Check if the array contains 100
4. Find the first score greater than 80
5. Find the index of the first score less than 40
6. Find the last score greater than 60
7. Find the index of the last score equal to 89
```
---
