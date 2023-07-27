// create class to gather all Shapes

class Shape {
  constructor() {
    this.shapeColor = "";
    // this.textColor = textColor;
    // this.text = text;
    // this.shape = shape;
    // return a string
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// Exports `Triangle`, `Circle`, and `Square` classes
class Triangle extends Shape {
  // each shape class should have a render() method
  render() {
    return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.shapeColor}>`;
  }
}

class Circle extends Shape {
  // each shape class should have a render() method
  render() {
    return `
    `;
  }
}

class Square extends Shape {
  // each shape class should have a render() method
  render() {
    return ``;
  }
}
// export as an object
module.exports = { Triangle, Circle, Square };
// or module.exports = { Triangle: Triangle, Circle: Circle, Square: Squire };
