const textElement = document.getElementById('changing-text');
const texts = ['Welcome', 'Tervetuloa', 'Willkommen', "Välkommen", "いらっしゃいませ"];
let currentIndex = 0;

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');


document.addEventListener('DOMContentLoaded', function () {
    box1.addEventListener('click', function (event) {
        window.location.href = 'https://www.example.com';
    });
    box2.addEventListener('click', function (event) {
        window.location.href = 'https://www.example.com';
    });
    box3.addEventListener('click', function (event) {
        window.location.href = 'https://www.example.com';
    });
    box4.addEventListener('click', function (event) {
        window.location.href = 'https://www.example.com';
    });
    box5.addEventListener('click', function (event) {
        window.location.href = 'https://www.example.com';
    });
    box6.addEventListener('click', function (event) {
        window.location.href = 'https://www.example.com';
    });
});

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
