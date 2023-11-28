
// destructuring

const numbers = [10, 22, 33, 44];

const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

console.log(num2, num4, num5, rest);