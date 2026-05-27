const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 15;

let gameInterval;
let timerInterval;

function createSquare(){

    const square = document.createElement("div");

    square.classList.add("square");

    const maxX = gameArea.clientWidth - 55;
    const maxY = gameArea.clientHeight - 55;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    square.style.left = `${randomX}px`;
    square.style.top = `${randomY}px`;

    square.addEventListener("click", () => {

        score++;

        scoreText.textContent = score;

        square.remove();

    });

    gameArea.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 900);
}

function startGame(){

    score = 0;
    timeLeft = 20;

    scoreText.textContent = score;
    timeText.textContent = timeLeft;

    clearInterval(gameInterval);
    clearInterval(timerInterval);

    gameInterval = setInterval(() => {
        createSquare();
    }, 500);

    timerInterval = setInterval(() => {

        timeLeft--;

        timeText.textContent = timeLeft;

        if(timeLeft <= 0){

            clearInterval(gameInterval);
            clearInterval(timerInterval);

            alert(`Tiempo terminado 🚀\nPuntaje final: ${score}`);

        }

    }, 1000);
}

startBtn.addEventListener("click", startGame);