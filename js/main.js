const circleColor = getComputedStyle(document.documentElement).getPropertyValue('--circle');
const circleErrorColor = getComputedStyle(document.documentElement).getPropertyValue('--circle-error');

const placement = document.getElementById("placement");
const aim = document.getElementById("aim");
const aimAnim = document.getElementById("aimAnimate");
const startMenu = document.querySelector('.startMenu');
const scoreMenu = document.querySelector('.scoreMenu');
const scoreTxt = document.querySelector('.score');
const zone = document.querySelector('.content');
const slider = document.getElementById('circleSize');
const duration = document.getElementById('time');

var score = 0;
var failed = 0;
var started = false;

function start() {
    aim.setAttribute("onclick", 'touch()');
    zone.setAttribute("onclick", "fail()");
    startMenu.style.display = 'none';
    scoreMenu.style.display = 'block';
    touch();
    started = true;
}

function touch() {
    score++
    let posx = Math.floor(Math.random() * (91 - 10) + 10);
    let posy = Math.floor(Math.random() * (91 - 10) + 10);

    placement.style.left = posx + '%';
    placement.style.top = posy + '%';
    placement.style.transform = `translate(-${posx}%, -${posy}%)`;
    scoreTxt.textContent = `Score : ${score}`;
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