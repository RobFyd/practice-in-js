// Promise - 1
{
  const logProducts = (products) => console.log(products, "1");

  const promise = fetch("products.json");

  promise
    .then((response) => response.json())
    .then(logProducts)
    .catch((error) => console.error("Something went wrong 1", error));
}

// fetch gave us a promise - 2
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

// {
//   // own promise

//   const promise = new Promise((resolve, reject) => {
//     resolve(result);
//     // or
//     reject("Something...");
//   });

//   promise.then();
// }

// setTimeout to Promise
{
  const wait = (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });

  wait(1000).then(() => {
    console.log("one second passed");
  });
}

//add reject
{
  const wait = (time) =>
    new Promise((resolve, reject) => {
      if (typeof time !== "number" || time < 0) {
        reject("incorrect time");
      }
      setTimeout(resolve, time);
    });

  wait(2000)
    .then(() => {
      console.log("two seconds passed");
    })
    .catch((error) => {
      console.error(error);
    });
}

// async function, await
{
  const getName = async () => "Bonifacy";

  (async () => {
    const name = await getName();
    console.log(name);
  })();
}

// simply fetch with async/await
{
  (async () => {
    const response = await fetch("products.json");
    const products = await response.json();
    console.log(products + "async/await");
  })();
}

//  fetch + async/await  + error handling
{
  (async () => {
    try {
      const response = await fetch("productss.json");

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const products = await response.json();
      console.log(products + "async/await");
    } catch (error) {
      console.error("Something wrong", error);
    }
  })();
}

//  with axios easier
{
  (async () => {
    try {
      const response = await axios.get("productsssss.json");
      console.log(response.data);
    } catch (error) {
      console.error("errorError", error);
    }
  })();
}
