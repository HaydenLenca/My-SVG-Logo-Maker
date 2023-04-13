const shapes = require("./shapes/shapes")
const circle = require("./shapes/circle")


const svg = (data) => {
   let newStr = ""
   const newShape = new shapes
   newStr = newShape.render();


      switch(data.shape){
         case 'circle':
            const newCircle = new circle(data.text, data.textColor, data.shapeColor)
            newStr += `\n     ${newCircle.render()}\n     ${newCircle.renderBottom()}`
            break;



      }
      return newStr;
}

module.exports = svg;