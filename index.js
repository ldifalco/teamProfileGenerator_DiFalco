//create variables with require keyword for prompts through inquirer
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
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
                newTeam();
            }
    })}

        
//functions for after choosing a new employee

//Engineer function

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
        .then((answer) => {
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
            engineerArray.push(engineer)
            init()
        })}


    //Intern Function

 


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
            .then((answer) => {
                const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
                internArray.push(intern)
                init()
            })}


        //Manager Function

        

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
                .then((answer) => {
                    const manager = new Manager(answer.name, answer.id, answer.email, answer.office)
                    managerArray.push(manager)
                    init()
                })}
//start generating HTML here
    function generateHtml() {
        let newEngineer = ``;
        let newIntern = ``;
        let newManager = ``;

//html boilerplate code
        let startHtml = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/styles.css">
        </head>
        <body>
        <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">My Team</span>
      </nav>`

//engineer html
    for (let i = 0; i < engineerArray.length; i++) {
        newEngineer += `
        <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h1 class="card-title">Engineer</h1>
            <h4 class="card-text">${engineerArray[i].name}</h4>
          </div>
          <div class="card-body contents">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineerArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineerArray[i].email}">${engineerArray[i].email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineerArray[i].github}" target="_blank">${engineerArray[i].github}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `
    }

//intern html
    for (let i = 0; i < internArray.length; i++) {
        newIntern += `
        <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h1 class="card-title">Intern</h1>
            <h4 class="card-text">${internArray[i].name}</h4>
          </div>
          <div class="card-body contents">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${internArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${internArray[i].email}">${internArray[i].email}</a></li>
              <li class="list-group-item">School: ${internArray[i].school}</li>
            </ul>
          </div>
        </div>
      </div>
    `
    }
//manager html
    for (let i = 0; i < managerArray.length; i++) {
        newManager += `
        <div class="col-sm">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h1 class="card-title">Manager</h1>
            <h4 class="card-text">${managerArray[i].name}</h4>
          </div>
          <div class="card-body contents">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${managerArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${managerArray[i].email}">${managerArray[i].email}</a></li>
              <li class="list-group-item">Office Number: ${managerArray[i].office}</li>
            </ul>
          </div>
        </div>
      </div>
    `
    }

//html closer
    let endHtmlAddJs = `
    </div>
</div>
</body>
<script src="../index.js"></script>
</html>
`
//combine all html components 
return startHtml + newEngineer + newIntern + newManager + endHtmlAddJs
}
//fs function
function newTeam() {
    let data = generateHtml()
    fs.writeFileSync(`team.html`, data, "utf-8", (err)=>{console.error(err)})
}

init();
