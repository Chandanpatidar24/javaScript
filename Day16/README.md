

---

#  JavaScript Math Object

The **JavaScript `Math` object** allows you to perform mathematical tasks.

>  The `Math` object is **static** — all methods and properties can be used **without creating a new object**.

```js
Math.PI;
```

---

## 📘 Math Properties (Constants)

The syntax for any Math property is:

```js
Math.property
```

JavaScript provides **8 mathematical constants** that can be accessed as Math properties:

| Property       | Description        | Example      |
| -------------- | ------------------ | ------------ |
| `Math.E`       | Euler’s number     | `2.718...`   |
| `Math.PI`      | PI                 | `3.14159...` |
| `Math.SQRT2`   | Square root of 2   | `1.414...`   |
| `Math.SQRT1_2` | Square root of 1/2 | `0.707...`   |
| `Math.LN2`     | Natural log of 2   | `0.693...`   |
| `Math.LN10`    | Natural log of 10  | `2.302...`   |
| `Math.LOG2E`   | Base 2 log of E    | `1.442...`   |
| `Math.LOG10E`  | Base 10 log of E   | `0.434...`   |

---

##  Math Methods

The syntax for any Math method is:

```js
Math.method(number)
```

---

### Number to Integer Methods

| Method          | Description                    | Example                 |
| --------------- | ------------------------------ | ----------------------- |
| `Math.round(x)` | Rounds **to nearest integer**  | `Math.round(4.6)` → `5` |
| `Math.ceil(x)`  | Rounds **up**                  | `Math.ceil(4.1)` → `5`  |
| `Math.floor(x)` | Rounds **down**                | `Math.floor(4.9)` → `4` |
| `Math.trunc(x)` | Removes decimal (integer part) | `Math.trunc(4.9)` → `4` |

>  `Math.trunc()` was added in **ES6 (2015)**

---

###  Math.sign()

Returns whether a number is **positive**, **negative**, or **zero**.

```js
Math.sign(x)
```

| Value of x | Returns |
| ---------- | ------- |
| Positive   | `1`     |
| Negative   | `-1`    |
| Zero       | `0`     |

> `Math.sign()` was also added in **ES6 (2015)**

---

###  Math.pow()

```js
Math.pow(x, y)
```

Returns the value of `x` to the power of `y`.

Example:

```js
Math.pow(2, 3); // 8
```

---

###  Math.sqrt()

Returns the square root of `x`.

```js
Math.sqrt(16); // 4
```

---

###  Math.abs()

Returns the **absolute (positive)** value of `x`.

```js
Math.abs(-7.5); // 7.5
```

---

###  Trigonometric Methods

#### Math.sin()

```js
Math.sin(x)
```

Returns the sine of the angle `x` (in radians).

> To convert **degrees to radians**:
>
> `radians = degrees × Math.PI / 180`

Example:

```js
Math.sin(90 * Math.PI / 180); // 1
```

#### Math.cos()

```js
Math.cos(x)
```

Returns the cosine of the angle `x` (in radians).

Example:

```js
Math.cos(0 * Math.PI / 180); // 1
```

---

###  Math.min() and Math.max()

Find the **lowest** or **highest** value from a list of numbers.

```js
Math.min(3, 7, -2, 10); // -2
Math.max(3, 7, -2, 10); // 10
```

---

###  Math.random()

Returns a random number between **0 (inclusive)** and **1 (exclusive)**.

```js
Math.random(); // Example: 0.385...
```

> You can learn more about generating random numbers (e.g., 1–100) in the next chapter.

---

###  Logarithmic Methods

#### Math.log(x)

Returns the **natural logarithm** (base `e`) of `x`.

```js
Math.log(10);
```

> How many times must we multiply **Math.E** to get **10**?

---

#### Math.log2(x)

Returns the **base 2 logarithm** of `x`.

```js
Math.log2(8); // 3
```

> How many times must we multiply **2** to get **8**?

---

#### Math.log10(x)

Returns the **base 10 logarithm** of `x`.

```js
Math.log10(1000); // 3
```

> How many times must we multiply **10** to get **1000**?

---

##  Mini Tasks

Try these small exercises to practice your knowledge!

### 🧩 Task 1: Rounding Numbers

Round the number `5.6789` using:

* `Math.round()`
* `Math.ceil()`
* `Math.floor()`
* `Math.trunc()`

---

### 🎯 Task 2: Positive or Negative

Write a small snippet that checks if a number is positive, negative, or zero using `Math.sign()`.

---

### ⚡ Task 3: Power Play

Find:

* `4²`
* `9³`
* `2⁵`

Use `Math.pow()`.

---

### 🌀 Task 4: Random Fun

Generate:

1. A random number between **0 and 10**
2. A random number between **1 and 100**

 *Hint:* Multiply `Math.random()` and use rounding methods.

---

###  Task 5: Trigonometry Time

Find the sine and cosine of **30°**, **45°**, and **90°** using `Math.sin()` and `Math.cos()`.

---

###  Task 6: Logarithms

Find the result of:

* `Math.log(10)`
* `Math.log2(8)`
* `Math.log10(100)`

---

