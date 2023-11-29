// abbreviated notation

{
  const name = "Rob";
  const surname = "Soares";

  const person = {
    name,
    surname,
  };

  console.log(person);
}


// abbreviated notation: methods

{
  const person = {
    name: "Rob",
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
      document.querySelector(".js-hello").innerText = `hello! by ${this.name}`;
      document.querySelector(".js-spanHello").innerHTML = `
            <span class="hello__name">Nice to meet you. I am ${this.name}</span>
            `;
    },
  };

  person.sayHello();
}


// computed property names

{
  const currency = "EUR";

  const exchangeData = {
    USD: 3.6,
    [currency]: 4.2,
    GBP: 4.7,
  };

  console.log(exchangeData);
  document.querySelector(
    ".js-rates"
  ).innerText = `first rate: ${exchangeData.USD}\n second rate: ${exchangeData[currency]}\n third rate: ${exchangeData.GBP}`;
}


// destructuring

{
  const person = {
    name: "Rob",
    surname: "Soares",
    age: 32,
    color: "blue",
  };

  const { name, surname: lastName, city = "N/A", ...rest } = person;

  console.log(name, lastName, city, rest);
  document.querySelector(".js-details").innerText = `first detail: ${
    person.name
  }\n second detail: ${lastName}\n third detail: ${city}\n fourth detail: ${JSON.stringify(
    rest
  )}`; // JSON.stringify() converts a JavaScript object or value to a JSON string

  const getPersonFullName = ({ name, surname }) => `${name} ${surname}`;
  console.log(getPersonFullName(person));
  document.querySelector(".js-fullName").innerHTML = `
            <span>I am ${getPersonFullName(person)}!!!</span>
            `;
}


// destructuring in a nested object

{
  const person = {
    name: "John",
    surname: "Doe",
    father: {
      name: "Poter",
      surname: "Doe",
      age: 55,
    },
  };

  const {
    father: { name: fatherName },
  } = person;
  console.log(fatherName);

  document.querySelector(".js-fatherName").innerHTML = `
            <span>Nice to meet you. I am ${fatherName}</span>
            `;
}


// connecting objects

{
  cons = personBasicData = {
    name: "Robbie",
    surname: "Suades",
  };

  const personAditionalData = {
    age: 32,
    city: "Lisbon",
  };

  const allPersonData = {
    ...personBasicData,
    ...personAditionalData,
    gender: "male",
  };

  console.log(allPersonData);
  document.querySelector(".js-merging").innerText = `Data: ${JSON.stringify(
    allPersonData
  )}`;

  // to string

  let dataString = "Data as a string: ";
  for (let key in allPersonData) {
    if (allPersonData.hasOwnProperty(key)) {
      dataString += `${key}: ${allPersonData[key]}, `;
    }
  }

  // remove the last comma and spaces
  dataString = dataString.slice(0, -2);

  document.querySelector(".js-mergingToString").innerText = dataString;
}


// cloning

{
  const person = {
    name: "Bob",
    surname: "Loblaw",
    father: {
      name: "Poter",
      surname: "Loblaw",
    },
  };

  const personCopy = { ...person }; // spead syntax

  console.log(personCopy);
  document.querySelector(".js-cloning").innerText = `Cloning: ${JSON.stringify(
    personCopy
  )}`;

  console.log(person === personCopy); // false
  console.log(person.father === personCopy.father); // true
}


// for...in loop

{
  const person = {
    name: "Bobie",
    surname: "Awsome",
  };

  for (const property in person) {
    console.log(property);
    console.log(property, person[property]);
    console.log(`${property}: ${person[property]}`);
  }
}
