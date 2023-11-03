const formElement = document.querySelector(".js-form");

const heightElement = document.querySelector(".js-height");
console.log(heightElement);
// console.log(heightElement.value);
// console.log(heightElement.type);
// console.log(heightElement.step);
// console.log(heightElement.classList);

heightElement.addEventListener("input", () => {
    console.log(`Yor height is ${heightElement.value}cm`);
});

const weightElement = document.querySelector(".js-weight");
weightElement.focus();
console.log(weightElement);

const radioElement1 = document.querySelector(".js-radio-1");
console.log(radioElement1);
const radioElement2 = document.querySelector(".js-radio-2");
console.log(radioElement2.checked = true);

const submitElement = document.querySelector(".js-submit");

formElement.addEventListener("reset", () => {
    console.log("Reset happens");
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submit done");
});