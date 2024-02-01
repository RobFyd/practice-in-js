// Promise - 1
{
  const logProducts = (products) => console.log(products, "1");

  const promise = fetch("products.json");

  promise
    .then((response) => response.json())
    .then(logProducts)
    .catch((error) => console.error("Something went wrong 1", error));
}

// better error handling for fetch, fetch gave us a promise - 2
{
  fetch("products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => console.log(response, "2"))
    .catch((error) => console.error("Something went wrong 2", error));
}

// own promise - example
// {
//   const promise = new Promise((resolve, reject) => {
//     resolve(result);
//     // or
//     reject("Something...");
//   });

//   promise.then();
// }

// setTimeout to Promise (own promise) - 3
{
  const wait = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });

  wait(1000).then(() => {
    console.log("one second passed - 3");
  });
}

// reject added - 4
{
  const wait = (time) =>
    new Promise((resolve, reject) => {
      if (typeof time !== "number" || time < 0) {
        reject("incorrect time - 4");
      }
      setTimeout(resolve, time);
    });

  wait(2000)
    .then(() => {
      console.log("two seconds passed - 4");
    })
    .catch((error) => {
      console.error(error);
    });
}

// async function - 5
{
  const getName = async () => "Bonifacy 5";
  getName().then(console.log);
}

// async/await function - 6
{
  const getName = async () => "Caterine 6";

  (async () => {
    const name = await getName();
    console.log(name);
  })();
}

// simply fetch with async/await - 7
{
  (async () => {
    const response = await fetch("products.json");
    const products = await response.json();
    console.log(products + "async/await", "7");
  })();
}

//  fetch + async/await + error handling - 8
{
  (async () => {
    try {
      const response = await fetch("products.json");

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const products = await response.json();
      console.log(products + "async/await", "8");
    } catch (error) {
      console.error("Something wrong 8", error);
    }
  })();
}

//  async/await with axios easier - 9
{
  (async () => {
    try {
      const response = await axios.get("products.json");
      console.log(response.data, "9");
    } catch (error) {
      console.error("error 9", error);
    }
  })();
}
