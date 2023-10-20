{
    let number1 = 25;
    let number2 = 10;
    let Result = "";

    if (number1 < number2) {
        Result = "number1 is smaller than number2";
    } else {
        Result = "number1 is not smaller than number2";
    }

    let resultElement = document.getElementById("result");

    resultElement.innerHTML = Result;
}

{
    let container = document.querySelector(".container");
    console.log(container);

    if(container.classList.contains("dark")) {
        container.style.backgroundColor = "darkslategrey";
    } else {
        container.style.backgroundColor = "lightgrey";
    }
}