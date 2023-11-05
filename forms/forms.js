// function welcome() {
//   console.log("Hello world!");
// }
// welcome();

const welcome = () => {
  console.log("Hello world!");
}
welcome();

const onConsoleInput = () => {
  console.log(`Yor height is ${heightElement.value}cm`);
}

const bmiCalculate = (event) => {
  event.preventDefault();
  console.log("Submit done");

  const height = heightElement.value;
  const weight = weightElement.value;

   bmi = weight / (height / 100) ** 2;

  console.log(height, weight, bmi);

  bmiElement.innerText = bmi.toFixed(1);
}

const formElement = document.querySelector(".js-form");
const heightElement = document.querySelector(".js-height");
console.log(heightElement);
// console.log(heightElement.value);
// console.log(heightElement.type);
// console.log(heightElement.step);
// console.log(heightElement.classList);
const weightElement = document.querySelector(".js-weight");
weightElement.focus();
console.log(weightElement);
const submitElement = document.querySelector(".js-submit");
const bmiElement = document.querySelector(".js-bmi");

const radioElement1 = document.querySelector(".js-radio-1");
console.log(radioElement1);
const radioElement2 = document.querySelector(".js-radio-2");
console.log((radioElement2.checked = true));

formElement.addEventListener("reset", () => {
  console.log("Reset happens");
});


// formElement.addEventListener("input", (event) => {
//   console.log("Submit done");

//   let height = heightElement.value;
//   let weight = weightElement.value;

//   let bmi = weight / (height / 100) ** 2;

//   console.log(height, weight, bmi);

//   bmiElement.innerText = bmi.toFixed(1);
// });


if (5 > 8) {
  console.log("5 is greater than 3");
}
else {
  console.log("5 is not greater than 3");
}

function double(x) {
  return x * 2;
}

const myNumber = 55;

console.log(double(myNumber));


formElement.addEventListener("submit", bmiCalculate);
heightElement.addEventListener("input", onConsoleInput);