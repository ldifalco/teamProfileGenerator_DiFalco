//create variables with require keyword for prompts through inquirer
const template = require('./templates')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');


//initial prompt for adding teammates
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'newTeammate',
                message: 'Select a new teammate',
                choices: [
                    'Engineer',
                    'Intern',
                    'Team Manager',
                    'No more new employees'

                ]
            }
        ])
        //if statement regarding which teammate is added
        .then((choice) => {
            if (choice.newTeammate === 'Engineer') {
                addEngineer()
            } else if (choice.newTeammate === 'Intern') {
                addIntern()
            } else if (choice.newTeammate === 'Manager') {
                addManager()
            } else {
                console.log("Team finalized")
            }
    })}

        
//functions for after choosing a new employee

//Engineer: NAME ID EMAIL GITHUB

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter your ID',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your Github Username',
            },

        ])
        .then((engineerAnswer) => {
            const engineer = new Engineer(engineerAnswer.name, engineerAnswer.id, engineerAnswer.email, engineerAnswer.github)
            engineerArray.push(engineer)
            init()
        })}


    //Intern Function

    //Intern: NAME ID EMAIL SCHOOL


    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter your name',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter your ID',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your email',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter your school name',
                },

            ])
            .then((internAnswer) => {
                const intern = new Intern(internAnswer.name, internAnswer.id, internAnswer.email, internAnswer.school)
                internArray.push(internAnswer)
                init()
            })}


        //Manager Function

        //Manager: NAME ID EMAIL OFFICE NUMBER

        function addManager() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Enter your name',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Enter your ID',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Enter your email',
                    },
                    {
                        type: 'input',
                        name: 'office',
                        message: 'Enter your Office number',
                    },

                ])
                .then((managerAnswer) => {
                    const manager = new Manager(managerAnswer.name, managerAnswer.id, managerAnswer.email, managerAnswer.office)
                    managerArray.push(manager)
                    init()
                })}

init();

