const engineerArray = [];
const internArray = [];
const managerArray = [];

function employeesArray (array) {
    for (let i = 0; i < array.length; i++) {
        let newEmployee = array[i].getRole();

        if (newEmployee === 'Engineer') {
            engineerArray.push(array[i]);
        } else if (newEmployee === 'Intern') {
            internArray.push(array[i]);
        } else {
            managerArray.push(array[i]);
        }
    }


    return createHTML(engineerArray, internArray, managerArray);

}

function addEngineer(engineerAnswer) {
return `<div class="card m-3 col-3">
<div class="p-3">
    <h2>${engineerAnswer.name}</h2>
    <h3><i class="fas fa-terminal"></i> ${engineerAnswer.getRole()}</h3>
</div>
<div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineerAnswer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerAnswer.email}">${engineerAnswer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineerAnswer.github}" target="_blank">${engineerAnswer.github}</a></li>
    </ul >
</div>
</div >`
}


function addIntern(internAnswer) {

return `<div class="card m-3 col-3">
<div class="p-3">
    <h2>${internAnswer.name}</h2>
    <h3><i class="fas fa-terminal"></i> ${internAnswer.getRole()}</h3>
</div>
<div>
    <ul class="list-group">
        <li class="list-group-item">ID: ${internAnswer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${internAnswer.email}">${internAnswer.email}</a></li>
        <li class="list-group-item">School: ${internAnswer.school}</li>
    </ul >
</div>
</div >
`

}



function addManager(managerAnswer) {

    return `<div class="card m-3 col-3">
    <div class="p-3">
        <h2>${managerAnswer.name}</h2>
        <h3><i class="fas fa-terminal"></i> ${managerAnswer.getRole()}</h3>
    </div>
    <div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${managerAnswer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerAnswer.email}">${managerAnswer.email}</a></li>
            <li class="list-group-item">Office Number:${managerAnswer.office}</li>
        </ul >
    </div>
</div >
`
}

function generateHtml(manager, engineer, intern) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/e79245cba1.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1 class="text-center py-5">My Team</h1>
            </header>
            <main class="container my-5">
                <div class="row d-flex justify-content-around">
                    ${addEngineer(engineer)}
                    ${addIntern(intern)}
                    ${addManager(manager)}
                </div>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
            </main>
        </body>
    </html>`;

}

module.exports = {employeesArray, generateHtml};











