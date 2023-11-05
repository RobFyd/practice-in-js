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
  
  let double = (number) => number * 2;

  let myNumber = 33;

  console.log(double(myNumber));
}

            // const - block scope (constant)
            // let - block scope (variable)
            // var - function scope (variable)

{
  let zmienna = 510;
  console.log(zmienna);
}
// console.log(zmienna);

function myFunction() {
  var zmienna2 = 191;
  console.log(zmienna2);
}

myFunction();
// console.log(zmienna2);
