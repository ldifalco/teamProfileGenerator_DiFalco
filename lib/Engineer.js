const Employee = require("./Employee");

class Engineer extends Employee{
    constructor (name, ID, emailAddress, github){
        super( name, ID, emailAddress)
        this.github = github
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