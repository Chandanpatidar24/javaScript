//Task 1
    
    const clickBtn = document.getElementById("clickBtn");
    const clickMessage = document.getElementById("clickMessage");

    clickBtn.addEventListener('click', () =>{
        clickMessage.textContent = 'Button Clicked !'
    })



// Task 2
    const liveInput = document.getElementById("liveInput");
    const liveOutput = document.getElementById("liveOutput");

    liveInput.addEventListener("input" , () =>{
        const text = liveInput.value;

        liveOutput.textContent = text ? text : "Live Text";  
    });


//Task 3

    const hover = document.getElementById("hoverBox");

    hover.addEventListener("mouseover", ()=>{
        hover.style.background = "red";
        hover.textContent = " you Hover"
    })

    hover.addEventListener("mouseout", ()=>{
        hover.style.background = 'lightgray';
        hover.textContent = "Hover me!";

    })

    
// Task 4
    
 const form = document.getElementById("sampleForm");
 const formMessage = document.getElementById("formMessage"); 
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop page reload
      const name = document.getElementById("nameField").value.trim();

      if (name) {
        formMessage.textContent = `Hello, ${name}! Your form was submitted successfully ✅`;
        formMessage.style.color = "green";
      } else {
        formMessage.textContent = "⚠️ Please enter your name before submitting.";
        formMessage.style.color = "red";
      }

      form.reset();
    });