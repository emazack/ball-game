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
    return Math.floor(Math.random() * (100 - 25 + 1)) + 25;
}

function getRandomDirection() {
    return Math.floor(Math.random() * 7) + 1;
  }
  

export {getRandomColors, randomRadius, getRandomDirection}