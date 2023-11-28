// destructuring

{
  const numbers = [10, 22, 33, 44];

  const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

  console.log(num2, num4, num5, rest);
}

// mergring arrays

{
  const numbers1 = [11, 22, 33];
  const numbers2 = [44, 55, 66];

  const allNumbers = [
    ...numbers1,            // spread operator/syntax
    ...numbers2,            // spread operator/syntax
    9898,                   // adding new element
  ];

  console.log(allNumbers);
}

// cloning/copy arrays

{
const numbers = [111, 222, 333];

const numbersCopy = [...numbers];

console.log(numbersCopy);
}
