<!-- Array Iteration Methods
Array iteration methods operate on every array item.

Array forEach
Array map()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)
Array Rest (...)



JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.

JavaScript Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:

JavaScript Array flatMap()
ES2019 added the Array flatMap() method to JavaScript.

The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

JavaScript Array filter()
The filter() method creates a new array with array elements that pass a test.

This example creates a new array from elements with a value larger than 18:


JavaScript Array reduce()
The reduce() method runs a function on each array element to produce a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

Note
The reduce() method does not reduce the original array.


JavaScript Array reduceRight()
The reduceRight() method runs a function on each array element to produce a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

Note
The reduceRight() method does not reduce the original array.

This example finds the sum of all numbers in an array:


JavaScript Array every()
The every() method checks if all array values pass a test.

This example checks if all array values are larger than 18:


JavaScript Array some()
The some() method checks if some array values pass a test.

This example checks if some array values are larger than 18:


JavaScript Array.from()
The Array.from() method returns an Array object from:

Any iterable object

Any object with a length property

JavaScript Array keys()
The Array.keys() method returns an Array Iterator object with the keys of an array. 

JavaScript Array entries()

The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.

JavaScript Array Spread (...)
The ... operator expands an array into individual elements.

This can be used join arrays:

Browser Support
... (rest) is an ECMAScript 2018 feature.

ES2018 is supported in all modern browsers since January 2020: -->










---

# 🚀 Day 13 – JavaScript Array Iteration Methods


---

## 📌 Methods Covered

### 1. `forEach()`
**Syntax:**
```js
array.forEach(callback(currentValue, index, array), thisArg)
````

---

### 2. `map()`

**Syntax:**

```js
array.map(callback(currentValue, index, array), thisArg)
```

---

### 3. `flatMap()`

**Syntax:**

```js
array.flatMap(callback(currentValue, index, array), thisArg)
```

---

### 4. `filter()`

**Syntax:**

```js
array.filter(callback(currentValue, index, array), thisArg)
```

---

### 5. `reduce()`

**Syntax:**

```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

---

### 6. `reduceRight()`

**Syntax:**

```js
array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)
```

---

### 7. `every()`

**Syntax:**

```js
array.every(callback(currentValue, index, array), thisArg)
```

---

### 8. `some()`

**Syntax:**

```js
array.some(callback(currentValue, index, array), thisArg)
```

---

### 9. `Array.from()`

**Syntax:**

```js
Array.from(object, mapFunction, thisArg)
```

---

### 10. `keys()`

**Syntax:**

```js
array.keys()
```

---

### 11. `entries()`

**Syntax:**

```js
array.entries()
```

---

### 12. Spread Operator `...`

**Syntax:**

```js
[...array]
```

---

### 13. Rest Operator `...`

**Syntax:**

```js
function myFunc(...args) { }
```

---

## 📝 Mini Tasks

1. Use `map()` to create a new array where each number is doubled.
2. Use `filter()` to return only ages ≥ 18 from `[12, 17, 19, 21, 14]`.
3. Use `reduce()` to calculate the total cost of `[5, 10, 20, 15]`.
4. Use `every()` to check if all numbers in `[12, 25, 30]` are greater than 10.
5. Use `some()` to check if any number in `[4, 6, 8, 12]` is even.
6. Use `flatMap()` on `[1, 2, 3]` to produce `[1, 2, 2, 4, 3, 6]`.
7. Merge `[10, 20]` and `[30, 40]` using the spread operator.

---


