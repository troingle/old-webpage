const textElement = document.getElementById('changing-text');
const texts = ['Welcome', 'Tervetuloa', 'Wilkommen', "Välkommen", "いらっしゃいませ"];
let currentIndex = 0;

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
