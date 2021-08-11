const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, emailAddress, officeNumber) {
        super(name, id, emailAddress)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager';
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