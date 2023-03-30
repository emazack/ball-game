class Ball {
    constructor(data) {
        Object.assign(this, data)
    }

    create() {
        let { radius, color, htmlElement, dx, dy } = this
        htmlElement = document.createElement("div")
        htmlElement.style.backgroundColor = color;
        htmlElement.style.width = `${radius}px`;
        htmlElement.style.height = `${radius}px`;
        htmlElement.style.left = `${dx}px`;
        htmlElement.style.top = `${dy}px`;
        htmlElement.classList.add('ball');
        this.click(htmlElement);
        this.draw(htmlElement);
        return htmlElement
    }

    click(ball) {
        ball.addEventListener("click", () => {
            this.delete(ball);
        })
    }

    delete(ball) {
        ball.remove();
    }

    draw(ball) {
        this.move(ball, parseInt(ball.style.left), parseInt(ball.style.top));
        this.changeDirection(ball, parseInt(ball.style.left), parseInt(ball.style.top));
        setTimeout(() => {
            this.draw(ball);
        }, 1000 / 60);
    }

    move(ball, currentPostionLeft, currentPostionTop) {
        ball.style.left = `${currentPostionLeft + (this.dx)}px`;
        ball.style.top = `${currentPostionTop + (this.dy)}px`;
    }

    changeDirection(ball, currentPostionLeft, currentPostionTop) {
        const playground = ball.parentElement
        if (playground) {
            if (currentPostionLeft < 0 || currentPostionLeft > (playground.offsetWidth - this.radius)) {
                this.dx = -this.dx;
            }
            if (currentPostionTop < 0 || currentPostionTop > (playground.offsetHeight - this.radius)) {
                this.dy = -this.dy
            }   
        }
    }
}

export default Ball