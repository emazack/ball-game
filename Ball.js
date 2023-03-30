class Ball {
    constructor(data) {
        Object.assign(this, data)
    }

    create() {
        let { radius, color, htmlElement } = this
        htmlElement = document.createElement("div")
        htmlElement.style.backgroundColor = color;
        htmlElement.style.width = `${radius}px`;
        htmlElement.style.height = `${radius}px`;
        htmlElement.classList.add('ball');
        this.click(htmlElement);
        return htmlElement
    }

    click(ball) {
        ball.addEventListener("click", () => {
            console.log("cliccato");
        })
    }
}

export default Ball