const circleColor = getComputedStyle(document.documentElement).getPropertyValue('--circle');
const circleErrorColor = getComputedStyle(document.documentElement).getPropertyValue('--circle-error');

const placement = document.getElementById("placement");
const aim = document.getElementById("aim");
const aimAnim = document.getElementById("aimAnimate");
const startMenu = document.querySelector('.startMenu');
const timeMenu = document.querySelector('.timeMenu');
const timeTxt = document.querySelector('.timer');
const zone = document.querySelector('.content');
const slider = document.getElementById('circleSize');
const duration = document.getElementById('time');
const scoreMenu = document.querySelector('.scoreMenu');
const stime = document.getElementById('stime');
const scount = document.getElementById('scount');
const sprec = document.getElementById('sprec');


var score;
var failed;
var started = false;
let timeLeft;


const timer = new Worker('js/timer.js');

timer.onmessage = function(event) {
    const data = event.data;
    if(data == 0) init();
    timeTxt.textContent = `Time left : ${data}`;
};


function start() {
    aim.setAttribute("onclick", 'touch()');
    zone.setAttribute("onclick", "fail()");
    startMenu.style.display = 'none';
    scoreMenu.style.opacity = 0;
    timeMenu.style.display = 'block';
    touch();
    score = 0;
    failed = 0
    timeLeft = document.getElementById('time').value;
    timer.postMessage( { action: 'start', timeLeft : timeLeft-1} )
    started = true;
}
function init() {
    placement.style.left = '50%';
    placement.style.top = '40%';
    placement.style.transform = `translate(-50%, -40%)`;
    sprec.textContent = `${Math.round((score/(score+failed))*100)}%`;
    scount.textContent = score;
    stime.textContent = `${timeLeft} `;
    timeMenu.style.display = 'none';
    scoreMenu.style.opacity = 1;
    startMenu.style.display = 'block';
    aim.setAttribute("onclick", 'start()');
    started = false;
}

function touch() {
    score++
    let posx = Math.floor(Math.random() * (91 - 10) + 10);
    let posy = Math.floor(Math.random() * (91 - 10) + 10);

    placement.style.left = posx + '%';
    placement.style.top = posy + '%';
    placement.style.transform = `translate(-${posx}%, -${posy}%)`;
}

function fail() {
    failed++;
}

function resize() {
    let val = slider.value;
    aim.setAttribute("r", val);
    aimAnim.setAttribute("values", `${val};${val-5};${val}`);
    placement.setAttribute("width", val*2);
    placement.setAttribute("height", val*2);
}
