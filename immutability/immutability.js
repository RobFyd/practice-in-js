// immutable change

const person = {
  name: "John",
  surname: "Doe",
};

const updatedPerson = {
  ...person,
  name: "Jane",
};

// adding properties to an object

const updatedPersonWithAge = {
  ...updatedPerson,
  age: 30,
};

// removing properties from an object

const person2 = {
  name: "Natasha",
  surname: "Koroleva",
  age: 50,
};

const { age, ...personWithoutAge } = person2;

// adding properties to an array - spread operator

const tasks = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
];

const tasksWithNewItem = [...tasks, { tittle: "Buy eggs", completed: false }];

// removing properties from an array - slice method

const tasks2 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
];

const removedIndex = 0;

const tasksWithRemovedSecondItem = [
  ...tasks2.slice(0, removedIndex),
  ...tasks2.slice(removedIndex + 1),
];

// removing properties from an array - filter method

const tasks3 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
];

const removedIndexx = 1;

const tasksWithRemovedSecondItemm = tasks3.filter(
  (task3, index) => index !== removedIndexx
);

// updating properties in an array - slice method

const tasks4 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy grain", completed: true },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
  { tittle: "Buy butter", completed: false },
  { tittle: "Buy cheese", completed: true },
];

const editIndex = 1;
const editIndex2 = 2;

const tasksWithUpdatedItem = [
  ...tasks4.slice(0, editIndex),
  { ...tasks4[editIndex], tittle: "coconut", completed: false },
  { ...tasks4[editIndex2], tittle: "banana", completed: false },
  ...tasks4.slice(editIndex2 + 1),
];

// updating properties in an array - map

const tasks5 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
];

const editIndexx = 1;

const tasksWithUpdatedItemm = tasks5.map((task5, index) =>
  index === editIndexx ? { ...task5, completed: false } : task5
);