//0.0 create main cards to get things imported here
const fs = require("fs");
const inquirer = require("inquirer");
//0. import packages; import the module from shape.js
const shape = require("./lib/shapes.js");
// const SVG = require("./node_modules/svg.js/dist/svg.js");
const { Triangle, Circle, Square } = require("./lib/shapes.js");

// const Tiangle = shape.Triangle;
// const Circle = shape.Circle;
// const Square = shape.Square;

// Alterative (more common approach):
// const {Trianle} = require ('./lib/shapes.js') // impoer one piece of the model object
// const {Circle} = require ('./lib/shapes.js')
// const {Square} = require ('./lib/shapes.js')
//TODO: // function to generate SVG
function generateSVGLogo(text, textColor, shapeType, shapeColor) {
  //1. create an array promp the user for shape, text, shape color and text color
  //2. create the SVG
  // 2.1 gen svg tag
  // const draw = SVG().size(300, 200).rect(300, 200).fill(shapeColor);
  // 2.2 gen svg shape
  let shape;
  if (shapeType === "circle") {
    shape = new Circle();
  } else if (shapeType === "triangle") {
    shape = new Triangle();
  } else if (shapeType === "square") {
    shape = new Square();
  } else {
    throw new Error("Invalid shape type");
  }

  // set the shape's color
  shape.setColor(shapeColor);

  let svgContent = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shape.render()}<text x="150" y="125" text-anchor="middle" font-size="65" fill="${textColor}">${text}</text></svg>`;

  `<svg polygon points="75,175 150,25 225,175"/><text x="150" y="145" text-anchor="middle" font-size="45" fill="${textColor}">${text}</text></svg>`;

  `<svg <rect width="150" height="150"/><text x="150" y="125" text-anchor="middle" font-size="65" fill="${textColor}">${text}</text></svg>`;

  // 2.3 gen svg text
  // draw.text(text).move(75, 100).font({ size: 30, fill: textColor });
  // draw.add(shape.render());
  // 2.9 return the SVG content as a string
  // const svgContent = draw.svg();
  return svgContent;
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to three characters for the logo text:",
        name: "text",
        validate: (input) => input.length > 0 && input.length <= 3,
      },
      {
        type: "input",
        message: "Enter the text color (keyword or hexadecimal):",
        name: "textColor",
      },
      {
        type: "list",
        message: "Select a shape:",
        name: "shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        message: "Enter the shape color (keyword or hexadecimal:",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      const svgContent = generateSVGLogo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );

      fs.writeFile("examples/hw.svg", svgContent, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Generatedlogo.svg");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
promptUser();

// function createText(fillColor, text) {
//   // return string with fullColor and text ${}
//   const newShape = new Triangle()
//   newShape.render()
// }

// const data =
// `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

//   <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
//   <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

//   <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>

//   <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
//       stroke="green" fill="transparent" stroke-width="5"/>

// </svg>`

// fs.writeToFile("examples/hw.svg", data, err => {
//   if(err) {
//     console.log(error)
//   }
// })
