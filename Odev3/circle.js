// PatikaDev Node.JS Modülü Ödev 2
// Daire Modülü


function circleArea(r) {
    return Math.PI * (r ** 2);
}

function circleCircumference(r) {
    return 2 * Math.PI * r;
}

module.exports = {
    circleArea,
    circleCircumference
}
