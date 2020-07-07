const timeBorder_div = document.querySelector(".timer");
const time_p = document.getElementById("time");
const startStop_button = document.getElementById("start");
const reset_button = document.getElementById("reset");
const sound_div = document.getElementById("sound");
const initialTime = 1500;
let totalSec = initialTime;
let minute;
let second;
let clock;

function updateTime() {
    if (totalSec !== 0)
        totalSec--;
    second = totalSec % 60;
    minute = Math.floor(totalSec/60);
    second = (second < 10)?('0' + second):second;
    minute = (minute < 10)?('0' + minute):minute;
    time_p.innerHTML = `${minute}:${second}`;
    if (totalSec === 0) {
        clearInterval(clock);
        sound_div.innerHTML = `<audio autoplay="autoplay"><source src="sounds/beep.mp3" type="audio/mpeg"></autoplay>`;
    }
}

function timer() {
    if (startStop_button.innerText === "Start") {
        startStop_button.innerText = "Stop";
        clock = setInterval(updateTime, 1000);
        timeBorder_div.classList.add("green-glow");
        timeBorder_div.classList.remove("green-fade");
    }
    else {
        startStop_button.innerText = "Start";
        clearInterval(clock);
        timeBorder_div.classList.add("green-fade");
        sound_div.innerHTML = "";
    }
}

function reset() {
    clearInterval(clock);
    totalSec = initialTime;
    time_p.innerHTML = `25:00`;
    startStop_button.innerText = "Start";
    timeBorder_div.classList.add("green-fade");
    sound_div.innerHTML = "";
}

function main() {
    startStop_button.addEventListener("click", timer);
    reset_button.addEventListener("click", reset);
}

main();