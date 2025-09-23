# Day 6 - JavaScript Switch Case

This project demonstrates the use of the **`switch` statement** in JavaScript. The switch statement is used to perform different actions based on different conditions. It is often a more readable alternative to multiple `if...else if...else` statements, especially when dealing with multiple possible values.


## Overview
A **switch statement** executes the code block that matches an expression. If no case matches, the `default` block (if provided) is executed.


## Syntax

switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}


## How It Works

* The **switch expression** is evaluated once.
* The value of the expression is compared with the value of each `case`.
* If a match is found, the associated block of code is executed.
* If no match is found, the `default` block is executed (optional).
* `break` prevents **fall-through** to the next case.


## Examples

Switch statements are useful for handling **multiple possible values** of a variable. For example:

* Selecting a **day of the week** based on a number.
* Performing different actions based on **user input or menu choices**.
* Handling **status codes or types** in a program.



## Mini Quiz

**Task:**
Create a **daily planner** using a `switch` statement. Your program should print an activity for each day of the week. Include a `default` case to handle invalid input.

**Example activities to include:**

* Monday: Go to the gym
* Tuesday: Attend coding class
* Wednesday: Work on project
* Thursday: Meet friends
* Friday: Watch a movie
* Saturday: Relax at home
* Sunday: Family time




