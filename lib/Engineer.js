const Employee = require("./Employee");

class Engineer extends Employee{
    constructor (name, id, email, github) {
        super( name, id, email)
        this.github = github
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }


}



// const test = [];

// const newMgr = new Manager("Lucas", 1, "yes", 123);
// test.push(newMgr)

// const newEmp = new Employee("Andres", 2, "no");
// test.push(newEmp)

// test.forEach(index => {
//     console.log(index, index.getRole())
// })