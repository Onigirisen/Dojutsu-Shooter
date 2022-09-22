function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 100
}

function rotateOnPoint (x, y, angle) {
    let sin = Math.sin(angle);
    let cos = Math.cos(angle);

    return {
        x: x * cos - y * sin,
        y: x * sin + y * cos
    }
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min +1) + min);
}