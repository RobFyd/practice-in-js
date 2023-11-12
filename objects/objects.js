{
  // Object
  // it consists of fields/properties and functions/methods

  const person = {
    name: "Rob",
    surname: "Soap",
    age: 31,
    sayHello: function () {
      console.log(
        `Hello! My name is ${this.name} ${this.surname} and I am ${this.age} years old.`
      );
      console.log(
        "Hello! My name is " +
          this.name +
          " " +
          this.surname +
          " and I am " +
          this.age +
          " years old."
      );
    },
    getFullName: function () {
      return `${this.name} ${this.surname}`;
    },
  };
  console.log(person);
  console.log(person.name);
  console.log(person.surname); // property
  console.log(person.age);
  console.log(person["name"], person.surname, person["age"]);
  const propertyName = "age";
  console.log(person[propertyName]);
  person.sayHello(); // method
  console.log(person.getFullName());

  // "this" refers to an object, arrow function does not have its own "this"

  const person2 = {
    name: "Bobbie",
    surname: "Galagan",
    age: 29,
    sayHello: () => {
      // arrow function does not have its own "this"
      console.log(
        `Hello! My name is ${this.name} ${this.surname} and I am ${this.age} years old.`
      );
    },
    getFullName: function () {
      return `${this.name} ${this.surname}`;
    },
  };
  person2.sayHello();
  console.log(person2.getFullName());
}

// object in object

{
  const person3 = {
    name: "Robbie",
    surname: "Sorrow",
    age: 34,
    address: {
      street: "Main Street",
      number: 123,
      city: "London",
      country: "UK",
    },
  };
  console.log(person3.name);
  console.log(person3.address);
  console.log(person3.address.street);
  console.log(person3.address.number);
}

// objects to functions are passed by reference

{
  const changePersonName = (person4) => {
    person4.name = "Eric";
  };

  const init = () => {
    const person4 = {
      name: "John",
      surname: "Doe",
    };

    changePersonName(person4);

    console.log(person4.name);
  };

  init();
}
