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
        }
    }

    person.sayHello();
}