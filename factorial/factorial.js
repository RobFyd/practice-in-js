console.log('factorial.js loaded');

// factorial of n
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

// factorial of m using iterative approach
m = 6;

const factorialIterative = (m) => {
    let result = 1;
    for (let i = 1; i <= m; i++) {
        result *= i;
    }
    return result;
};

console.log("m! = ", factorialIterative(m));