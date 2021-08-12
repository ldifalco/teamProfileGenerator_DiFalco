const Engineer = require('../lib/Engineer');



describe("Engineer", () => {
    describe("getName", () => {
        it("should return the name of the engineer", () => {
            const name = "Name";

            const engineer = new Engineer(name);

            expect(engineer.getName()).toEqual(name);
        })
    });

    describe("getId", () => {
        it("should return the id of the engineer", () => {
            const id = "ID";

            const name = "Name"

            const engineer = new Engineer(name, id);

            expect(engineer.getId()).toEqual(id);
        })
    });

    describe("getEmail", () => {
        it("should return the email of the engineer", () => {
            const email = "Email";

            const id = "ID";

            const name = "Name"

            const engineer = new Engineer(name, id, email);

            expect(engineer.getEmail()).toEqual(email);
        })
    });

    describe("getGithub", () => {
        it("should return the github of the engineer", () => {
            const github = "github"; 

            const email = "Email";

            const id = "ID";

            const name = "Name"

            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getGithub()).toEqual(github);

        })

    });

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const role = "Engineer";

            const engineer = new Engineer(role);

            expect(engineer.getRole()).toEqual(role);
        })
    });
})