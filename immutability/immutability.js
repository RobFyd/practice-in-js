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

const tasksWithNewItem = [
    ...tasks,
    { tittle: "Buy eggs", completed: false },
];

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