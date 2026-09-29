// =========================
// EMPLOYEE SEARCH
// =========================

function searchEmployee() {

    let input = document.getElementById("searchEmployee").value.toLowerCase();

    let table = document.getElementById("employeeTable");

    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let id = rows[i].cells[0].textContent.toLowerCase();

        let name = rows[i].cells[1].textContent.toLowerCase();

        if (id.includes(input) || name.includes(input)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }
    }
}


// =========================
// ASSIGN TASK
// =========================

function assignTask() {

    let employee = document.getElementById("employee").value;

    let task = document.getElementById("task").value;

    let deadline = document.getElementById("deadline").value;


    if (employee == "" || task == "" || deadline == "") {

        alert("Please fill all the fields");

        return;
    }


    let table = document.getElementById("taskTable");

    let newRow = table.insertRow();


    let taskID = "T00" + table.rows.length;


    newRow.insertCell(0).innerHTML = taskID;

    newRow.insertCell(1).innerHTML = employee;

    newRow.insertCell(2).innerHTML = task;

    newRow.insertCell(3).innerHTML = deadline;

    newRow.insertCell(4).innerHTML = "Pending";


    alert("Task assigned successfully!");


    document.getElementById("employee").value = "";

    document.getElementById("task").value = "";

    document.getElementById("deadline").value = "";
}
// =========================
// ADMIN LOGIN
// =========================

function login() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;


    if (username == "abcd" && password == "1234") {

        window.location.href = "index.html";

    } else {

        document.getElementById("loginMessage").textContent =
            "Invalid username or password";

    }

}
// =========================
// ADD EMPLOYEE
// =========================

function addEmployee() {

    let id = document.getElementById("employeeID").value;

    let name = document.getElementById("employeeName").value;

    let domain = document.getElementById("employeeDomain").value;

    let email = document.getElementById("employeeEmail").value;


    if (id == "" || name == "" || domain == "" || email == "") {

        alert("Please fill all the fields");

        return;
    }


    let table = document.getElementById("employeeTable");

    let newRow = table.insertRow();


    newRow.insertCell(0).innerHTML = id;

    newRow.insertCell(1).innerHTML = name;

    newRow.insertCell(2).innerHTML = domain;

    newRow.insertCell(3).innerHTML = email;

    newRow.insertCell(4).innerHTML = "Active";


    alert("Employee added successfully!");


    document.getElementById("employeeID").value = "";

    document.getElementById("employeeName").value = "";

    document.getElementById("employeeDomain").value = "";

    document.getElementById("employeeEmail").value = "";

}