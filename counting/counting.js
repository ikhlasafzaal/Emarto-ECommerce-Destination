// snow fall animation

function createsnow(){
    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';
    container.appendChild(span);

    setTimeout(() =>{
        span.remove();
    },5000)
}

setInterval(createsnow, 100);

//count down part
let countedate = new Date('oct 1, 2022 00:00:00').getTime();
function countdown(){
    let now = new Date().getTime();
    gap = countedate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hrs').innerText = h;
    document.getElementById('min').innerText = m;
    document.getElementById('sec').innerText = s;
}

setInterval(function(){
    countdown();
}, 1000)