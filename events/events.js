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

// 5. event.target

const button4 = document.querySelector(".js-button4");

const hello3 = (event) => {
  console.log(event.target);
  console.log("hello5");
};

button4.addEventListener("click", hello3);

// 6. event.target fo few elements

const buttons = document.querySelectorAll(".js-buttons");

const hello4 = (event) => {
  const name = event.target.innerText;
  console.log(`hello ${name} !!!`);
};

for (const button of buttons) {
  button.addEventListener("click", hello4);
}

// 7. event bubbling/delegation

const section = document.querySelector(".js-section");

const hello5 = (event) => {
  const name = event.target.innerText;
  console.log(`YO ${name} !!!`);
};

section.addEventListener("click", hello5);
