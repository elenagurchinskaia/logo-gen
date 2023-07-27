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
    return `<polygon points="75,175 150,25 225,175" fill=${this.shapeColor} />`;
  }
}

class Circle extends Shape {
  // each shape class should have a render() method
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  // each shape class should have a render() method
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}
// export as an object
module.exports = { Triangle, Circle, Square };
// or module.exports = { Triangle: Triangle, Circle: Circle, Square: Squire };
