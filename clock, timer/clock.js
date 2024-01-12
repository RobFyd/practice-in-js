setTimeout(() => {
  console.log("load after 1s");
}, 2000);

document.querySelector(".js-button").addEventListener("click", () => {
    setTimeout(() => {
        alert("you clicked the button 2 seconds ago");
      }, 2 * 1000);
});

////

function showAlert() {
    alert("you clicked the second button");
};

document.querySelector(".js-button2").addEventListener("click", () => {
    setTimeout(showAlert, 500);
});

////

const timeoutId = setTimeout(() => {
    console.log("ALERT !!!");
}, 5000);

clearTimeout(timeoutId);  // cancel the timeout

////

const timeoutId2 = setTimeout(() => {
    console.log("ALERT2 !!!");
}, 5000);

setTimeout(() => {
    clearTimeout(timeoutId2);  // cancel the timeout after 2.5s
}, 2500);

///////////////////////////////////////////////

setInterval(() => {
    console.log("run every 1s");
}, 1000);  // run every 1s

////

let counter = 0;

setInterval(() => {
    console.log("run every 500ms");
    counter = counter + 1;              // increment counter
}, 500);

///

const intervalId = setInterval(() => {
    console.log("do whatever");
}, 200);

setInterval(() => {
    clearInterval(intervalId);
}, 1500);  // cancel the interval after 1.5s