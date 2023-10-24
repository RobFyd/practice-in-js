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
