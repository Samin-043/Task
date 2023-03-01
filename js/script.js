







function buttonClick() {

    let first_name = document.getElementById("regFirstNameId").innerHTML;
    let last_name = document.getElementById("regLastNameId").innerHTML;
    let email = document.getElementById("regEmailId").innerHTML;
    let password = document.getElementById("regPasswordId").innerHTML;


    let parent_value = document.getElementById("user-list");
    let child_value = document.createElement("div");
    child_value.className = "row user-section";
    child_value.id = "user-section-id";



    let firstName = document.createElement("div");
    firstName.className = "col";
    firstName.innerHTML = first_name;

    let lastName = document.createElement("div");
    lastName.className = "col";
    lastName.innerHTML = last_name;

    let userEmail = document.createElement("div");
    userEmail.className = "col";
    userEmail.innerHTML = email;


    let userPassword = document.createElement("div");
    userPassword.className = "col";
    userPassword.innerHTML = password;




    child_value.appendChild(firstName);
    child_value.appendChild(lastName);
    child_value.appendChild(userEmail)
    child_value.appendChild(userPassword);


    parent_value.appendChild(child_value);

}


