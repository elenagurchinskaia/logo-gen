//0.0 the main cards are usually get things imported here
//0. import packages; import the module from shape.js
const { default: inquirer } = require("inquirer");
const shape = require("./lib/shapes.js");
const Tiangle = shape.Triangle;
const Circle = shape.Circle;
const Square = shape.Square;

// Alterative (more common approach):
// const {Trianle} = require ('./lib/shapes.js') // impoer one piece of the model object
// const {Circle} = require ('./lib/shapes.js')
// const {Square} = require ('./lib/shapes.js')

const { Triangle, Circle, Square } = require("./lib/shapes.js");

//1. create an array promp the user for shape, text, shape color and text color
//2. create the SVG
// 2.1 gen
// 2.9 write the file

function prompUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter up to three characters for the logo text:",
      name: "text",
      validate: (input) => input.length <= 3,
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
  ]);
}

prompUser();
