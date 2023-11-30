// destructuring

{
  const numbers = [10, 22, 33, 44];

  const [num1, num2, , num4, num5 = 0, ...rest] = numbers;

  console.log(num2, num4, num5, rest);

  document.querySelector(".js-destructuring").innerText = `
    Show me num2: ${num2}, num4: ${num4}, num5: ${num5}, rest: ${rest} no rest!
  `;
}

// mergring arrays

{
  const numbers1 = [11, 22, 33];
  const numbers2 = [44, 55, 66];

  const allNumbers = [
    ...numbers1, // spread operator/syntax
    ...numbers2, // spread operator/syntax
    9898, // adding new element
  ];

  console.log(allNumbers);

  document.querySelector(".js-merging").innerText = `
        Show numbers from both arrays and extra number: ${allNumbers.join(", ")}
    `;
}

// cloning/copy arrays

{
  const numbers = [111, 222, 333];

  const numbersCopy = [...numbers]; // shaloow copy

  console.log(numbersCopy);

  document.querySelector(".js-copy").innerText = `
        Show numbers copy: ${numbersCopy.join(", ")}
  `;
}

// passing array elements as a function argument

{
  const numbers = [55, 44, 33, 22, 11];

  const minimum = Math.min(...numbers); // spread operator/syntax
  console.log(minimum);

  const maximum = Math.max(...numbers); // spread operator/syntax
  console.log(maximum);

  document.querySelector(".js-passing").innerText = `
            Show minimum: ${minimum}, and maximum: ${maximum}
        `;
}

// undefined number of function arguments

{
  const myFunction = (firstParameter, ...otherParameters) => {
    console.log(`First parameter: ${firstParameter}`);
    // First parameter: 120
    console.log(`Number of other parameters: ${otherParameters.length}`); // .length - number of elements in array
    // Number of other parameters: 8
  };

  myFunction(120, 220, 320, 420, 520, 620, 720, 820, 920);
}

// extrating array elements

{
  const seasons = ["winter", "spring", "summer", "autumn"];

  const last2Seasons = seasons.slice(2); // slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
  const middle2Seasons = seasons.slice(1, 3); 
  const last3Seasons = seasons.slice(-3); 
  const allButWithoutLast = seasons.slice(0, -1);

  console.log(last2Seasons);
  console.log(middle2Seasons);
  console.log(last3Seasons);
  console.log(allButWithoutLast);
}
