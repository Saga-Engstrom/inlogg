const outputBox = document.getElementById("outputBox");
const upperBox = document.getElementById("upperBox");
const middleBox = document.getElementById("middleBox");
const lowerBox = document.getElementById("lowerBox");
const userInfo = [];
const localStorageKey = "loggedInUsername";

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
    verifyUserInfo(usernameElmnt.value, passwordElmnt.value);
  });

  goToRegisterBtn.addEventListener("click", function () {
    clearPage();
    register();
  });
}
//on registry click show registry
function register() {
  const registerlabel = document.createElement("text");
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
  userInfo.push({
    username: registerUsername,
    password: registerPassword,
  });
  clearPage();
  showLogin();
}

function verifyUserInfo(username, password) {
  let hasUsername = false;
  let hasCorrectPassword = false;
  for (user of userInfo) {
    if (user.username === username) {
      hasUsername = true;
      if (user.password === password) {
        hasCorrectPassword = true;
        break;
      }
    }
  }

  if (hasUsername && hasCorrectPassword) {
    clearPage();
    showLogedin(username);
    localStorage.setItem(localStorageKey, username);
  } else {
    outputBox.innerHTML = "";

    if (!hasUsername) {
      const wrongName = document.createElement("text");
      wrongName.innerText = "Användaren finns inte";
      outputBox.appendChild(wrongName);
    } else if (!hasCorrectPassword) {
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
  localStorage.clear();
}

function clearPage() {
  upperBox.innerHTML = "";
  middleBox.innerHTML = "";
  lowerBox.innerHTML = "";
  outputBox.innerHTML = "";
}

let localStorageUser = localStorage.getItem(localStorageKey);
if (localStorageUser != null) {
  showLogedin(localStorageUser);
} else {
  showLogin();
}
