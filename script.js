const textElement = document.getElementById('changing-text');
const texts = ['Welcome', 'Tervetuloa', 'Willkommen', "Välkommen", "いらっしゃいませ"];
let currentIndex = 0;

const ball = document.getElementById("ball");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const radius = 100;
const speed = 2 * Math.PI / 1000;
let angle = 0;
const x = centerX + radius * Math.cos(angle);
const y = centerY + radius * Math.sin(angle);

function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.style.opacity = 1;
    }, 500);
}

setInterval(changeText, 2000);
changeText();

ball.style.left = x + "px";
ball.style.top = y + "px";

angle += speed;

requestAnimationFrame(moveBall);


