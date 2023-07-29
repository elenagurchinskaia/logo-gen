// all the tests for SVG
// import the required files
// test suies
// > contains multiple tests
// > each shape needs a test - triangle, circle, square
// >

const { Triangle, Circle, Square } = require("./shapes.js");

describe("SVG Shape Tests", () => {
  // A testing suite for Triangle is created
  describe("Triangle", () => {
    // A test is created to check that Triangle shape in selected color is rendered.
    it("should render the SVG string with the given shape color", () => {
      // Act
      const shape = new Triangle();
      shape.setColor("pink");
      // Assert
      expect(shape.render()).toEqual(
        `<polygon points=\"75,175 150,25 225,175\" fill=\"pink" />`
      );
    });
  });
});

// snippet from README
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );

// test each shape class for render method
// > refer to act 11-12

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).to Equal('<poligon)
