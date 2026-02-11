const upperBox = document.getElementById("upperBox");
const lowerBox = document.getElementById("lowerBox");
const outputBox = document.getElementById("outputBox");

//show login box and instructions
function showLogin() {
  const loginlabel = document.createElement("label");
  loginlabel.innerText = "Skriv in ditt användarnamn och lösenord";
  const loginBtn = document.createElement("button");
  let usernameElmnt = document.createElement("input");
  usernameElmnt.setAttribute("placeholder", "Användarnamn");
  let passwordElmnt = document.createElement("input");
  passwordElmnt.setAttribute("placeholder", "Lösenord");
  passwordElmnt.setAttribute("type", "password");
  loginBtn.innerText = "Login";

  upperBox.appendChild(loginlabel);
  lowerBox.appendChild(usernameElmnt);
  lowerBox.appendChild(passwordElmnt);
  lowerBox.appendChild(loginBtn);

  loginBtn.addEventListener("click", function () {
    verify(usernameElmnt.value, passwordElmnt.value);
  });
}
//on login click verify user else show no login
function verify(username, password) {
  if (username == "test" && password == "1234") {
    upperBox.innerHTML = "";
    lowerBox.innerHTML = "";
    outputBox.innerHTML = "";
    console.log("Rätt input");
    showLogedin(username);
  }
  if (username != "test") {
    const wrongName = document.createElement("text");
    wrongName.innerText = "Fel användarnamn";
    outputBox.appendChild(wrongName);
    console.log("Fel användarnamn");
  } else if (password != "1234") {
    const wrongPassword = document.createElement("text");
    wrongPassword.innerText = "Fel lösenord";
    outputBox.appendChild(wrongPassword);
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
  lowerBox.appendChild(welcomeText);
  console.log("Login");
  logoutBtn.addEventListener("click", function () {
    logingOut();
  });
}

//logout switch to login page
function logingOut() {
  upperBox.innerHTML = "";
  lowerBox.innerHTML = "";
  outputBox.innerHTML = "";

  showLogin();
}

showLogin();
