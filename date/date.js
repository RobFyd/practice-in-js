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
  
  setInterval(nextEx3, 1000);

  const nextEx4 = () => {
    const date = new Date();
    const full4 = date.getSeconds(); // seconds only
  
    document.querySelector(".js-nextEx4").innerText = full4;
  };
  
  setInterval(nextEx4, 1000);

  const nextEx5 = () => {
    const date = new Date();
    const full5 = date.setHours(22); // set hours to 22
  
    document.querySelector(".js-nextEx5").innerText = date;
    // console.log(full5);
  };
  
  setInterval(nextEx5, 1000);

  const nextEx6 = () => {
    const myBirthday = new Date(1986, 11, 24, 22, 0, 0);
    const showMyBirth = myBirthday.toLocaleString(); // set my birthday date
  
    document.querySelector(".js-nextEx6").innerText = showMyBirth;
  };
  
  setInterval(nextEx6, 1000);
