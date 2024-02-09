let users = []


function signup() {

    let userdata = {}

    let name = document.getElementById("name").value;
    if(name === '') {
        document.getElementById("signup-name-field").style.display = "revert"  
    } else {
        document.getElementById("signup-name-field").style.display = "none"
        userdata.name = name;
    }

    let email = document.getElementById("sign-up-email").value;
    if(email === '') {
        document.getElementById("signup-email-field").style.display = "revert" 
    } else {
        document.getElementById("signup-email-field").style.display = "none"
        userdata.email = email;
    }

    let password = document.getElementById("sign-up-password").value;
    if(password === '') {
        document.getElementById("signup-password-field").style.display = "revert" 
    } else {
        document.getElementById("signup-password-field").style.display = "none"
        userdata.password = password;
    }

    let age = document.getElementById("age").value;
    if(age === '') {
        document.getElementById("age-field").style.display = "revert" 
    } else {
        document.getElementById("age-field").style.display = "none"
        userdata.age = age;
    }

    let gender;
    let genderChecked = document.getElementsByName("gender");
    for (let i = 0; i < genderChecked.length; i++) {
        if (genderChecked[i].checked) {
            gender = genderChecked[i].value;
            break;
        }
    }

        userdata.gender = gender;

    if(name !== '' && email !== '' && password !== '' && age !=='') {
    users.push(userdata);
    clearFormFields()
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

    let loginuser = {}

    let email = document.getElementById("login-email").value
    if(email === '') {
        document.getElementById("login-email-field").style.display = "revert"  
    } else {
        document.getElementById("login-email-field").style.display = "none"
        loginuser.email = email;
    }

    let password = document.getElementById("login-password").value
    if(password === '') {
        document.getElementById("login-password-field").style.display = "revert"  
    } else {
        document.getElementById("login-password-field").style.display = "none"
        loginuser.password = password;
    }

    console.log(loginuser)

    for(let i = 0; i< users.length; i++){
        if(users[i].email == loginuser.email && users[i].password == loginuser.password) {
            document.getElementById("login-error").style.display = "none"
            UserName = users[i].name;
            alert("Welcome, " + UserName);
            break;            
        } else {
            document.getElementById("login-error").style.display = "revert"
        }
     }

}