
class Employee {
    constructor (name, ID, emailAddress) {
    this.name = name;
    this.id = ID;
    this.email = emailAddress;
    }
    getRole() {
        return 'Employee';
    }
}



module.exports = Employee;