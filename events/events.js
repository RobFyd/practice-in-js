// 1. method - bad practice

const hello = () => {
  console.log("hello");
};

// 2. method - good practice

const hello2 = () => {
  console.log("hello2");
};

const button = document.querySelector(".js-button");

button.onclick = hello2;

// 3. method - good practice, anonymous function

const button2 = document.querySelector(".js-button2");

button2.onclick = () => {
    console.log("hello3");
};

// 4. method - best practice, addEventListener

const button3 = document.querySelector(".js-button3");

button3.addEventListener("click", () => {
    console.log("hello4");
});