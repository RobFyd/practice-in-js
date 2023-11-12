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
