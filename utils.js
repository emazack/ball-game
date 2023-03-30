function getRandomColors() {
    const hexElements = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let resColor = "#";
    for (let index = 0; index < 6; index++) {
        let randomElement = hexElements[Math.floor(Math.random() * hexElements.length)];
        resColor += randomElement;
    }
    return resColor;
}

function randomRadius() {
    const radius = Math.floor(Math.random() * 100) + 25;
    return radius;
}

export {getRandomColors, randomRadius}