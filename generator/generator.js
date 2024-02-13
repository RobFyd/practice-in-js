{
  function* generator() {
    yield 5;
    yield "tekst";
    yield null;
    yield {type: "cosmetic", brand: "jhonson"}; //between yields you can give other expressions
    return "end of generator";
    yield {type: "soap", brand: "dove"}; //this will not be executed
  }

  const iterator = generator();

  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
}

{
  function* generator2() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return; //iterator ends here
    yield 6;
    yield 7;
    yield 8;
  }

  const iterator2 = generator2();

  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
  console.log(iterator2.next().value);
}

function* generator3(parameter) {
  console.log(parameter);
  yield 5;
  yield "tekst";
  yield null;
  yield {};
}

const iterator3 = generator3(100);

function* nextProductName(products) {
  for (product of products) {
    yield product.name;
  }
}

const generator4 = nextProductName([
  {
    name: "Audio",
    price: 299,
  },
  {
    name: "TV",
    price: 12999,
  },
]);

function* crazyGenerator() {
    const number = yield 5;
    const text = yield number * 5;
    yield text.repeat(5);
}

const generator5 = crazyGenerator();

console.log(generator5.next());
console.log(generator5.next(100));
console.log(generator5.next("Robi "));
