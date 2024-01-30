console.log("Loading 1:XMLH, 2:fetch, 3:alternative fetch, 4:catch");

// 1: XMLH - rather as a curiosity

{
  const request = new XMLHttpRequest();

  request.open("GET", "products.json");

  request.responseType = "json"; // can be also 'text' or 'blob' or 'arraybuffer'

  request.onload = () => {
    console.log(request.response);
  };

  request.send();
}

// 2: fetch - replacement for XHR

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
  //  3: alternative fetch

  fetch("products.json")
    .then((response) => response.json()) // first promise
    .then((products) => console.log(products)); // second promise
}

{
  // 4: catch - when something goes wrong

  fetch("https://thisdoesntexist")
    .then((response) => response.json()) // first promise
    .then((products) => console.log(products)) // second promise
    .catch((error) => {
      console.log("Something bad happened");
      console.error(error);
      alert("Something bad happened");
    });
}
