function timeDate() {
    var today = new Date();
    var date = dzisiaj.toDateString();
    var time = dzisiaj.toLocaleTimeString();
    document.getElementById('dataczas').innerHTML = date + ' ' + time;
}

setInterval(timeDate, 1000);
