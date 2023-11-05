//Functions

{
  function double(number) {
    return number * 2;
  }

  console.log(double(9));
}

// Syntax:

function name(parameter1, parameter2) {
    //instructions
    return value;
  }
  
  {
    function double(number) {
      return number * 2;
    }
  
    let myNumber = 55;
    let doubled = double(120);
  
    console.log(doubled);
    console.log(double(myNumber));
  }
  
  // Arrow functions
  
  {
    //   let double = (number) => {
    //       return number * 2;
    //   }                              //the same as below
      let double = number => number * 2;

      let myNumber = 33;

      console.log(double(myNumber));
  }

  // let - block scope (variable)
  // var - function scope (variable)
  // const - block scope (constant)
    