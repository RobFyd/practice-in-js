// if/else statement

const button = document.querySelector(".button");
const container = document.querySelector(".container");
let themeMode = document.querySelector(".themeMode");

// toggle: if the class is there, remove it, if not, add it
// add:  remove: if the class is there, remove it, if not, do nothing

button.addEventListener("click", () => {
  container.classList.toggle("dark");

  if (container.classList.contains("dark")) {
    themeMode.innerText = "OFF";
  } else {
    themeMode.innerText = "ON";
  }
});


//ternary operator

const button2 = document.querySelector(".button2");
const container2 = document.querySelector(".container2");
let themeMode2 = document.querySelector(".themeMode2");

button2.addEventListener("click", () => {
  container2.classList.toggle("dark");

  themeMode2.innerText = container2.classList.contains("dark") ? "OFF" : "ON";
});


// switch statement

const button3 = document.querySelector(".button3");
const container3 = document.querySelector(".container3");
let themeMode3 = document.querySelector(".themeMode3");

button3.addEventListener("click", () => {
  container3.classList.toggle("dark");

  switch (container3.classList.contains("dark")) {
    case true:
      themeMode3.innerText = "OFF";
      break;
    case false:
      themeMode3.innerText = "ON";
      break;
  }
});


let dayInputs = document.querySelectorAll(".day");
let howMuch = document.querySelector(".howMuch");

dayInputs.forEach(input => {
  input.addEventListener("change", () => {
      let selectedValue = input.value;
      if (selectedValue === "monday") {
          howMuch.textContent = "10%";
      } else if (selectedValue === "tuesday") {
          howMuch.textContent = "20%";
      } else if (selectedValue === "wednesday") {
          howMuch.textContent = "30%";
      } else if (selectedValue === "thursday") {
          howMuch.textContent = "40%";
      } else if (selectedValue === "friday") {
          howMuch.textContent = "50%";
      } else if (selectedValue === "saturday") {
          howMuch.textContent = "60%";
      } else if (selectedValue === "sunday") {
          howMuch.textContent = "70%";
      } else {
          howMuch.textContent = "plenty";
      }
  });
});