{
  const number1 = 25;
  const number2 = 10;
  let Result = "";

  if (number1 < number2) {
    Result = "number1 is smaller than number2";
  } else {
    Result = "number1 is not smaller than number2";
  }

  const resultElement = document.getElementById("result");

  resultElement.innerHTML = Result;
}

{
  const container = document.querySelector(".container");
  console.log(container);

  if (container.classList.contains("dark")) {
    container.style.backgroundColor = "darkslategrey";
  } else {
    container.style.backgroundColor = "lightgrey";
  }
}

{
  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    if (button.innerText === "Dark mode ON") {
      button.innerText = "Dark mode OFF";
    }
  });
}

{
  let number1 = 25;
  let number2 = 25;
  let Result = "";

  if (number1 <= number2) {
    Result = "number1 is smaller or equal to number2";
  } else {
    Result = "number1 is bigger than number2";
  }

  const resultElement = document.querySelector(".result2");

  resultElement.innerHTML = Result;
}

{
  let number1 = 25;
  let number2 = 25;
  let Result = "";

  if (number1 !== number2) {
    Result = "number1 is not equal to number2";
  } else {
    Result = "number1 is equal to number2";
  }

  const resultElement = document.querySelector(".result3");

  resultElement.innerHTML = Result;
}

{
  let someText = "";
  let Result;

  if (someText) {
    Result = "This is true";
  } else {
    Result = "This is false";
  }

  const resultElement = document.getElementById("text");

  resultElement.innerHTML = Result;
}

{
  let number1 = 20;
  let number2 = 40;
  let number3 = 30;

  if (number1 > number2) {
    if (number1 > number3) {
      console.log("number1 is the biggest");
    } else {
      console.log("number3 is the biggest");
    }
  } else {
    if (number2 > number3) {
      console.log("number2 is the biggest");
    } else {
      console.log("number3 is the biggest");
    }
  }
}
