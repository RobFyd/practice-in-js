const myTime = () => {
  const today = new Date();
  const time = today.toLocaleTimeString();
  document.querySelector(".js-timeText").innerText = time;
};

setInterval(myTime, 1000);

const myDate = () => {
  const today = new Date();
  const date = today.toDateString();
  document.querySelector(".js-dateText").innerText = date;
};

setInterval(myDate, 1000);

const myFullDate = () => {
  const today = new Date();
  const date = today.toDateString(); // date only
  const time = today.toLocaleTimeString(); // time only
  document.getElementById("js-datetime").innerHTML = date + " " + time;
};

setInterval(myFullDate, 1000);

const nextEx = () => {
  const date = new Date();
  const full = date.toLocaleDateString(); // date only

  document.querySelector(".js-nextEx").innerText = full;
};

setInterval(nextEx, 1000);

const nextEx2 = () => {
  const date = new Date();
  const full2 = date.toString(); // time and date with timezone

  document.querySelector(".js-nextEx2").innerText = full2;
};

setInterval(nextEx2, 1000);

const nextEx3 = () => {
  const date = new Date();
  const full3 = date.getFullYear(); // year only

  document.querySelector(".js-nextEx3").innerText = full3;
};

nextEx3();

const nextEx4 = () => {
  const date = new Date();
  const full4 = date.getSeconds(); // seconds only

  document.querySelector(".js-nextEx4").innerText = full4;
};

setInterval(nextEx4, 1000);

const nextEx5 = () => {
  const date = new Date();
  const newHour = date.setHours(22); // set hours to 22

  document.querySelector(".js-nextEx5").innerText = date;
  // console.log(newHour);
};

setInterval(nextEx5, 1000);

const nextEx6 = () => {
  const myBirthday = new Date(1986, 11, 24, 22, 0, 0);
  const showMyBirth = myBirthday.toLocaleString(); // set my birthday date

  document.querySelector(".js-nextEx6").innerText = showMyBirth;
};

nextEx6();

const nextEx7 = () => {
  const date = new Date();
  const full7 = date.getDay(); // day of the week

  document.querySelector(".js-nextEx7").innerText = full7;
};

nextEx7();

const diffrence89 = () => {
  const date1 = new Date(2025, 0, 12, 12, 14, 15); // difference between two dates in seconds and days
  const date2 = new Date(2025, 1, 5, 11, 12, 10);

  const secDiff = (date2.getTime() - date1.getTime()) / 1000;
  document.querySelector(".js-nextEx8").innerText = secDiff;

  const dayDiff = secDiff / 3600 / 24;
  document.querySelector(".js-nextEx9").innerText = dayDiff;
};

diffrence89();

const nextEx1011 = () => {
  const timestamp = Date.now()  // current timestamp
  document.querySelector(".js-nextEx10").innerText = timestamp;

  const date = new Date(timestamp);
  const formattedDateTime = date.toLocaleString();
  document.querySelector(".js-nextEx11").innerText = formattedDateTime;
};

setInterval(nextEx1011, 1000);

const nextEx12 = () => {
  const date = new Date();
  const full12 = date.toLocaleString("en-US", { timeZone: "America/New_York" }); // time in New York

  document.querySelector(".js-nextEx12").innerText = full12;
};

setInterval(nextEx12, 1000);

const nextEx13 = () => {
  const date = new Date();
  const full13 = date.toLocaleString("en-EN", { timeZone: "Europe/London" }); // time in London

  document.querySelector(".js-nextEx13").innerText = full13;
};

setInterval(nextEx13, 1000);

const nextEx14 = () => {
  const date = new Date();
  const full14 = date.toLocaleString("de-DE", { timeZone: "Europe/Berlin" }); // time in Berlin

  document.querySelector(".js-nextEx14").innerText = full14;
};

setInterval(nextEx14, 1000);

const nextEx15 = () => {
  const date = new Date();
  const full15 = date.toLocaleDateString("en-US", { weekday: "long" }); // day of the week

  document.querySelector(".js-nextEx15").innerText = full15;
};

nextEx15();

const nextEx16 = () => {
  const date = new Date();
  const full16 = date.toLocaleDateString("en-US", { month: "long" }); // month

  document.querySelector(".js-nextEx16").innerText = full16;
};

nextEx16();

const nextEx17 = () => {
  const date = new Date();
  const full17 = date.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });  // custom date  // undefined = default language by hardware

  document.querySelector(".js-nextEx17").innerText = full17;
};

setInterval(nextEx17, 1000);

const nextEx18 = () => {
  const date = new Date();
  const full18 = date.toLocaleDateString("jpn", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" });  // custom date  // jpn = japanese

  document.querySelector(".js-nextEx18").innerText = full18;
};

setInterval(nextEx18, 1000);

const nextEx19 = () => {
  const date = new Date();
  const full19 = date.toISOString(); // ISO date for API calls and databases (backend) etc. 

  document.querySelector(".js-nextEx19").innerText = full19;
};

setInterval(nextEx19, 1000);




