{
// Oject
// it consists of fields/properties and functions/methods

    const person = {
        name: 'Rob',
        surname: 'Soap',
        age: 31,
        sayHello: function() {
            console.log(`Hello! My name is ${this.name} ${this.surname} and I am ${this.age} years old.`);
            console.log("Hello! My name is " + this.name + " " + this.surname + " and I am " + this.age + " years old.")
        }
    }
    console.log(person);
    console.log(person.name);
    console.log(person.surname);
    console.log(person["age"]);
    console.log(person.name, person.surname, person["age"]);
    person.sayHello();
}