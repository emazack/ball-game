import theBall from "./data.js";
import Ball from "./Ball.js";

const myball = new Ball(theBall)

console.log(myball.create());

function render() {
    document.getElementById("playground").appendChild(myball.create())
}

render()
