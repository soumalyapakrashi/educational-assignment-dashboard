const dotenv = require("dotenv");
const path = require("path");
const Database = require("../Database");
const { v4: uuidv4 } = require("uuid");
const { v1: uuidv1 } = require("uuid");

// Get the configurations from .env file
dotenv.config({
    path: "../server.env"
});


// Function to add data into the database
async function addInitAdmins() {
    const names = ["Dishari Chatterjee", "Santanu Nag"];

    names.forEach(async name => {
        const id = "A-" + uuidv4();
        const picture = uuidv1();
        const temp = path.join(process.env.OBJECT_STORAGE_URL, "pictures", picture) + ".jpeg";
        let finaltemp = "";
        for(const character of temp) {
            if(character == "\\")  finaltemp += "\\\\";
            else  finaltemp += character;
        }

        const data = {
            "ID": id,
            "Name": name,
            "Picture": finaltemp,
            "Position": "Moderator",
            "Phone": "+91 1234-567-890",
            "Email": "someemailid@gmail.com",
            "Password": "password"
        };

        try {
            await Database.insertData("administrator", data);
        } catch(error) {
            console.log(error);
        }
    });
}