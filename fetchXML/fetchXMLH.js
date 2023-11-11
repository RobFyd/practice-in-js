// XMLH - rather as a curiosity

{
  console.log("Loading 1:XMLH, 2:etch, 3:alternative fetch, 4:catch");

  const request = new XMLHttpRequest();

  request.open("GET", "products.json");

  request.responseType = "json";

  request.onload = () => {
    console.log(request.response);
  };

  request.send();
}

// fetch - replacement for XHR

{
  fetch("products.json").then((response) => {
    response.json().then((products) => {
      console.log(products);
    });
  });

  // const promise = fetch("products.json");

  // promise.then((response) => {
  //   response.json().then((products) => {
  //     console.log(products);
  //   });
  // });
}

{
  //  alternative fetch

  fetch("products.json")
    .then((response) => response.json()) // first promise
    .then((products) => console.log(products)); // second promise
}

{
  // catch - when something goes wrong

  fetch("https://thisdoesntexist")
    .then((response) => response.json()) // first promise
    .then((products) => console.log(products)) // second promise
    .catch((error) => {
      console.log("Something bad happened");
      console.error(error);
      alert("Something bad happened");
    });
}
