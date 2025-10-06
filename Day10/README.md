
---

## **JavaScript Objects – Day 10 **

### 1. **What is an Object?**

An object is a collection of **key-value pairs**. Keys are also called properties.
Think of it like a real-world object:

```javascript
let car = {
    brand: 'Toyota',
    color: 'red',
    model: 'Corolla'
};
```

* `brand`, `color`, `model` → keys (properties)
* `'Toyota'`, `'red'`, `'Corolla'` → values

---

### 2. **Accessing Object Properties**

There are **two main ways**:

```javascript
console.log(car.brand);      // dot notation → 'Toyota'
console.log(car['color']);   // bracket notation → 'red'
```

---

### 3. **Nested Objects**

Objects can contain other objects:

```javascript
let car = {
    name: {
        normalCar: 'Alto',
        sportsCar: {
            car1: 'BMW',
            car2: 'Ferrari'
        }
    },
    model: 'E6'
};

console.log(car.name.sportsCar.car1);  // 'BMW'
```

---

### 4. **Adding or Updating Properties**

```javascript
car.color = 'blue';       // add new property
car.model = 'E7';         // update existing property

console.log(car);
```

---

### 5. **Objects with Functions (Methods)**

Objects can have **functions as properties**:

```javascript
let student = {
    name: 'John',
    grade: 'A',
    reportCard: function() {
        return this.name + " has grade " + this.grade;
    }
};

console.log(student.reportCard());  // 'John has grade A'
```

> **Note:** `this` refers to the object itself.

---

### 6. **Adding New Properties Dynamically**

```javascript
let students = {
    student1: 'Alice',
    student2: 'Bob'
};

students.student3 = 'Charlie';  // add new student
console.log(students);
```



## **Car Object Mini Tasks**

### **Step 1: Create a basic car object**

* Properties: `brand`, `model`, `year`, `price`
* Example: `{ brand: 'Toyota', model: 'Corolla', year: 2025, price: 25000 }`

**Task:** Create the object and log it to the console.

---

### **Step 2: Add a nested object**

* Add an `engine` property with:

  * `type` (e.g., `'V6'`)
  * `horsepower` (e.g., `300`)

**Task:** Log the engine type and horsepower.

---

### **Step 3: Add an array**

* Add a `colors` property (array) with at least 3 colors

**Task:** Log the first and last color from the array.

---

### **Step 4: Add a method**

* Create a method `carInfo` that returns a string with brand, model, and price

**Task:** Call the method and log the result.

---

### **Step 5: Access and modify properties**

* Change the `price` of the car
* Add a new property `owner`

**Task:** Log the updated object.

---

### **Step 6: Nested object method**

* Create a method `engineInfo` that returns type and horsepower from the `engine` object

**Task:** Call the method and log the result.

---

### **Step 7 (Optional Challenge): Dynamic addition**

* Add a `sold` property dynamically (true/false)
* Add a new color to the `colors` array dynamically

**Task:** Log the updated object and array.

---