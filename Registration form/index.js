let personName = document.getElementById('personName');
let email = document.getElementById('email');
let website = document.getElementById('website');
let image = document.getElementById('image');

let container_2 = document.getElementById("container-2");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);
container_2.appendChild(table);
let row_1 = document.createElement("tr");
let heading_1 = document.createElement('th');
heading_1.innerText = "Description";
let heading_2 = document.createElement('th');
heading_2.innerText = "Image";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);

document.getElementById("Submit").addEventListener("click", (e) => {
    e.preventDefault();

    if (personName.value !== null && email.value !== null && website.value !== null && image.value !== null) {
        let radioButtons = document.querySelectorAll('input[name="gender"]');
        let selectedGender;
        for (const checked of radioButtons) {
            if (checked.checked) {
                selectedGender = checked.value;
                break;
            }
        }

        let skills = [];

        let skill = document.querySelectorAll('input[type="checkbox"]:checked');

        for (const checkedSkill of skill) {
            skills.push(checkedSkill.value);
        }

        table.style.display = "block";
        let newRow = document.createElement('tr');
        let newRowData_1 = document.createElement('td');
        newRowData_1.innerHTML = "<p>Name:" + personName.value + "</p><br><p>Email:" + email.value + "</p><br><p>Website :" + website.value + "</p><br><p>Gender:" + selectedGender + "</p><br>Skills:" + skills + "</p>"

        let newRowData_2 = document.createElement('td');
        newRowData_2.innerHTML = "<img src=" + image + ">";

        newRow.appendChild(newRowData_1);
        newRow.appendChild(newRowData_2);
        tbody.appendChild(newRow);
    } else {
        alert("Please fill the values!");
    }
});

document.getElementById("Clear").addEventListener("click", () => {
    personName.value = "";
    email.value = "";
    website.value = "";
    image.value = "";
    skills = [];
    let skill = document.querySelectorAll('input[type="checkbox"]:checked');
    for (const checkedSkill of skill) {
        checkedSkill.checked = false;
    }
    table.style.display = "none";
});

