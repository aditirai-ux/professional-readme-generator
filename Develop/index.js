// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "list",
    message: "What license are you using?",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) =>
    err ? console.error(err) : console.log("Successfully created ReadMe!")
  );
}

const askQuestions = (questions) => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      //   console.log(answers);
      const readme = generateMarkdown(answers);
      writeToFile("README.md", readme);
    })
    .catch((error) => {
      console.log(error.isTtyError);
    });
};

// TODO: Create a function to initialize app
function init() {
  // ask user questions
  askQuestions(questions);
}

// Function call to initialize app
init();
