const users = [];
function signup() {
    const userdata = {}; // Используем Partial, потому что сначала объект может быть не полностью заполнен
    const name = document.getElementById("name").value;
    if (name === '') {
        document.getElementById("signup-name-field").style.display = "revert";
    }
    else {
        document.getElementById("signup-name-field").style.display = "none";
        userdata.name = name;
    }
    const email = document.getElementById("sign-up-email").value;
    if (email === '') {
        document.getElementById("signup-email-field").style.display = "revert";
    }
    else {
        document.getElementById("signup-email-field").style.display = "none";
        userdata.email = email;
    }
    const password = document.getElementById("sign-up-password").value;
    if (password === '') {
        document.getElementById("signup-password-field").style.display = "revert";
    }
    else {
        document.getElementById("signup-password-field").style.display = "none";
        userdata.password = password;
    }
    const age = document.getElementById("age").value;
    if (age === '') {
        document.getElementById("age-field").style.display = "revert";
    }
    else {
        document.getElementById("age-field").style.display = "none";
        userdata.age = age;
    }
    const genderChecked = document.getElementsByName("gender");
    genderChecked.forEach((input) => {
        const genderInput = input;
        if (genderInput.checked) {
            userdata.gender = genderInput.value;
        }
    });
    if (name && email && password && age) {
        users.push(userdata); // Теперь мы уверены, что объект заполнен, приводим тип
        clearFormFields();
    }
    console.log(users);
}
function clearFormFields() {
    document.getElementById("name").value = "";
    document.getElementById("sign-up-email").value = "";
    document.getElementById("sign-up-password").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender-male").checked = true; // По умолчанию выбираем "Мale"
}
function login() {
    const loginuser = {};
    const email = document.getElementById("login-email").value;
    if (email === '') {
        document.getElementById("login-email-field").style.display = "revert";
    }
    else {
        document.getElementById("login-email-field").style.display = "none";
        loginuser.email = email;
    }
    const password = document.getElementById("login-password").value;
    if (password === '') {
        document.getElementById("login-password-field").style.display = "revert";
    }
    else {
        document.getElementById("login-password-field").style.display = "none";
        loginuser.password = password;
    }
    console.log(loginuser);
    for (const user of users) {
        if (user.email === loginuser.email && user.password === loginuser.password) {
            document.getElementById("login-error").style.display = "none";
            const UserName = user.name;
            alert("Welcome, " + UserName);
            break;
        }
        else {
            document.getElementById("login-error").style.display = "revert";
        }
    }
}
