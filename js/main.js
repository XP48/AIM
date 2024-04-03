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


var score;
var failed;
var started = false;
let timeLeft;


const timer = new Worker('../js/timer.js');

timer.onmessage = function(event) {
    const data = event.data;
    // Mettre à jour l'interface utilisateur avec le temps restant
    timeLeft = data
    if(timeLeft == 0) init();
    timeTxt.textContent = `Time left : ${timeLeft}`;
};


function start() {
    aim.setAttribute("onclick", 'touch()');
    zone.setAttribute("onclick", "fail()");
    startMenu.style.display = 'none';
    timeMenu.style.display = 'block';
    touch();
    score = 0;
    failed = 0
    timeLeft = document.getElementById('time').value;
    timeTxt.textContent = `Time left : ${timeLeft}`;
    timer.postMessage( { action: 'start', timeLeft : timeLeft} )
    started = true;
}
function init() {
    placement.style.left = '50%';
    placement.style.top = '40%';
    placement.style.transform = `translate(-50%, -40%)`;
    aim.setAttribute("onclick", 'start()');
    startMenu.style.display = 'block';
    timeMenu.style.display = 'none';
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
    console.log(val)
    aim.setAttribute("r", val);
    aimAnim.setAttribute("values", `${val};${val-5};${val}`);
    placement.setAttribute("width", val*2);
    placement.setAttribute("height", val*2);
}

// function time() {
//     if (timeLeft == 0) {
//         init();
//     } else {
//         timeTxt.textContent = `Time left : ${timeLeft}`;
//         timeLeft--;
//     }
// }