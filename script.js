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
    throw "incorrect index";
  }

  return day;
};

try {
    const day = weekDay(22);
    console.log(day);
} catch (error) {
    console.error("You must enter a number between 0 and 6");
}
