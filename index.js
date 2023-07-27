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


//TODO: 

function generateSVGLogo(text, textColor, shape, shapeColor)
//1. create an array promp the user for shape, text, shape color and text color
//2. create the SVG
// 2.1 gen svg tag
// 2.2 gen svg shape
// 2.3 gen svg text
// 2.9 write the file

function prompUser() {
  inquirer
    .prompt([
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
    ])
    .then((answers) => {
      generateSVGLogo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

prompUser();


function createText(fillColor, text) {
  // return string with fullColor and text ${}
  const newShape = new Triangle()
  newShape.render()
}

const data = 
`<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>`

fs.writeToFile("examples/hw.svg", data, err => {
  if(err) {
    console.log(error)
  }
})