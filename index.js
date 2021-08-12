//create variables with require keyword for prompts through inquirer
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require('fs');

const engineerArray = [];
const internArray = [];
const ManagerArray = [];

inquirer
    .prompt([
        {
            type: 'list',
            name: 'newTeammate',
            message: 'Select a new teammate'
            choices: [
                'Engineer',
                'Intern',
                'Team Manager',
                'No more new employees'

            ]
        }])
        .then((choice) => {
            
        }

        )






    ])


