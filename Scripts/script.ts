interface User {
    name: string;
    email: string;
    password: string;
    age: string;
    gender?: string; // Может быть не определен, если не выбран
  }
  
  const users: User[] = [];
  
  function signup(): void {
    const userdata: Partial<User> = {}; // Используем Partial, потому что сначала объект может быть не полностью заполнен
  
    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    if (name === '') {
      (document.getElementById("signup-name-field") as HTMLElement).style.display = "revert";
    } else {
      (document.getElementById("signup-name-field") as HTMLElement).style.display = "none";
      userdata.name = name;
    }
  
    const email: string = (document.getElementById("sign-up-email") as HTMLInputElement).value;
    if (email === '') {
      (document.getElementById("signup-email-field") as HTMLElement).style.display = "revert";
    } else {
      (document.getElementById("signup-email-field") as HTMLElement).style.display = "none";
      userdata.email = email;
    }
  
    const password: string = (document.getElementById("sign-up-password") as HTMLInputElement).value;
    if (password === '') {
      (document.getElementById("signup-password-field") as HTMLElement).style.display = "revert";
    } else {
      (document.getElementById("signup-password-field") as HTMLElement).style.display = "none";
      userdata.password = password;
    }
  
    const age: string = (document.getElementById("age") as HTMLInputElement).value;
    if (age === '') {
      (document.getElementById("age-field") as HTMLElement).style.display = "revert";
    } else {
      (document.getElementById("age-field") as HTMLElement).style.display = "none";
      userdata.age = age;
    }
  
    const genderChecked: NodeList = document.getElementsByName("gender");
    genderChecked.forEach((input: Node) => {
      const genderInput = input as HTMLInputElement;
      if (genderInput.checked) {
        userdata.gender = genderInput.value;
      }
    });
  
    if (name && email && password && age) {
      users.push(userdata as User); // Теперь мы уверены, что объект заполнен, приводим тип
      clearFormFields();
    }
  
    console.log(users);
  }
  
  function clearFormFields(): void {
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("sign-up-email") as HTMLInputElement).value = "";
    (document.getElementById("sign-up-password") as HTMLInputElement).value = "";
    (document.getElementById("age") as HTMLInputElement).value = "";
    (document.getElementById("gender-male") as HTMLInputElement).checked = true; // По умолчанию выбираем "Мale"
  }
  
  function login(): void {
    const loginuser: { email?: string; password?: string } = {};
  
    const email: string = (document.getElementById("login-email") as HTMLInputElement).value;
    if (email === '') {
      (document.getElementById("login-email-field") as HTMLElement).style.display = "revert";
    } else {
      (document.getElementById("login-email-field") as HTMLElement).style.display = "none";
      loginuser.email = email;
    }
  
    const password: string = (document.getElementById("login-password") as HTMLInputElement).value;
    if (password === '') {
      (document.getElementById("login-password-field") as HTMLElement).style.display = "revert";
    } else {
      (document.getElementById("login-password-field") as HTMLElement).style.display = "none";
      loginuser.password = password;
    }
  
    console.log(loginuser);
  
    for (const user of users) {
      if (user.email === loginuser.email && user.password === loginuser.password) {
        (document.getElementById("login-error") as HTMLElement).style.display = "none";
        const UserName: string = user.name;
        alert("Welcome, " + UserName);
        break;
      } else {
        (document.getElementById("login-error") as HTMLElement).style.display = "revert";
      }
    }
  }