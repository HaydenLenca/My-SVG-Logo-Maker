const shapes = require('./shapes/shapes');
const circle = require('./shapes/circle');

const newsvg = (data) = {
    let emptyShape = ''
    const newShape = new shapes
    emptyShape = newShape.render();

    switch(data.shape) {
        case 'circle';
        const newCircle = new circle(data.text, data.textColor, data.shapeColor)
        newsvg += `\n ${newCircle.render()}\n ${newCircle.renderBottom()}`
        break; 
    }
    return newsvg;
}

module.exports = svg