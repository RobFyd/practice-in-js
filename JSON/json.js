// JSON - JavaScript Object Notation

//JSON.parse() - convert JSON string to JS object
const data = JSON.parse('{"title": "Star Wars"}');

try {
  console.log(JSON.parse('{"title": "Star Wars"}'));
} catch (error) {
  console.log("Sorry but this is not a valid JSON string");
}

// checking if the string is valid JSON

const isValidJson = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    return false;
  }
};

// JSON.stringify() - convert JS object to JSON string
const jsonString = JSON.stringify({ title: "Star Wars" });