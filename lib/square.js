const shapes = require("./shapes");
// code to make the square

class square extends shapes{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
       return  `<rect width="200" height="200" fill="${this.shapeColor}" />`
      

    }
    renderBottom(){
        return `<text x="85" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`
    }
}

module.exports = square;