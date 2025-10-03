
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


