const inquirer = require('inquirer');


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



function init() {
    inquirer.prompt(questions);
};

init();