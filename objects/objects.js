{
// Object
// it consists of fields/properties and functions/methods

    const person = {
        name: 'Rob',
        surname: 'Soap',
        age: 31,
        sayHello: function () {
            console.log(`Hello! My name is ${this.name} ${this.surname} and I am ${this.age} years old.`);
            console.log("Hello! My name is " + this.name + " " + this.surname + " and I am " + this.age + " years old.")
        },
        getFullName: function () {
            return `${this.name} ${this.surname}`;
        }
    }
    console.log(person);
    console.log(person.name);
    console.log(person.surname);   // property
    console.log(person.age);
    console.log(person["name"], person.surname, person["age"]);
    const propertyName = "age";
    console.log(person[propertyName]);
    person.sayHello();            // method
    console.log(person.getFullName());


    // "this" refers to an object, arrow function does not have its own "this"

    const person2 = {
        name: 'Bobbie',
        surname: 'Galagan',
        age: 29,
        sayHello: () => {           // arrow function does not have its own "this"
            console.log(`Hello! My name is ${this.name} ${this.surname} and I am ${this.age} years old.`);
        },
        getFullName: function () {
            return `${this.name} ${this.surname}`;
        }
    }
    person2.sayHello();
    console.log(person2.getFullName());
}

// object in object

