// Task 1: Change text of main title
const title = document.getElementById("main-title");
    title.textContent = "Hello from JavaScript!";

// Task 2: Style box using JS
const box = document.querySelector(".box");
    box.style.backgroundColor = "lightblue";
    box.style.padding = "20px";
    box.style.borderRadius = "8px";

// Task 4: Create & add a new paragraph dynamically
const newPara = document.createElement("p");
    newPara.textContent = "I was added dynamically!";
// Add it inside a container instead of body
    document.getElementById("dynamic-container").appendChild(newPara);

// Task 5: DOM Greeting App
const btn = document.getElementById("btn");
const greet = document.getElementById("greeting");

    btn.addEventListener("click", () => {
        greet.textContent = "Have a great day!";
        greet.style.color = "green";
});
