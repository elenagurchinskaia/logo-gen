//TODO:// ---------------------------    Create const for fs and inquirer   --------------------------- //
const fs = require("fs");
const inquirer = require("inquirer");
//TODO:// ---------------------------    Import packages from shape.js   --------------------------- //
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

//TODO: // ---------------------------    Function to generate SVG    --------------------------- //
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

  //TODO:// ---------------------------    Set the shape color   --------------------------- //
  shape.setColor(shapeColor);

  let svgContent = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shape.render()}<text x="150" y="125" text-anchor="middle" font-size="65" fill="${textColor}">${text}</text></svg>`;

  `<svg polygon points="75,175 150,25 225,175"/><text x="150" y="145" text-anchor="middle" font-size="45" fill="${textColor}">${text}</text></svg>`;

  `<svg <rect width="150" height="150"/><text x="150" y="125" text-anchor="middle" font-size="65" fill="${textColor}">${text}</text></svg>`;

  // 2.3 gen svg text
  // 2.9 return the SVG content as a string
  // const svgContent = draw.svg();
  return svgContent;
}
//TODO:// ---------------------------    PromptUser function   --------------------------- //
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
      //TODO:// ---------------------------    Write to file   --------------------------- //
      fs.writeFile("examples/logo.svg", svgContent, (err) => {
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
