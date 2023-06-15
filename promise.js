// {
//   const logProducts = (products) => console.log(products);

//   const promise = fetch("products.json");

//   promise
//     .then((response) => response.json())
//     .then(logProducts)
//     .catch((error) => console.error("Something went wrong", error));
// }

{
  fetch("products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response;
    })

    .then((response) => response.json())

    .then((response) => console.log(response))

    .catch(() => console.error("Something went wrong"));
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
