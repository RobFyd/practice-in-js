{
  function getArea() {
    return this.width * this.height;
  }

  const rectangle1 = {
    width: 5,
    height: 6,
    getArea,
  };

  const rectangle2 = {
    width: 7,
    height: 12,
    getArea,
  };

  console.log(rectangle1);
  console.log(rectangle2);

  console.log(rectangle1.getArea());
  console.log(rectangle2.getArea());
}

// ****************************************************

{
  const getArea = ({ width, height }) => width * height;

  const rectangle1 = {
    width: 5,
    height: 6,
  };

  const rectangle2 = {
    width: 7,
    height: 12,
  };

  console.log(rectangle1);
  console.log(rectangle2);

  console.log(getArea(rectangle1));
  console.log(getArea(rectangle2));
}

// *****************js.classes*************************

{
  class Rectangle {
    // can be - const Rectangle = class {
    getArea() {
      return this.width * this.height;
    } // can be - getArea = () => this.width * this.height;
  }

  const rectangle1 = new Rectangle();

  rectangle1.width = 5;
  rectangle1.height = 6;

  const rectangle2 = new Rectangle();

  rectangle2.width = 7;
  rectangle2.height = 12;

  console.log(rectangle1);
  console.log(rectangle2);
  console.log(rectangle1.getArea());
  console.log(rectangle2.getArea());
}

// ******************with constructor*******************

{
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    getArea = () => this.width * this.height;
  }

  const rectangle1 = new Rectangle(5, 6);

  const rectangle2 = new Rectangle(7, 12);

  console.log(rectangle1);
  console.log(rectangle2);

  console.log(rectangle1.getArea());
  console.log(rectangle2.getArea());
}

// ******************with constructor2*******************

{
  class Rectangle {
    width;
    height;

    static edgesCount = 4;

    static totalArea = (...rectangles) => {
      let sum = 0;

      rectangles.forEach((rectangle) => (sum += rectangle.getArea()));

      return sum;
    };

    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    getArea = () => this.width * this.height;
  }
  const rectangle1 = new Rectangle(5, 6);

  const rectangle2 = new Rectangle(7, 12);

  console.log(rectangle1);
  console.log(rectangle2);

  console.log(rectangle1.getArea());
  console.log(rectangle2.getArea());

  console.log(Rectangle.edgesCount);

  console.log(Rectangle.totalArea(new Rectangle(1, 2), new Rectangle(2, 4)));
}

// ******************class expansion*********************

class Animal {
  name;

  constructor(name) {
    this.name = name;
  }

  makeNoise = () => console.log(`${this.name} makes a sound!`);
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeNoise = () => console.log(`${this.name} meows!`);
}

const animal = new Animal("Kitty");
const cat = new Cat("Britti");

animal.makeNoise();
cat.makeNoise();
