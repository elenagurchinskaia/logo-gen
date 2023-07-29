// test suies
// > contains multiple tests
// > each shape needs a test - triangle, circle, square
// >

const { Triangle, Circle, Square } = require("./shapes.js");

describe("SVG Shape Tests", () => {
  //TODO:// ---------------------------    A testing suite for Triangle is created   --------------------------- //
  describe("Triangle", () => {
    // A test is created to check that Triangle shape in selected color is rendered.
    it("should render the SVG string with the given shape color", () => {
      // Act
      const shape = new Triangle();
      shape.setColor("pink");
      // Assert
      expect(shape.render()).toEqual(
        `<polygon points=\"75,175 150,25 225,175\" fill="pink" />`
      );
    });
  });

  //TODO:// ---------------------------    A testing suite for Circle is created   --------------------------- //
  describe("Circle", () => {
    // A test is created to check that Circle shape in selected color is rendered.
    it("should render the SVG string with the given shape color", () => {
      // Act
      const shape = new Circle();
      shape.setColor("green");
      // Assert
      expect(shape.render()).toEqual(
        `<circle cx="150" cy=\"100\" r=\"75\" fill="green" />`
      );
    });
  });
});

//TODO:// ---------------------------    A testing suite for Square is created   --------------------------- //
describe("Square", () => {
  // A test is created to check that Square shape in the selected color is rendered.
  it("should render the SVG string with the given shape color", () => {
    // Act
    const shape = new Square();
    shape.setColor("blue");
    // Assert
    expect(shape.render()).toEqual(
      `<rect x=\"75\" y=\"25\" width="150" height="150" fill="blue" />`
    );
  });
});

// // test each shape class for render method
// // > refer to act 11-12
