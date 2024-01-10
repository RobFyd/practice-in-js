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
