
---

#  JavaScript DOM Basics

The **DOM (Document Object Model)** is a programming interface that allows JavaScript to **interact with HTML and CSS**.

It represents your webpage as a **tree structure** — where each HTML element is a **node** that can be accessed and modified using JavaScript.

---

##  What is the DOM?

The **DOM** converts your webpage into an **object-like structure** that JavaScript can use to:

* Read and update elements
* Change styles and attributes
* Respond to user actions (like clicks or typing)
* Dynamically add or remove content

Example structure:

```html
<html>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my page!</p>
  </body>
</html>
```

JavaScript sees this as a tree:

```
Document
 └── html
      └── body
           ├── h1
           └── p
```

---

##  Accessing the DOM

The root of all DOM access is the **`document`** object.

### Example:

```js
console.log(document.title);
console.log(document.body);
```

---

##  Selecting Elements

You can select HTML elements in several ways:

| Method                     | Description                                           | Example                                   |
| -------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| `getElementById()`         | Selects an element by its **ID**                      | `document.getElementById("title")`        |
| `getElementsByClassName()` | Selects elements by **class name**                    | `document.getElementsByClassName("item")` |
| `getElementsByTagName()`   | Selects elements by **tag** (like `div`, `p`)         | `document.getElementsByTagName("p")`      |
| `querySelector()`          | Selects **first matching** element using CSS selector | `document.querySelector(".box")`          |
| `querySelectorAll()`       | Selects **all matching** elements                     | `document.querySelectorAll(".list-item")` |

Example:

```html
<h1 id="title">Hello DOM!</h1>
<p class="text">Learning DOM is fun.</p>
```

```js
const heading = document.getElementById("title");
const paragraph = document.querySelector(".text");
console.log(heading.textContent);
console.log(paragraph.textContent);
```

---

##  Changing Content

You can modify text or HTML inside elements.

| Property      | Description                                | Example                                   |
| ------------- | ------------------------------------------ | ----------------------------------------- |
| `textContent` | Changes only the text                      | `element.textContent = "New Text";`       |
| `innerHTML`   | Changes the HTML content inside an element | `element.innerHTML = "<b>Bold Text</b>";` |

Example:

```js
const heading = document.getElementById("title");
heading.textContent = "DOM Updated!";
```

---

##  Changing Styles

You can modify element styles using the `.style` property.

Example:

```js
const heading = document.getElementById("title");
heading.style.color = "blue";
heading.style.fontSize = "28px";
```

You can also add or remove CSS classes dynamically:

```js
heading.classList.add("highlight");
heading.classList.remove("hidden");
heading.classList.toggle("active");
```

---

##  Changing Attributes

Use `.setAttribute()` and `.getAttribute()` to change or read HTML attributes.

Example:

```html
<img id="myImage" src="old.png" alt="Old Image">
```

```js
const img = document.getElementById("myImage");
img.setAttribute("src", "new.png");
console.log(img.getAttribute("alt"));
```

---

##  Creating and Removing Elements

You can create new HTML elements dynamically!

Example:

```js
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was created using JS!";
document.body.appendChild(newPara);
```

To remove an element:

```js
newPara.remove();
```

---

##  DOM Tree Navigation

You can also move around the DOM tree.

| Property                 | Description                        | Example                          |
| ------------------------ | ---------------------------------- | -------------------------------- |
| `parentElement`          | Gets the parent node               | `element.parentElement`          |
| `children`               | Gets child elements                | `element.children`               |
| `firstElementChild`      | First child element                | `element.firstElementChild`      |
| `lastElementChild`       | Last child element                 | `element.lastElementChild`       |
| `nextElementSibling`     | Next element at the same level     | `element.nextElementSibling`     |
| `previousElementSibling` | Previous element at the same level | `element.previousElementSibling` |

---

##  Mini Tasks (DOM Practice)

###  Task 1: Change Text

Change the text of an `<h2>` element with the ID `"main-title"` to say `"Hello from JavaScript!"`.

---

###  Task 2: Style an Element

Change the background color of a `<div>` with the class `"box"` to **lightblue** using JS

---

###  Task 3: Update an Image

Change the `src` of an `<img>` tag (ID: `"photo"`) from `"old.jpg"` to `"new.jpg"`.

---

###  Task 4: Create & Add Element

Create a new `<p>` element that says `"I was added dynamically!"` and add it to the document body.

---

###  Task 5: Mini Project — “DOM Greeting App”

Create a small webpage with:

```html
<h2 id="greeting">Welcome!</h2>
<button id="btn">Change Greeting</button>
```

When you click the button, change the text inside `<h2>` to `"Have a great day!"`.


---
