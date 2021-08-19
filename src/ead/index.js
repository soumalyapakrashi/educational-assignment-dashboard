const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const Database = require("./Database");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const bodyParser = require("body-parser");


// Get the configurations from .env file
dotenv.config({
    path: "./server.env"
});

// Setup and connect to the database
Database.init(
    process.env.EAD_MYSQL_HOST,
    process.env.EAD_MYSQL_USER,
    process.env.EAD_MYSQL_PASSWORD,
    process.env.EAD_MYSQL_DATABASE
).then(resolve => console.log("Database connected"))
.catch(reject => console.log(reject));

// Create a new express app
const app = express();

// Setup a port where the server will listen for incoming connections
const PORT = process.env.PORT;

// Connect the session store
const session_store = new MySQLStore({}, Database.databaseConnection);

const json_parser = bodyParser.json();

// Use express-sessions as a middleware for managing sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}));


// Set the main route
app.get("/", (request, response) => {
    console.log(request.params);
    // If the user is not logged in, email field will not be present.
    // Then we will show the main login page
    if(!request.session.email) {
        response.sendFile(path.join(__dirname, "public", "index.html"));
    }

    else {
        const email = request.session.email;
        response.send("<h1>Welcome " + email + "</h1>");
    }
});


// Set the route for serving CSS files
app.get("/*.css", (request, response) => {
    // Get the CSS filename from the URL
    const url_components = request.url.split("/");
    const filename = url_components[url_components.length - 1];

    // Serve the css file
    response.sendFile(path.join(__dirname, "public", "stylesheets", filename));
});


// Set the route for serving JS files
app.get("/*.js", (request, response) => {
    // Get the CSS filename from the URL
    const url_components = request.url.split("/");
    const filename = url_components[url_components.length - 1];

    // Serve the js file
    response.sendFile(path.join(__dirname, "public", "scripts", filename));
});

app.post("/login", json_parser, (request, response) => {
    console.log(request.body);
    response.send("Hello World");
});


// Start the server
app.listen(PORT, console.log("Server running"));
