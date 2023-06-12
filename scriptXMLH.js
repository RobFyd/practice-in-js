const request = new HMLHttpRequest();

request.open("GET", "products.json");

request.responseType = "json";

request.onload = () => {
  console, log(request.response);
};

request.send();
