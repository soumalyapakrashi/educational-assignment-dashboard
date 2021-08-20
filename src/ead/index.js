const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const Database = require("./Database");
const session = require("express-session");
const bodyParser = require("body-parser");


// Get the configurations from .env file
dotenv.config({
    path: "./server.env"
});

// Setup and connect to the database
// This takes in the hostname, user, password and database name as arguments
// On successful connection, this prints "Database connected" to the console.
// On unsuccessful connection, this prints the error details to the console.
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

// Setup body-parser for parsing JSON data
const json_parser = bodyParser.json();

// Use express-sessions as a middleware for managing sessions
// The secret key is used to encrypt the cookies
// The resave key says whether the cookie should be saved back to the client even if the session is not modified
// Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}));


// Set the main route
app.get("/", (request, response) => {
    // If the user is not logged in, email field will not be present.
    // Then we will show the main login page
    if(!request.session.email) {
        response.sendFile(path.join(__dirname, "public", "index.html"));
    }

    // If the user is logged in, then redirect to the dashboard route
    else {
        response.redirect("/dashboard");
    }
});


app.get("/dashboard", (request, response) => {
    // If user is not logged in, redirect to main route (/)
    if(!request.session.email) {
        response.redirect("/");
    }

    else {
        response.sendFile(path.join(__dirname, "public", "dashboard.html"));
    }
});


app.get("/classroom", (request, response) => {
    if(!request.session.email) {
        response.redirect("/");
    }

    else  response.sendFile(path.join(__dirname, "public", "classroom.html"));
});


app.get("/whiteboard", (request, response) => {
    if(!request.session.email) {
        response.redirect("/");
    }

    else  response.sendFile(path.join(__dirname, "public", "whiteboard.html"));
});


app.get("/syllabus", (request, response) => {
    if(!request.session.email) {
        response.redirect("/");
    }

    else  response.sendFile(path.join(__dirname, "public", "syllabus.html"));
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
    // Get the JS filename from the URL
    const url_components = request.url.split("/");
    const filename = url_components[url_components.length - 1];

    // Serve the js file
    response.sendFile(path.join(__dirname, "public", "scripts", filename));
});


// Route for handling POST requests during login. This is used by AJAX from frontend.
// The additional 2nd argument of 'json_parser' is given to decode the message body of the POST request.
app.post("/login", json_parser, (request, response) => {
    // Query the database with the entered email and password
    Database.findData(`SELECT * FROM ${request.body.user} WHERE email='${request.body.email}' AND password='${request.body.password}';`)
    .then(result => {
        // If an entry with the given email and password is not found in the corresponding table, that means that the credentials
        // are incorrect.
        if(result.length === 0)  response.send("Incorrect credentials");
        // If credentials are correct, then set the email entered in the cookie
        else {
            request.session.email = request.body.email;
            response.send("Success");
        }
    });
});

// Route for hadling logout request from client
app.get("/logout", (request, response) => {
    // If email is not set in cookie, that means that user is not logged in. In that case, redirect to home route.
    if(!request.session.email) {
        response.redirect("/");
    }

    // If user is logged in, then set the email in cookie to null. This would mean that user is no longer logged in.
    else {
        request.session.email = null;
        response.redirect("/");
    }
})


// Start the server.
// Upon a successful start, print "Server running" to the console.
app.listen(PORT, console.log("Server running"));
