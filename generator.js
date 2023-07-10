function* generator() {
    yield 5;
    yield "tekst";
    yield null;
    yield {};         //between yields you can give other expressions
}

const iterator  = generator();