const outputBox = document.getElementById("outputBox");
const upperBox = document.getElementById("upperBox");
const middleBox = document.getElementById("middleBox");
const lowerBox = document.getElementById("lowerBox");
const userInfo = [];

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

  const goToRegisterBtn = document.createElement("button");
  goToRegisterBtn.innerText = "Registera dig";

  upperBox.appendChild(loginlabel);
  middleBox.appendChild(usernameElmnt);
  middleBox.appendChild(passwordElmnt);
  middleBox.appendChild(loginBtn);
  lowerBox.appendChild(goToRegisterBtn);

  loginBtn.addEventListener("click", function () {
    verify(usernameElmnt.value, passwordElmnt.value);
  });
  goToRegisterBtn.addEventListener("click", function () {
    register();
  });
}
//on registry click show registry
function register() {
  upperBox.innerHTML = "";
  middleBox.innerHTML = "";
  lowerBox.innerHTML = "";
  outputBox.innerHTML = "";
  console.log("At registry");
  const registerlabel = document.createElement("label");
  registerlabel.innerText =
    "För att registera dig: skriv in ditt användarnamn och lösenord";

  const registerBtn = document.createElement("button");
  registerBtn.innerText = "Registera dig";

  let registerUsernameElmnt = document.createElement("input");
  registerUsernameElmnt.setAttribute("placeholder", "Användarnamn");

  let registerPasswordElmnt = document.createElement("input");
  registerPasswordElmnt.setAttribute("placeholder", "Lösenord");
  registerPasswordElmnt.setAttribute("type", "password");

  upperBox.appendChild(registerlabel);
  middleBox.appendChild(registerUsernameElmnt);
  middleBox.appendChild(registerPasswordElmnt);
  middleBox.appendChild(registerBtn);

  registerBtn.addEventListener("click", function () {
    addToUserInfo(registerUsernameElmnt.value, registerPasswordElmnt.value);
  });
}
//add registry to userinfo object
function addToUserInfo(registerUsername, registerPassword) {
  console.log("username " + registerUsername);
  console.log("password " + registerPassword);
}
//on login click verify user else show no login
function verify(username, password) {
  if (username == "test" && password == "1234") {
    upperBox.innerHTML = "";
    middleBox.innerHTML = "";
    lowerBox.innerHTML = "";
    outputBox.innerHTML = "";
    console.log("Rätt input");
    showLogedin(username);
  } else {
    outputBox.innerHTML = "";

    if (username != "test") {
      const wrongName = document.createElement("text");
      wrongName.innerText = "Fel användarnamn";
      outputBox.appendChild(wrongName);
      console.log("Fel användarnamn");
    }
    if (password != "1234") {
      const wrongPassword = document.createElement("text");
      wrongPassword.innerText = "Fel lösenord";
      outputBox.appendChild(wrongPassword);
      console.log("Fel lösenord");
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
