const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const { ifError } = require("assert");

// Array of questions for the README
const questions = [
    {
      type: "input",
      message: "Project Title",
      name: "title",
    },
    {
      type: "input",
      message: "In a few words describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Steps",
      name: "installation",
    },
    {
      type: "input",
      message: "Contribution Guidelines",
      name: "contribution",
    },
    {
      type: "list",
      message: "Does your project include a license?",
      name: "license",
      choices: ["no license", "mit", "apache"],
    },
    {
      type: "input",
      message: "Github Username",
      name: "github",
    },
    {
      type: "input",
      message: "Email Address",
      name: "email",
    },
  ]
  
  // this function will write README file
  function writeToFile (fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  
  // this function will initialize the app
  function init() {
    inquirer.prompt(questions).then((data) => {
      console.log(JSON.stringify(data, null, " "));
      writeToFile("README.md", data);
    })
  }
  
  // Function call to initialize app
  init();

