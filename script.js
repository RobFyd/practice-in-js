{
  const weekDay = (index) => {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const day = days[index];

    if (!day) {
      throw new Error("incorrect index");
    }

    return day;
  };

  try {
    const day = weekDay(22);
    console.log(day);
  } catch (error) {
    console.error(error.message);
    console.error(error.name);
    console.error("You must enter a number between 0 and 6");
  }
}


// nesting errors
{
    try{
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