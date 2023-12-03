// destructuring

{
  const numbers = [10, 22, 33, 44];

  const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

  console.log(num2, num4, num5, rest);

  document.querySelector(".js-destructuring").innerText = `
    Show me num2: ${num2}, num4: ${num4}, num5: ${num5}, rest: ${rest} no rest!
  `;
}

// mergring arrays

{
  const numbers1 = [11, 22, 33];
  const numbers2 = [44, 55, 66];

  const allNumbers = [
    ...numbers1, // spread operator/syntax
    ...numbers2, // spread operator/syntax
    9898, // adding new element
  ];

  console.log(allNumbers);

  document.querySelector(".js-merging").innerText = `
        Show numbers from both arrays and extra number: ${allNumbers.join(", ")}
    `;
}

// cloning/copy arrays

{
  const numbers = [111, 222, 333];

  const numbersCopy = [...numbers]; // shaloow copy

  console.log(numbersCopy);

  document.querySelector(".js-copy").innerText = `
        Show numbers copy: ${numbersCopy.join(", ")}
  `;
}

// passing array elements as a function argument

{
  const numbers = [55, 44, 33, 22, 11];

  const minimum = Math.min(...numbers); // spread operator/syntax
  console.log(minimum);

  const maximum = Math.max(...numbers); // spread operator/syntax
  console.log(maximum);

  document.querySelector(".js-passing").innerText = `
            Show minimum: ${minimum}, and maximum: ${maximum}
        `;
}

// undefined number of function arguments

{
  const myFunction = (firstParameter, ...otherParameters) => {
    console.log(`First parameter: ${firstParameter}`);
    // First parameter: 120
    console.log(`Number of other parameters: ${otherParameters.length}`); // .length - number of elements in array
    // Number of other parameters: 8
  };

  myFunction(120, 220, 320, 420, 520, 620, 720, 820, 920);
}

// extrating array elements

{
  const seasons = ["winter", "spring", "summer", "autumn"];

  const last2Seasons = seasons.slice(2); // slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
  const middle2Seasons = seasons.slice(1, 3);
  const last3Seasons = seasons.slice(-3);
  const allButWithoutLast = seasons.slice(0, -1);

  console.log(last2Seasons);
  console.log(middle2Seasons);
  console.log(last3Seasons);
  console.log(allButWithoutLast);
}

// indexOf() and lastIndexOf() find element in array

{
  const letters = ["a", "b", "c", "d", 5, "a"];

  const indexOfC = letters.indexOf("c"); // indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
  console.log(indexOfC);

  const indexOfA = letters.indexOf("a");
  console.log(indexOfA);

  const lastIndexOfA = letters.lastIndexOf("a"); // lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
  console.log(lastIndexOfA);

  const lastIndexOf5 = letters.indexOf(5);
  console.log(lastIndexOf5);

  const indexOfZ = letters.indexOf("z"); // -1 if it is not present.
  console.log(indexOfZ);
}

// find

{
  const numbers = [-7, 0, 10, -6, 45];

  const firstPositiveNumber = numbers.find((number) => number > 0); // find() - returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

  console.log(firstPositiveNumber); // 10

  const firstgreaterThanTen = numbers.find((number) => number > 10);

  console.log(firstgreaterThanTen); // 0

  const firstEvenNumber = numbers.find((number) => number % 2 === 0);

  console.log(firstEvenNumber); // 0

  const firstOddNumber = numbers.find((number) => number % 2 !== 0);

  console.log(firstOddNumber); // -7

  const firstSmallerThanZero = numbers.find((number) => number < 0);

  console.log(firstSmallerThanZero); // -7
}

// find object in array, findIndex

const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

const findApple = fruits.find(({ name }) => name === "apple");

const firstPurpleFruit = fruits.find(({ color }) => color === "purple");

console.log(findApple); // { name: 'apple', color: 'red' }

console.log(firstPurpleFruit); // { name: 'grape', color: 'purple' }

const appleIndex = fruits.findIndex(({ name }) => name === "apple");

console.log(appleIndex); // 0

const firstPurpleFruitIndex = fruits.findIndex(
  ({ color }) => color === "purple"
);

console.log(firstPurpleFruitIndex); // 2

// includes

{
  const guests = ["John", "Peter", "Kate"];

  const isKateComing = guests.includes("Kate"); // includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  console.log(isKateComing); // true
}

// some, every

{
  const tasks = [
    { content: "Wash dishes", completed: false },
    { content: "Feed the cat", completed: true },
  ];

  const isAnyTaskDone = tasks.some(({ completed }) => completed);

  console.log(isAnyTaskDone); // true

  const isEveryTaskDone = tasks.every(({ completed }) => completed);

  console.log(isEveryTaskDone); // false

  const numbers = [1, 3, 5, 8];

  const isEven = (number) => number % 2 === 0;

  const isAnyNumberEven = numbers.some(isEven);

  console.log(isAnyNumberEven); // true

  const isEveryNumberEven = numbers.every(isEven);

  console.log(isEveryNumberEven); // false
}
