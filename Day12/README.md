
---

# Day 12 - JavaScript Array Methods

This tutorial covers basic and advanced **JavaScript array methods**. Arrays are one of the most important data structures in JavaScript, and understanding how to manipulate them is essential.


## Basic Array Methods
- Array length
- Array toString()
- Array at()
- Array join()
- Array pop()
- Array push()
- Array shift()
- Array unshift()
- Array delete()
- Array concat()
- Array copyWithin()
- Array flat()
- Array slice()
- Array splice()
- Array toSpliced()

### Array length

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // returns 4
```

### Array toString()

```js
console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"
```

### Array at()

```js
console.log(fruits.at(2)); // "Apple"
console.log(fruits[2]);    // same as above
```

### Array join()

```js
console.log(fruits.join("*")); // "Banana*Orange*Apple*Mango"
```

---

## Adding and Removing Elements

### Pop and Push

```js
fruits.push("Kiwi"); // add element at the end
fruits.pop();         // remove last element
```

### Shift and Unshift

```js
fruits.shift();      // remove first element
fruits.unshift("Lemon"); // add element at the beginning
```

---

## Merging and Copying Arrays

### Concat

```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myBoys.concat(myGirls);
console.log(myChildren);
```

### copyWithin

```js
fruits.copyWithin(2, 0); // copy elements within the same array
```

---

## Flattening Arrays

### flat

```js
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat()); // [1,2,3,4,5,6]
```

### flatMap

```js
const flatarr = [1, 2, 3];
console.log(flatarr.flatMap(x => [x, x*10])); // [1,10,2,20,3,30]
```

---

## Splicing and Slicing Arrays

### splice

```js
fruits.splice(2, 2, "Lemon", "Kiwi"); 
// remove 2 elements from index 2 and add new elements
```

### toSpliced

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1); // creates a new array
```

### slice

```js
const citrus = fruits.slice(1); // get a portion of an array
```

---

## Mini Tasks

Here are simple exercises for practice:

1. **Array length & toString**

   * Create an array of 5 colors.
   * Print its length and convert it to a string.

2. **Accessing elements**

   * Use `.at()` and `[]` to get the 3rd color from the array.

3. **Join elements**

   * Join all colors with a `-` separator.

4. **Push & Pop**

   * Add a new color at the end.
   * Remove the last color and log it.

5. **Shift & Unshift**

   * Remove the first color.
   * Add a new color at the beginning.

6. **Concat arrays**

   * Create two arrays of fruits and vegetables.
   * Merge them into one array.

7. **CopyWithin**

   * Copy the first two elements of an array to the last two positions.

8. **Flatten arrays**

   * Create a nested array with 2 levels and flatten it.
   * Use flatMap to double each number in an array.

9. **Splice & Slice**

   * Remove 1 element from the middle of an array using splice.
   * Create a new array from the last 2 elements using slice.

10. **toSpliced**

    * Remove the first element from an array using `toSpliced` and log both arrays.

---



---

## Mini Task: Fruit Basket Manager 

**Instructions:**

1. Create an array called `basket` with these fruits: `"Apple"`, `"Banana"`, `"Mango"`, `"Orange"`.
2. **Check the length** of the basket and print it.
3. **Access the second fruit** using both `.at()` and `[]`.
4. **Add** `"Kiwi"` to the end and `"Lemon"` to the beginning.
5. **Remove** the first fruit and the last fruit, and print both removed fruits.
6. **Convert** the basket to a string using `toString()` and print it.
7. **Join** the fruits with `" | "` as a separator.
8. **Create a copy** of the basket using `copyWithin` to replace the last two fruits with the first two.
9. **Slice** the basket to get only the middle fruits and print the new array.
10. **Splice** to remove 1 fruit from the middle and add `"Pineapple"` instead.
11. Create a **nested array** of 2 fruit baskets and **flatten** it.

---