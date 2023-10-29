const ball = document.getElementById("ball");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const radius = 100;
const speed = 200 * Math.PI / 1000;
let angle = 0;

function moveBall() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ball.style.left = x + "px";
    ball.style.top = y + "px";
    angle += speed;

    requestAnimationFrame(moveBall);
}

requestAnimationFrame(moveBall);


