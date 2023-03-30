import theBall from "./data.js";
import Ball from "./Ball.js";

const myball = new Ball(theBall)
const playground = document.getElementById("playground")


function render() {
    playground.appendChild(myball.create())
}

render()