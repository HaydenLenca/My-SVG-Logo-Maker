const triangle = require('../lib/triangle.js');

//test for triangle shape color

describe('Triangle', () => {
    
    describe('render', () => {
      it('should  render the triangle shape color', () => {
          const newTriangle = new triangle
          newTriangle.shapeColor = "red"
          const renderString = '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
  
        expect(newTriangle.render()).toEqual(renderString);
      });
    });
  });