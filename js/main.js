const circleColor = getComputedStyle(document.documentElement).getPropertyValue('--circle');
const circleErrorColor = getComputedStyle(document.documentElement).getPropertyValue('--circle-error');

const placement = document.getElementById("placement");
const aim = document.getElementById("aim");
const startMenu = document.querySelector('.startMenu');
const scoreMenu = document.querySelector('.scoreMenu');
const scoreTxt = document.querySelector('.score');
const zone = document.querySelector('.content');

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