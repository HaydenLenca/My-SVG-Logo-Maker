const shapes = require ('./shapes');

class circle extends shapes{
    constructor(text, textColor, backColor){
        super(text, textColor, backColor)
    }
    render(){
        return  `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
    // need to add bottom
    renderBottom(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`
    }
};

module.exports = circle;