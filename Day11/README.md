
---

## **JavaScript Arrays – Day 11**

### **What is an Array?**

An **Array** is a special type of **object** in JavaScript used for storing **collections of data**.

### **Key Characteristics**

* **Elements**: Arrays store multiple values, called elements.
* **Ordered**: Elements are stored in order based on their index.
* **Zero-indexed**: The first element is at index `0`, the second at `1`, and so on.
* **Dynamic size**: Arrays can grow or shrink as elements are added or removed.
* **Heterogeneous**: Arrays can store elements of **different data types** — numbers, strings, objects, or even other arrays.

---

### **Why Use Arrays?**

Instead of creating multiple variables:

```javascript
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

You can store all cars in a single array:

```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

Advantages:

* Easier to **loop** through elements.
* Can handle **any number** of items efficiently.

---

### **Creating an Array**

The simplest way is using **array literals**:

```javascript
let array_name = [item1, item2, ...];
```

> Best practice: declare arrays with `const` if you don’t plan to reassign the array itself.

---

### **Arrays Are Objects**

* `typeof` returns `"object"` for arrays.
* Arrays can store **objects, functions, and even other arrays**:

```javascript
const myArray = [Date.now, function(){}, ["Apple", "Orange"]];
```

---

### **Array Properties and Methods**

* **`length`** – returns number of elements:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4
```

* **Adding elements**:

  1. Using `push()`:

  ```javascript
  fruits.push("Lemon"); // adds at the end
  ```

  2. Using `length`:

  ```javascript
  fruits[fruits.length] = "Lemon"; // adds at the end
  ```

> Note: You can create "holes" in an array if you assign to an index far beyond the current length:

```javascript
fruits[6] = "Pineapple"; // fruits[4] and fruits[5] are undefined
```

---

### **What JavaScript Does Not Support**

* **Associative arrays** (arrays with named indexes) do not exist in JavaScript.
  If you need named indexes, use an **object**:

```javascript
const person = { firstName: "John", age: 30 };
```

---

### **Extra Tips**

* Arrays are **iterable**, so you can use loops like `for`, `for...of`, and `forEach`.
* Common methods include `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, and `sort()`.

---

### **Mini Task**

1. Create an array of your **5 favorite Anime**.
2. Add **2 more anime** to the array using `push()`.
3. Replace the **third anime** with another one.
4. Print the **length** of the array.
5. Loop through the array and print each anime name.

---
