function* generator() {
    yield 5;
    yield "tekst";
    yield null;
    yield {};         //between yields you can give other expressions
}

const iterator  = generator();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

function* generator2() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return;  //iterator ends here
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