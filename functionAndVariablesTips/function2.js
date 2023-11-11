{
  const myFunction = () => {
    console.log("Hello World");
  };

  myFunction();
  console.log(typeof myFunction); // function
  console.log(typeof myFunction === "function"); // true
}

{
  // hoisting

  myFunction(); // Hello World :)

  console.log(variable);

  function myFunction() {
    console.log("Hello World :)");
  }

  var variable; // undefined
}
