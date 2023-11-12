{
  const myFunction = () => {
    console.log("Hello World");
  };

  myFunction();
  console.log(typeof myFunction); // function
  console.log(typeof myFunction === "function"); // true
}

{
  // hoisting ( var and no arrow function )

  welcome(); // Hello World :)

  console.log(variable);

  function welcome() {
    console.log("Hello World :)");
  }

  var variable = 100; // undefined
}

{
  // function in no name function( anonymous function )

  (() => {
    welcome2(); // Hello World :)

    console.log(variable2);

    function welcome2() {
      console.log("Hello World :D :D :D");
    }

    var variable2 = 100;
  })();
}

{
  var variable3 = 100;

  var variable3 = 200;

  console.log(variable3); // 200
}

{
  let result;

  result = 20;

  var myVariable;

  myVariable = "text";

  // const myConst; error // must be initialized
}

{
// several variables in one

  let a = 3,
    b = 6,
    c = 9;
  console.log(a, b, c);

  const newDiv = document.createElement("div");
  newDiv.textContent = `${b}, ${c}`; //or newDiv.textContent = b + ", " + c;
  document.body.appendChild(newDiv);

  const number = 5;
  string = "text";
  console.log(number, string);
}

{
// default function parameters 

  let power = (a, b = 1) => a ** b;
  console.log(power(3, 3));
  console.log(power(3));
}

{
  // recursion - a function calls itself (rekurencja), (factorial - silnia)

  let factorial = (number) => {
    if (!number) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  };

  console.log(factorial(3));
}