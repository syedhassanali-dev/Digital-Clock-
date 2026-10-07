const time = document.querySelector(".clockContainer");

let nowDate = new Date();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();
let seconds = nowDate.getSeconds();

function formatTime(number) {
    if (number >= 10) {
        return number;
    } else {
        return `0${number}`;
    }
}


setInterval(function () {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
    
    let displayHour;
    if (hour === 0) {
        displayHour = 12
    } else if (hour > 12) {
        displayHour = hour - 12
    } else {
        displayHour = hour
    }
    
    let period;
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    let hourVal = formatTime(displayHour);
    let minVal = formatTime(minute);
    let secVal = formatTime(second);
    
    time.innerText = `${hourVal} : ${minVal} : ${secVal} ${period}`;
}, 1000);
