# Day 5 - JavaScript Conditional Statements

When you write code, you often want to perform different actions for different conditions.  
**Conditional statements** run different code depending on a **true or false condition**.

---

## 📌 Types of Conditional Statements

- `if` → Runs a block of code if the condition is true  
- `if...else` → Runs one block if true, another if false  
- `if...else if...else` → Tests multiple conditions  
- `switch` → Runs one block of code from many options  
- `ternary (? :)` → Shorthand for `if...else`

---

## 🔹 When to Use Conditionals
- Use `if` to specify a code block to be executed if a condition is true  
- Use `else` to specify a code block to be executed if the condition is false  
- Use `else if` to test a new condition if the first one is false  
- Use `switch` to specify many alternative code blocks  
- Use `? :` (ternary) as a shorthand for simple `if...else`

---

## 📝 Syntax

```javascript
if (condition) {
    // Runs if condition is true
} else {
    // Runs if condition is false
}
You can also use else if for multiple conditions:

if (condition1) {
    // Runs if condition1 is true
} else if (condition2) {
    // Runs if condition2 is true
} else {
    // Runs if none are true
}

## 🚀 Mini Tasks

### ✅ Task 1: Number Check
Check if a number is equal to 10 or not.

### ✅ Task 2: Voting Eligibility
Check if a person is eligible to vote (age >= 18).

### ✅ Task 3: Positive, Negative, or Zero
Check if a number is positive, negative, or zero.
