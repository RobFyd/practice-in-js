fetch("/add-person", {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Krzysiek",
    surname: "Dabrowskiki",
  }),
});

// axios - (for reakt - npm install axios)

axios
  .get("products.json")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));



