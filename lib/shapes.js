// create class to gather all Shapes
//TODO:// ---------------------------    class Shape   --------------------------- //
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
//TODO:// ---------------------------    class to extend triangle shape   --------------------------- //
// Exports `Triangle`, `Circle`, and `Square` classes
class Triangle extends Shape {
  // each shape class should have a render() method
  render() {
    return `<polygon points="75,175 150,25 225,175" fill="${this.shapeColor}" />`;
  }
}
//TODO:// ---------------------------    class to extend circle shape   --------------------------- //
class Circle extends Shape {
  // each shape class should have a render() method
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`;
  }
}
//TODO:// ---------------------------    class to extend square shape   --------------------------- //
class Square extends Shape {
  // each shape class should have a render() method
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}
//TODO:// ---------------------------    export an object   --------------------------- //
module.exports = { Triangle, Circle, Square };
// or module.exports = { Triangle: Triangle, Circle: Circle, Square: Squire };
