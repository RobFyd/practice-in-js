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
