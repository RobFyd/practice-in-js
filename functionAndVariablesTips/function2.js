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

// function in no name function( anonymous function )

{
  (() => {
    welcome2(); // Hello World :)

    console.log(variable2);

    function welcome2() {
      console.log("Hello World :D :D :D");
    }

    var variable2 = 100;
  })();
}
