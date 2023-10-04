// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "project title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "project description",
      message: "Please provide a brief description of the project?",
    },
    {
      type: "input",
      name: "installation instructions",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage information",
      message: "How is this project used?",
    },
    {
      type: "input",
      name: "contribution guidelines",
      message: "Please enter any contributors to this project",
    },
    {
      type: "input",
      name: "test instructions",
      message: "Please enter any test instructions for your project",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Enter your LinkedIn URL",
      choices: [
        "MIT",
        "GPL",
        "Creative Commons license",
        "Microsoft Public License",
      ],
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
