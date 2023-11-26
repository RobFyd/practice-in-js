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
    document.querySelector(".js-rates").innerText = `first rate: ${exchangeData.USD}\n second rate: ${exchangeData[currency]}\n third rate: ${exchangeData.GBP}`;
}
