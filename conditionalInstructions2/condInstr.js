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


// if/else statement

let dayInputs = document.querySelectorAll(".day");
let howMuch = document.querySelector(".howMuch");

dayInputs.forEach((input) => {
  input.addEventListener("change", () => {
    let selectedValue = input.value;
    if (
      selectedValue === "monday" ||
      selectedValue === "tuesday" ||
      selectedValue === "wednaesday"
    ) {
      howMuch.innerText = "plenty of";
    } else if (selectedValue === "thursday" || selectedValue === "friday") {
      howMuch.innerText = "some";
    } else if (selectedValue === "saturday" || selectedValue === "sunday") {
      howMuch.innerText = "a little bit of";
    }
  });
});

// ternary operator

let dayInputs2 = document.querySelectorAll(".day2");
let howMuch2 = document.querySelector(".howMuch2");

dayInputs2.forEach((input) => {
  input.addEventListener("change", () => {
    let selectedValue = input.value;

    howMuch2.innerText =
      (selectedValue === "monday" || selectedValue === "tuesday" || selectedValue === "wednaesday")
        ? "plenty of"
        : (
          (selectedValue === "thursday" || selectedValue === "friday")
            ? "some"
            : "a little bit of"
        );
  });
});

// switch statement

let dayInputs3 = document.querySelectorAll(".day3");
let howMuch3 = document.querySelector(".howMuch3");

dayInputs3.forEach((input) => {
  input.addEventListener("change", () => {
    let selectedValue = input.value;

    switch (selectedValue) {
      case "monday":
      case "tuesday":
      case "wednaesday":
        howMuch3.innerText = "plenty of";
        break;

      case "thursday":
      case "friday":
        howMuch3.innerText = "some";
        break;

      default:
        howMuch3.innerText = "a little bit of";
    }
  });
});
