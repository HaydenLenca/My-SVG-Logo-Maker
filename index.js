const inquirer = require('inquirer');


const questions = [
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

function init() {
    inquirer.prompt(questions);
};

init();