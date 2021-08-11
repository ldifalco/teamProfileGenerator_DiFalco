const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, emailAddress, school) {
        super(name, id, emailAddress)
        this.school = school
    }

    getRole {
        return 'Intern';

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