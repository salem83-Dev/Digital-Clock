function updateClock() {

    let h3 = document.getElementById("clock");

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let full_year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = now.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let day_name = days[day];

    if (month < 10) {
        month = "0" + month;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let ampm = "AM";
    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }

    now = `${hours}:${minutes}:${seconds} ${ampm}`;

    h3.innerText = now;

    let h4 = document.getElementById("full_year");
    let full_date = full_year  + "/" + month + "/" + date + " | " + day_name;
    h4.innerText = full_date;
}

setInterval(updateClock, 1000);
updateClock();