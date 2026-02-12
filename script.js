const upperBox = document.getElementById("upperBox");
const middleBox = document.getElementById("middleBox");
const lowerBox = document.getElementById("lowerBox");

//show login box and instructions
function showLogin() {
  const loginlabel = document.createElement("label");
  loginlabel.innerText = "Skriv in ditt användarnamn och lösenord";

  const loginBtn = document.createElement("button");
  loginBtn.innerText = "Logga in";

  let usernameElmnt = document.createElement("input");
  usernameElmnt.setAttribute("placeholder", "Användarnamn");

  let passwordElmnt = document.createElement("input");
  passwordElmnt.setAttribute("placeholder", "Lösenord");
  passwordElmnt.setAttribute("type", "password");

  const registerBtn = document.createElement("button");
  registerBtn.innerText = "Registera dig";

  upperBox.appendChild(loginlabel);
  middleBox.appendChild(usernameElmnt);
  middleBox.appendChild(passwordElmnt);
  middleBox.appendChild(loginBtn);
  lowerBox.appendChild(registerBtn);

  loginBtn.addEventListener("click", function () {
    verify(usernameElmnt.value, passwordElmnt.value);
  });
}
//on login click verify user else show no login
function verify(username, password) {
  if (username == "test" && password == "1234") {
    upperBox.innerHTML = "";
    middleBox.innerHTML = "";
    lowerBox.innerHTML = "";
    console.log("Rätt input");
    showLogedin(username);
  }

  upperBox.innerHTML = "";
  middleBox.innerHTML = "";
  lowerBox.innerHTML = "";
  showLogin();

  if (username != "test") {
    const wrongName = document.createElement("text");
    wrongName.innerText = "Fel användarnamn";
    lowerBox.appendChild(wrongName);
    console.log("Fel användarnamn");
  }
  if (password != "1234") {
    const wrongPassword = document.createElement("text");
    wrongPassword.innerText = "Fel lösenord";
    lowerBox.appendChild(wrongPassword);
    console.log("Fel lösenord");
  }
}

//on sucssesful login show site and logout option
function showLogedin(username) {
  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "Logga ut";
  const welcomeText = document.createElement("text");
  welcomeText.innerText = "Välkommen " + username;

  upperBox.appendChild(logoutBtn);
  middleBox.appendChild(welcomeText);
  console.log("Login");
  logoutBtn.addEventListener("click", function () {
    logingOut();
  });
}

//logout switch to login page
function logingOut() {
  upperBox.innerHTML = "";
  middleBox.innerHTML = "";
  lowerBox.innerHTML = "";

  showLogin();
}

showLogin();
