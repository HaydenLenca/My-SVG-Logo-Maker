const inquirer = require('inquirer');
const fs = require('fs');
const svg = require('./lib/svg');


const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo(Up to 3 characters)',
        name: 'text',
        validate: function(value) {
            if(value.length > 3){
                return "Please enter 3 characters or less"
            }
            else{
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What shape do you want?',
        name: 'shape',
        choice: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What color do you want the shape?',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: 'What color do you want the background color?',
        name: 'backColor',
    },
];

function writeToFile(data) {
    fs.writeFile('./test/logo.svg', data, (err) =>
        err ? console.log(err) : console.log('File has been written.'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        writeToFile(svg(answers))
    });
}

init();