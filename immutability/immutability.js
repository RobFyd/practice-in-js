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

// adding properties to an array

const tasks = [
    { tittle: "Buy milk", completed: false },
    { tittle: "Buy bread", completed: true },
];

const tasksWithNewItem = [
    ...tasks,
    { tittle: "Buy eggs", completed: false },
];

