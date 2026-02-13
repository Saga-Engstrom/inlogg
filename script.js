const outputBox = document.getElementById("outputBox");
const upperBox = document.getElementById("upperBox");
const middleBox = document.getElementById("middleBox");
const lowerBox = document.getElementById("lowerBox");

//show login box and instructions
function showLogin() {
  const loginlabel = document.createElement("text");
  loginlabel.innerText = "Skriv in ditt användarnamn och lösenord";

  const loginBtn = document.createElement("button");
  loginBtn.innerText = "Logga in";

  let usernameElmnt = document.createElement("input");
  usernameElmnt.setAttribute("placeholder", "Användarnamn");

  let passwordElmnt = document.createElement("input");
  passwordElmnt.setAttribute("placeholder", "Lösenord");
  passwordElmnt.setAttribute("type", "password");

  upperBox.appendChild(loginlabel);
  middleBox.appendChild(usernameElmnt);
  middleBox.appendChild(passwordElmnt);
  middleBox.appendChild(loginBtn);

  loginBtn.addEventListener("click", function () {
    verify(usernameElmnt.value, passwordElmnt.value);
  });
}

//on login click verify user else show no login
function verify(username, password) {
  if (username == "test" && password == "1234") {
    clearPage();
    showLogedin(username);
  } else {
    outputBox.innerHTML = "";

    if (username != "test") {
      const wrongName = document.createElement("text");
      wrongName.innerText = "Fel användarnamn";
      outputBox.appendChild(wrongName);
    }
    if (password != "1234") {
      const wrongPassword = document.createElement("text");
      wrongPassword.innerText = "Fel lösenord";
      outputBox.appendChild(wrongPassword);
    }
  }
}

//on sucssesful login show site and logout option
function showLogedin(username) {
  const logoutBtn = document.createElement("button");
  logoutBtn.innerText = "Logga ut";
  const welcomeText = document.createElement("text");
  welcomeText.innerText = "Välkommen " + username;

  lowerBox.appendChild(logoutBtn);
  middleBox.appendChild(welcomeText);
  logoutBtn.addEventListener("click", function () {
    logingOut();
  });
}

//logout switch to login page
function logingOut() {
  clearPage();
  showLogin();
}

function clearPage() {
  upperBox.innerHTML = "";
  middleBox.innerHTML = "";
  lowerBox.innerHTML = "";
  outputBox.innerHTML = "";
}

showLogin();
