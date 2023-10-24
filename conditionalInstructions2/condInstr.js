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
