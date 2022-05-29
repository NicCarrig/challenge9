const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What packages/dependencies did you install for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please list the steps to use this'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this project use? (choose one)',
        choices: ['BSD', 'MIT', 'GNU GPL', 'none']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHib username associated with this project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email should people send questions about the project to?'
    }
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        err ? console.log(err): console.log('README.md successfully generated')
    });
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data);
    });
}

// Function call to initialize app
init();
