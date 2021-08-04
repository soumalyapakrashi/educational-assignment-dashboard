
function student_show()
{
    document.getElementById('Student').style.display = "block";
    document.getElementById('stud').style.backgroundColor= "white";
    document.getElementById('Professor').style.display = "none";
    document.getElementById('prof').style.backgroundColor= "#cac7c7";
    document.getElementById('Administrator').style.display = "none";
    document.getElementById('admin').style.backgroundColor= "#cac7c7";
}

function professor_show()
{
    document.getElementById('Student').style.display = "none";
    document.getElementById('stud').style.backgroundColor= "#cac7c7";
    document.getElementById('Professor').style.display = "block";
    document.getElementById('prof').style.backgroundColor= "white";
    document.getElementById('Administrator').style.display = "none";
    document.getElementById('admin').style.backgroundColor= "#cac7c7";
}

function administrator_show()
{
    document.getElementById('Student').style.display = "none";
    document.getElementById('stud').style.backgroundColor= "#cac7c7";
    document.getElementById('Professor').style.display = "none";
    document.getElementById('prof').style.backgroundColor= "#cac7c7";
    document.getElementById('Administrator').style.display = "block";
    document.getElementById('admin').style.backgroundColor= "white";
}