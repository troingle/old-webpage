const textElement = document.getElementById('huge-text');
const texts = ['Text 1', 'Text 2', 'Another creative text name'];
let currentIndex = 0;

function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.style.opacity = 1;
    }, 500);
}

setInterval(changeText, 5000);
changeText();
