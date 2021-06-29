let play = document.getElementById("play"),
    pause = document.getElementById("pause")
    audio = new Audio('music-lofi.mp3');

let btns = document.querySelectorAll(".btn"),
    btnStart = document.querySelector(".start");

let minute = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    min = 25,
    sec = 60;

let img = document.getElementById("image-froggy");
let st;

 btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let btnSelected = e.currentTarget.classList;
        if(btnSelected.contains('start')) {    
            btnStart.disabled = true;
            start();
            img.setAttribute("src", "img/gif-froggy.gif");
        } else if(btnSelected.contains('reset')) {
            minute.textContent = "25";
            seconds.textContent = "00";
            stop(st);
            min = 25;
            sec = 60;
            btnStart.disabled = false;
            img.setAttribute("src", "");
        }
    });
 });

play.addEventListener('click', playMusic);
pause.addEventListener('click', pauseMusic);

 function start() {
    sec--;
    seconds.textContent = sec;

    if(sec < 10) {
        seconds.textContent = "0" + sec;
    }

    if(min < 10) {
        minute.textContent = "0" + min;
    }

    if(sec == 0 && min == 0) {
        stop(st);
    }
    
    if (sec == 0) {
        sec = 60;
    } else if(sec == 59) {
        min--;
        minute.textContent = min;
    }

    st = setTimeout(start, 1000);

 }

 function stop(st) {
    clearTimeout(st);
 }

 function playMusic() {
    audio.play();
 }

 function pauseMusic() {
    audio.pause();
 }