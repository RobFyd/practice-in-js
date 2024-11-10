const people = [
  { name: "John", lastName: "Doe", country: "USA", salary: 1000 },
  { name: "Jane", lastName: "Jab", country: "UK", salary: 2000 },
  { name: "Ivan", lastName: "Ivanov", country: "RU", salary: 3000 },
  { name: "Elain", lastName: "Ford", country: "USA", salary: 4000 },
  { name: "Robert", lastName: "Sydrych", country: "PL", salary: 5000 },
  { name: "Stefania", lastName: "Kowalski", country: "PL", salary: 6000 },
  { name: "Lee", lastName: "Chin", country: "CN", salary: 7000 },
  { name: "Mao", lastName: "Zedong", country: "CN", salary: 8000 },
  { name: "Vladimira", lastName: "Srutin", country: "RU", salary: 9000 },
  { name: "Edward", lastName: "Snowden", country: "UK", salary: 10000 },
];

const logPersonInfo = (person, index, arr) => {
  console.log(
    `${index + 1} in ${arr.length} ${person.name} ${person.lastName} from ${
      person.country
    } earns ${person.salary}`
  );
};

console.log("###");
console.log(".forEach");
console.log("###");
//forEach

people.forEach(logPersonInfo);

console.log("###");
console.log(".filter");
console.log("###");
//filter

const richPeople = people.filter((person) => person.salary > 5000);
console.log(richPeople);

const polishPeople = people.filter((person) => person.country === "PL");
console.log(polishPeople);
