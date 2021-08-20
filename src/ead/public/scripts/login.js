let selected_button = "student";

function student_show() {
    document.getElementById('Student').style.display = "block";
    document.getElementById('stud').style.backgroundColor= "white";
    document.getElementById('Professor').style.display = "none";
    document.getElementById('prof').style.backgroundColor = "#cac7c7";
    document.getElementById('Administrator').style.display = "none";
    document.getElementById('admin').style.backgroundColor= "#cac7c7";
    selected_button = "student";
}

function professor_show() {
    document.getElementById('Student').style.display = "none";
    document.getElementById('stud').style.backgroundColor= "#cac7c7";
    document.getElementById('Professor').style.display = "block";
    document.getElementById('prof').style.backgroundColor= "white";
    document.getElementById('Administrator').style.display = "none";
    document.getElementById('admin').style.backgroundColor= "#cac7c7";
    selected_button = "professor";
}

function administrator_show() {
    document.getElementById('Student').style.display = "none";
    document.getElementById('stud').style.backgroundColor= "#cac7c7";
    document.getElementById('Professor').style.display = "none";
    document.getElementById('prof').style.backgroundColor= "#cac7c7";
    document.getElementById('Administrator').style.display = "block";
    document.getElementById('admin').style.backgroundColor= "white";
    selected_button = "administrator";
}

// Get the form element and intercept the submit event.
const form = document.querySelector("form");
form.addEventListener("submit", event => {
    // Prevent the form from auto-submitting
    event.preventDefault();

    const httpRequest = new XMLHttpRequest();

    // This check is required for browsers which does not support AJAX
    if(!httpRequest) {
        alert("Browser does not support required modern features");
        return false;
    }

    httpRequest.onreadystatechange = () => {
        // If the request has completed
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            // If the request has succeeded. 200 response means transaction is successful
            if(httpRequest.status === 200) {
                // If incorrect credentials are given, show an alert
                if(httpRequest.responseText === "Incorrect credentials")
                    alert("Incorrect Credentials");
                // If correct credentials are given, go to the dashboard page
                else if(httpRequest.responseText === "Success") {
                    location.href = "/dashboard";
                }
            }
        }
    }

    // Get the email and password from the form
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Specify which method is used to send the request and where to send it
    httpRequest.open("POST", "/login");
    // Set the required headers because JSON data is being transferred
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    // Construct the required JSON data
    const data = {
        "user": selected_button,
        "email": email,
        "password": password
    }
    // Send the JSON data as a string
    httpRequest.send(JSON.stringify(data));
});
