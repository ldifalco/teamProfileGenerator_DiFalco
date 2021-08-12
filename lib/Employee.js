//create constructor function for each class 
class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    //class properties 
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail() {
        return this.email;
    }


    getRole() {
        return 'Employee';
    }
}



module.exports = Employee;