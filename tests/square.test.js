const square = require('../lib/square');

//test for square shape color

describe('Square', () => {
    
    describe('render', () => {
      it('should  render the square shape color', () => {
          const newSquare = new square;
          newSquare.shapeColor = "red"
          const renderString = '<rect width="200" height="200" fill="red" />'
  
        expect(newSquare.render()).toEqual(renderString);
      });
    });
  });