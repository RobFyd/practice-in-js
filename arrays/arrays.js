// arays are used to store multiple values in a single variable

{
  const products = ["eggs", "milk", "butter", "bread", "cheese"];

  console.log(products[0]);
  console.log(products[1]);
  console.log(products[2]);
  console.log(products[3]);
  console.log(products[4]);

  products[2] = "cucumber";
  console.log(products);

  console.log(products.length);
}

// converting array to string - toString() and join()

{
    const products = ["eggs", "milk", "butter", "bread", "cheese"];

    console.log(products.toString());
    console.log(products.join(" - "));
    console.log(products.join(" 😀 "))
}

// converting string to array - split()

{
    const products = "eggs, milk, butter";

    console.log(products.split(", "));
    console.log(products.split(" "));
    console.log(products.split("e"));
    console.log(products.split(""));
}

// adding elements to end of array - push()

{
    const products = ["eggs", "milk", "butter", "bread", "cheese"];

    products.push("tomato", "potato");
    console.log(products);
}

// removing elements from end of array - pop()

{
    const products = ["eggs", "milk", "butter", "bread", "cheese"];

    products.pop();
    console.log(products);
}

// adding elements to beginning of array - unshift()

{
    const products = ["eggs", "milk", "butter", "bread", "cheese"];

    products.unshift("tomato", "potato");
    console.log(products);
}

// removing elements from beginning of array - shift()

{
    const products = ["eggs", "milk", "butter", "bread", "cheese"];

    products.shift();
    console.log(products);
}