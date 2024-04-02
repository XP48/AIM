const placement = document.getElementById("placement");
const aim = document.getElementById("aim");
const startMenu = document.querySelector('.startMenu');
const scoreMenu = document.querySelector('.scoreMenu');
const scoreTxt = document.querySelector('.score');

var score = 0;
var started = false;

function start() {
    aim.setAttribute("onclick", 'touch()');
    startMenu.style.display = 'none';
    scoreMenu.style.display = 'block';
    touch();
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