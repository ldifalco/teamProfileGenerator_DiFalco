//create variables with require keyword for prompts through inquirer
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require('inquirer');
const fs = require('fs');

const engineerArray = [];
const internArray = [];
const managerArray = [];
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
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
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
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                internArray.push(intern)
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
                .then((answers) => {
                    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
                    managerArray.push(manager)
                    init()
                })}

init();