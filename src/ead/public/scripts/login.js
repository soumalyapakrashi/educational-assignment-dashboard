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
    selected_button = "admin";
}

const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();

    const httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
        alert("Browser does not support required modern features");
        return false;
    }

    httpRequest.onreadystatechange = () => {
        // If the request has completed
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            // If the request has succeeded. 200 response means transaction is successful
            if(httpRequest.status === 200) {
                console.log(httpRequest.responseText);
            }
        }
    }

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    httpRequest.open("POST", "/login");
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    const data = {
        "email": email,
        "password": password
    }
    httpRequest.send(JSON.stringify(data));
    // httpRequest.send();
});
