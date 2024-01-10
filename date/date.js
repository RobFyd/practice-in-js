const myFullDate = () => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    document.getElementById("datetime").innerHTML = date + ' ' + time;
}

setInterval(myFullDate, 1000);

const myTime = () => {
    const today = new Date();
    const time = today.toLocaleTimeString();
    document.querySelector(".time__text").innerText = time;
};

setInterval(myTime, 1000);

const myDate = () => {
    const today = new Date();
    const date = today.toDateString();
    document.querySelector(".date__text").innerText = date;
};

setInterval(myDate, 1000);