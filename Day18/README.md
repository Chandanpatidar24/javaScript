
---

# 🧠 Day 18 — JavaScript DOM Events

The **DOM Events** module helps you make your webpage **interactive**.
Events occur when a **user interacts** with the webpage — for example:
clicking a button, typing in an input box, or submitting a form.
Using JavaScript, you can **listen for these events** and **respond** to them dynamically.

---

## 🎯 What are Events?

An **event** is any action that happens in the browser:

| Example Action                   | Event Name  |
| -------------------------------- | ----------- |
| Clicking a button                | `click`     |
| Moving the mouse over an element | `mouseover` |
| Pressing a key                   | `keydown`   |
| Typing in a field                | `input`     |
| Submitting a form                | `submit`    |

Every event can trigger a **JavaScript function** (called an *event handler*).

---

## ⚙️ How to Handle Events

There are two main ways to handle events:

### 1. Inline Event (HTML Attribute)

```html
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello from Inline Event!");
  }
</script>
```

🟡 **Not recommended** for large projects — it mixes HTML and JS code.

---

### 2. Using `addEventListener()` ✅

This is the **modern and preferred method**.

```html
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", () => {
    alert("Button Clicked!");
  });
</script>
```

`addEventListener(eventType, callbackFunction)`

* **`eventType`** → name of the event (`"click"`, `"keydown"`, etc.)
* **`callbackFunction`** → function to run when the event happens

---

## 🧩 Event Object

Every event automatically passes an **event object** to the callback function.
It contains useful info about what happened — like which element triggered the event.

```js
btn.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});
```

---

## ⌨️ Keyboard Events

You can listen to when a key is pressed or released.

```html
<input type="text" id="textInput" placeholder="Type something...">

<script>
  const input = document.getElementById("textInput");

  input.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
  });
</script>
```

Common keyboard events:

* `keydown` → when a key is pressed
* `keyup` → when released
* `keypress` → (older, rarely used)

---

## 🧮 Mouse Events

| Event       | Description                      |
| ----------- | -------------------------------- |
| `click`     | When user clicks                 |
| `dblclick`  | Double-click                     |
| `mouseover` | When mouse enters an element     |
| `mouseout`  | When mouse leaves                |
| `mousemove` | When mouse moves over an element |

Example:

```html
<div id="box" style="width:150px; height:150px; background:lightgray;"></div>

<script>
  const box = document.getElementById("box");

  box.addEventListener("mouseover", () => {
    box.style.background = "lightblue";
  });

  box.addEventListener("mouseout", () => {
    box.style.background = "lightgray";
  });
</script>
```

---

## 📋 Form Events

Form events help handle user input and form submission.

```html
<form id="myForm">
  <input type="text" placeholder="Enter your name" required>
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents page reload
    alert("Form Submitted Successfully!");
  });
</script>
```

---

## 🧹 Removing Event Listeners

Sometimes you may need to stop listening for an event.

```js
function sayHi() {
  console.log("Hi!");
}

btn.addEventListener("click", sayHi);

// Remove later
btn.removeEventListener("click", sayHi);
```

---

## 🧠 Event Bubbling & Capturing (Intro)

When an event happens inside nested elements, it travels:

* **Down → Capturing phase**
* **Up → Bubbling phase (default)**

Example:

```html
<div id="outer">
  <button id="inner">Click</button>
</div>

<script>
  document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer clicked!");
  });

  document.getElementById("inner").addEventListener("click", () => {
    console.log("Inner clicked!");
  });
</script>
```

🟢 Output order (default):
`Inner clicked!` → `Outer clicked!`

---

## 💪 Practice Tasks

### 🧩 Task 1 — Click Event

Create a button that logs `"Button Clicked!"` when pressed.

---

### 🧩 Task 2 — Input Event

When the user types in an `<input>`, display the text live in a `<p>` below it.

---

### 🧩 Task 3 — Mouse Hover

Change the background color of a `<div>` when the mouse enters and leaves it.

---

### 🧩 Task 4 — Prevent Form Submission

Create a form and stop it from reloading the page using `e.preventDefault()`.

---


---

