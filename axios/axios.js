// import axios from "axios";
// instead import - cdn link for axios in .html

axios.get("products.json")
    .then(response => console.log(response.data))
    .catch(error => console.log(error));