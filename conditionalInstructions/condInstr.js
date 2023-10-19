{
    let number1 = 5;
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