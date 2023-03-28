class Ball {
    constructor(data) {
        Object.assign(this, data)
    }

    create () {
        return document.createElement("div")
    }
}

export default Ball