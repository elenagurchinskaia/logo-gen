// all the tests for SVG
// import the required files
// test suies
// > contains multiple tests
// > each shape needs a test - triangle, circle, square
// >

const { Triangle, Circle, Square } = require("./shapes.js");

// snippet from README
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(
  '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
);

// test each shape class for render method
// > refer to act 11-12

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).to Equal('<poligon)
