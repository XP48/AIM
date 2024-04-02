const placement = document.getElementById("placement");
const aim = document.getElementById("aim");

var score = 0;

function touch() {
    score++
    let posx = Math.floor(Math.random() * (91 - 10) + 10);
    let posy = Math.floor(Math.random() * (91 - 10) + 10);

    placement.style.left = posx + '%';
    placement.style.top = posy + '%';
    placement.style.transform = `translate(-${posx}%, -${posy}%)`;
}