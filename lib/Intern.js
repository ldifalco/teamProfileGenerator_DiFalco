const Employee = require("./Employee");
//create constructor function for each class add unique property with this key word
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
//class properties unqique to Intern
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail() {
        return this.email;
    }


    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';

    }

}

module.exports = Intern;

// const test = [];

// const newMgr = new Manager("Lucas", 1, "yes", 123);
// test.push(newMgr)

// const newEmp = new Employee("Andres", 2, "no");
// test.push(newEmp)

// test.forEach(index => {
//     console.log(index, index.getRole())
// })