
---

# JavaScript Strings

Strings are used for storing text in JavaScript.
Strings can be written with quotes.

---

## Using Quotes

A JavaScript string is zero or more characters written inside quotes.

**Example:**

```js
let text = "hello world";
```

You can use **single or double quotes**:

```js
let text1 = "hello";  // Double quotes
let text2 = 'world';  // Single quotes
```

**Note:**
Strings created with single or double quotes work the same.
There is no difference between the two.

---

## Quotes Inside Quotes

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```js
let person1 = "hii, I'm Johnny";
let person2 = 'hii "Johnny"';
```

---

## Template Strings

Template strings were introduced with **ES6 (JavaScript 2016)**.
They are enclosed in **backticks (`)**.

Templates allow single and double quotes inside a string:

```js
let text = `He's often called "Johnny"`;
```

They also support **multiline strings**:

```js
let text =
`The quick
brown fox
jumps over
the lazy dog`;
```

---

## String Length

To find the length of a string, use the built-in **`.length`** property:

```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
```

---

# 📝 Mini Tasks

1. Create a string using **single quotes** and include a **double quote** inside it.
2. Write a template string that says:

   ```
   Today is Friday
   I'm learning JavaScript
   ```
3. Find the **length** of the string `"JavaScript is awesome!"` and print it to the console.

---

