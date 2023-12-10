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

// removing properties from an array - slice

const tasks2 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
];

const removedIndex = 1;

const tasksWithRemovedSecondItem = [
  ...tasks2.slice(0, removedIndex),
  ...tasks2.slice(removedIndex + 1),
];

// removing properties from an array - filter

const tasks3 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
];

const removedIndexx = 1;

const tasksWithRemovedSecondItemm = tasks3.filter(
  (task3, index) => index !== removedIndexx
);

// updating properties in an array - slice

const tasks4 = [
  { tittle: "Buy milk", completed: false },
  { tittle: "Buy bread", completed: true },
  { tittle: "Buy eggs", completed: false },
];

const editIndex = 1;

const tasksWithUpdatedItem = [
  ...tasks2.slice(0, editIndex),
  { ...tasks2[editIndex], completed: false },
  ...tasks2.slice(editIndex + 1),
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