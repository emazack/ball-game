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
        htmlElement.style.left = `${dx}%`;
        htmlElement.style.top = `${dy}%`;
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
        let { dx, dy } = this
        this.move(ball, dx, dy, parseInt(ball.style.left), parseInt(ball.style.top));
        this.changeDirection(ball, parseInt(ball.style.left), parseInt(ball.style.top));
        setTimeout(() => {
            this.draw(ball);
        }, 100000 / 60);
    }

    move(ball, dx, dy, currentPostionLeft, currentPostionTop) {
        ball.style.left = `${currentPostionLeft + (dx)}px`;
        ball.style.top = `${currentPostionTop + (dy)}px`;
    }

    changeDirection(ball, currentPostionLeft, currentPostionTop) {
        const playground = ball.parentElement
        if (playground) {
            console.log(ball.style.dx);
            console.log(ball.style.dy);
            console.log("__________________________________");

            if (currentPostionLeft < 0 || currentPostionLeft > (playground.offsetWidth - this.radius)) {
                parseInt(ball.style.left) = -(parseInt(ball.style.left));
            }
            if (currentPostionTop < 0 || currentPostionTop > (playground.offsetHeight - this.radius)) {
                parseInt(ball.style.top) = -(parseInt(-ball.style.top));
            }   
        }
    }
}

export default Ball