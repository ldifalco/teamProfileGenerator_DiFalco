const Manager = require('../lib/Manager');



describe("Manager", () => {
    describe("getName", () => {
        it("should return the name of the Manager", () => {
            const name = "Name";

            const manager = new Manager(name);

            expect(manager.getName()).toEqual(name);
        })
    });

    describe("getId", () => {
        it("should return the id of the manger", () => {
            const id = "ID";

            const name = "Name"

            const manager = new Manager(name, id);

            expect(manager.getId()).toEqual(id);
        })
    });

    describe("getEmail", () => {
        it("should return the email of the manager", () => {
            const email = "Email";

            const id = "ID";

            const name = "Name"

            const manager = new Manager(name, id, email);

            expect(manager.getEmail()).toEqual(email);
        })
    });

    describe("getOfficeNumber", () => {
        it("should return the officenumber of the manager", () => {
            const officeNumber = "Office Number"; 

            const email = "Email";

            const id = "ID";

            const name = "Name"

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.getOfficeNumber()).toEqual(officeNumber);

        })

    });

    describe("getRole", () => {
        it("should return 'manager'", () => {
            const role = "Manager";

            const manager = new Manager(role);

            expect(manager.getRole()).toEqual(role);
        })
    });
})