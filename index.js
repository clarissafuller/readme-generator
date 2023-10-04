// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Please provide a brief description of the project?",
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usageInfo",
      message: "How is this project used?",
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Please enter any contributors to this project",
    },
    {
      type: "input",
      name: "testInstructions",
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
    {
      type: "input",
      name: "githubUsername",
      message: "Please enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
};

// TODO: Create a function to write README file
const generateReadMe = ({
  projectTitle,
  projectDescription,
  installationInstructions,
  usageInfo,
  contributionGuidelines,
  testInstructions,
  license,
  githubUsername,
  email,
}) =>
  `# ${projectTitle}
    
## Description
${projectDescription}
      
## Table of Contents
      
 - [Installation](#installation)
 - [Usage](#usage)
- [Credits](#credits)
- [License](#license)
      
## Installation
${installationInstructions}
      
## Usage
${usageInfo}
      
## Credits
${contributionGuidelines}
      
## License
${license}
      
## Badges
      
![${license}](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fbadges%2Fshields%2Fraw%2Fmaster%2Fpackage.json)
      
## Questions
Thanks so much for checking out this repo! If you have any questions you can reach out to me here on github at ${githubUsername} or you can reach me via email at ${email}!
    
## Tests
${testInstructions}`;
// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => writeFile("README.md", generateReadMe(answers)))
    .then(() => console.log("Successfully wrote README!"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
