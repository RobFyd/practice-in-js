const button = document.querySelector(".button");
const body = document.querySelector(".body");

button.addEventListener("click", () => {
  body.classList.add("dark");
});
