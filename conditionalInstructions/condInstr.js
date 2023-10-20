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
