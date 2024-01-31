// import axios from "axios";
// instead import - cdn link for axios in .html

// get request
axios
  .get("products.json")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

// post request
axios
  .post("/add-person", {
    name: "Max",
    age: 28,
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
