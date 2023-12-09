// destructuring, rest parameter - [...rest]

{
  const numbers = [10, 22, 33, 44];

  const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

  console.log(num2, num4, num5, rest);

  document.querySelector(".js-destructuring").innerText = `
    Show me\n num2: ${num2}\n num4: ${num4}\n num5: ${num5}\n rest: ${rest} no rest!
  `;
}

{
  // practise2

  const exceptFirst = ([first, ...rest]) => rest;

  const arr = [2, "delfin", null];

  const result = exceptFirst(arr);

  console.log("practise2", result); // [ 'delfin', null ]
}

// mergring arrays - spread operator/syntax [...x]

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

{
  // practise1

  const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

  const arr1 = [2, 5];
  const arr2 = [3, 7];
  const result = mergeArrays(arr1, arr2);

  console.log("practise1", result); // [ 2, 5, 3, 7 ]
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

{
  // practise3

  const last2Params = (arr) => arr.slice(-2);

  const arr = [1, 3, undefined, true];

  const result = last2Params(arr);

  console.log("practise3", result); // [ undefined, true ]
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

{
  // practise4

  indexOf = (element, arr) => arr.indexOf(element);

  const arr = ["rum", "coffe", "tea"];
  const element = "coffe";

  console.log("practise4", indexOf(element, arr)); // 1
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

{
  // practise5

  const findNonEmptyTask = (tasks) => tasks.find(({ content }) => content);

  const tasks = [{ content: "" }, { content: "Feed the cat" }];

  console.log("practise5", findNonEmptyTask(tasks)); // { content: 'Feed the cat' }
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

{
  // practise6

  const oddIndex = (numbers) => numbers.findIndex((el) => el % 2 !== 0);

  const numbers = [2, 4, 7, 8];

  console.log("practise6", oddIndex(numbers)); // 2
}

// includes

{
  const guests = ["John", "Peter", "Kate"];

  const isKateComing = guests.includes("Kate"); // includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  console.log(isKateComing); // true
}

{
  // practise7

  const hasStrawberry = (fruits) => fruits.includes("strawberry");

  const fruits = ["banana", "marakuja"];

  console.log("practise7", hasStrawberry(fruits)); // false
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

{
  // practise8

  const someAdult = (people) => people.some(({ age }) => age >= 18);

  const people = [
    { name: "Melodia", age: 15 },
    { name: "Kosmo", age: 19 },
  ];

  console.log("practise8", someAdult(people)); // true
}

{
  // practise9

  const onlyString = (arr) =>
    arr.every(({ element }) => typeof element === "string");

  const arr = [{ element: "" }, { element: "iron" }];

  console.log("practise9", onlyString(arr)); // true
}

// filter

{
  const numbers = [1, 8, 22, 45, 67, 88];

  const isEven = (number) => number % 2 === 0;

  const isOdd = (number) => number % 2 !== 0;

  const evenNumbers = numbers.filter(isEven); // filter() - creates a new array with all elements that pass the test implemented by the provided function.

  console.log(evenNumbers); // [ 8, 22, 88 ]

  const oddNumbers = numbers.filter(isOdd);

  console.log(oddNumbers); // [ 1, 45, 67 ]

  const tasks = [
    { content: "Wash dishes", completed: false },
    { content: "Feed the cat", completed: true },
  ];

  const isUndone = ({ completed }) => !completed;

  const tasksUndone = tasks.filter(isUndone);

  console.log(tasksUndone); // [ { content: 'Wash dishes', completed: false } ]
}

{
  // practise10

  const filterPremium = (carBrands) => {
    const premiumBrands = ["Audi", "BMW", "Mercedes"];

    return carBrands.filter((brand) => premiumBrands.includes(brand));
  };

  const carBrands = ["Peugeot", "Audi", "BMW"];
  console.log("practise10", filterPremium(carBrands)); // [ 'Audi', 'BMW' ]
}

// map

{
  const numbers = [1, 5, 9];

  const double = (number) => number * 2;
  const triple = (number) => number * 3;

  const doubledNumbers = numbers.map(double); // map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
  const tripledNumbers = numbers.map(triple);

  document.querySelector(".js-doubled").innerText = `
        Numbers: ${numbers.join(", ")}\n Doubled numbers: ${doubledNumbers.join(
    ", "
  )}\n Triple: ${tripledNumbers.join(", ")}
  `;

  const workers = [
    { name: "John", position: "developer" },
    { name: "Kate", position: "manager" },
    { name: "Mike", position: "designer" },
  ];

  const positions = workers.map((worker) => worker.position);

  console.log(positions); // [ 'developer', 'manager' ]

  const getFullDetails = ({ name, position }) => `${name} - ${position}`;

  document.querySelector(".js-workers").innerText = `
        Workers:\n ${workers.map(getFullDetails).join(", \n")}
  `;

  const workersAsListItems = workers.map(
    (worker) => `
  <li>
  ${getFullDetails(worker)}
  </li>
  `
  );

  console.log(workersAsListItems.join(""));

  document.querySelector(".js-workersList").innerHTML =
    workersAsListItems.join("");
}

{
  // practise11

  const getColors = (cars) => cars.map(({ color }) => color);

  const cars = [
    {car: "BMW X5", color: "black"},
    {car: "Peaugot 3008", color: "white"},
  ]

  console.log("practise11", getColors(cars)); // [ 'black', 'white' ]
}

// sorting arrays - usually not used

{
  const strings = ["B", "b", 10, 2];

  strings.sort();

  console.log(strings); // [ 10, 2, 'B', 'b' ]
}

// sorting numbers

{
  const numbers = [40, 8, 1, 0];

  numbers.sort((a, b) => a - b); // sort() - sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
  console.log(numbers);

  numbers.sort((a, b) => b - a);
  console.log(numbers);
}

// sorting strings

{
  const names = ["Kate", "John", "Mike", "Denise"];

  names.sort((a, b) => a.localeCompare(b));
  console.log(names);

  names.sort((a, b) => b.localeCompare(a));
  console.log(names);
}

// sorting objects

{
  const workers = [
    { name: "John", surname: "Conoly", salary: 2000 },
    { name: "Mike", surname: "Nabu", salary: 3000 },
    { name: "Kate", surname: "Loboi", salary: 2500 },
  ];

  workers.sort((a, b) => a.salary - b.salary);
  console.log(workers);

  workers.sort((a, b) => b.salary - a.salary);
  console.log(workers);

  const getFullName = ({ name, surname }) => `${name} ${surname}`;

  workers.sort((a, b) => getFullName(a).localeCompare(getFullName(b)));

  console.log(workers);
}

// reverse

{
  const numbers = [1, 2, 3];

  numbers.reverse(); // reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
  console.log(numbers); // [ 3, 2, 1 ]
}

// reduce

{
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((acc, number) => acc + number, 0); // reduce() - executes a reducer function (that you provide) on each element of the array, resulting in single output value.
  console.log(sum); // 15

  const strings = ["a", "b", "c", "d"];

  const result = strings.reduce((acc, string) => acc + string, "");
  console.log(result); // abcd

  const workers = [
    { name: "John", salary: 2000 },
    { name: "Mike", salary: 3000 },
    { name: "Kate", salary: 2500 },
  ];

  const totalSalary = workers.reduce((acc, worker) => acc + worker.salary, 0);

  console.log(totalSalary); // 7500

  const workersAsHtml = workers.reduce(
    (acc, worker) => acc + `<li>${worker.name}</li>`,
    ""
  );

  console.log(workersAsHtml);

  document.querySelector(".js-workersList2").innerHTML = workersAsHtml;
}
