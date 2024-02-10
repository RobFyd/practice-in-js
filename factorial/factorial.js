console.log("factorial.js loaded");

// factorial of "n" using recursive approach
n = 7;

const factorial = (n) => {
  // base case
  if (n === 0) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
};

console.log("n! = ", factorial(n));

// factorial of "m" using iterative approach
m = 6;

const factorialIterative = (m) => {
  let result = 1;
  for (let i = 1; i <= m; i++) {
    result *= i;
  }
  return result;
};

console.log("m! = ", factorialIterative(m));

// factorial of "o" using while loop
o = 5;

const fact3 = (o) => {
  let product = 1;
  while (o > 0) {
    product *= o;
    o--;
  }
    return product;
};

console.log("o! = ", fact3(o));