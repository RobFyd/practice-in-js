//  try, throw, catch, (finally)

{
  try {
    throw "Some serious error";
  } catch (error) {
    console.error(error);
  }
}

{
  const yearMonths = (index) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[index];

    if (!month) {
      throw new Error("incorrect index");
    }

    return month;
  };

  try {
    const month = yearMonths(22);
    console.log(month);
  } catch (error) {
    console.error(error.message);
    console.error(error.name);
    console.error("You must enter a number between 0 and 11");
  }
}

// nesting errors
{
  try {
    try {
      throw new Error("correct error message");
    } catch (error) {
      console.log(error);
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
}

// JSON - JavaScript Object Notation

{
  console.log(JSON.parse('{"property": 5}'));

  try {
    console.log(JSON.parse('{"property: 6}'));
  } catch (error) {
    console.log("Bad JSON");
  }
}

//  JSON check

const isValidJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    return false;
  }
};

//  JSON.stringify

const object1 = {};
const object2 = {};

object2.object1 = object1;
object1.object2 = object2; //  typeError
