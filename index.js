import theBall from "./data.js";
import Ball from "./Ball.js";

const playground = document.getElementById("playground")
const startBall = document.getElementById("start-ball")

startBall.addEventListener("click", () => {
    const newBall = new Ball(theBall)
    render(newBall)
})


function render(newBall) {
    playground.appendChild(newBall.create())
}