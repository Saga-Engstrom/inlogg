const upperBox = document.getElementById("upperBox");
const lowerBox = document.getElementById("lowerBox");
const outputBox = document.getElementById("outputBox");

//show login box and instructions
function showLogin() {
  const loginlabel = document.createElement("label");
  loginlabel.innerText = "Skriv in ditt användarnamn och lösenord";
  const loginBtn = document.createElement("button");
  let usernameElmnt = document.createElement("input");
  let passwordElmnt = document.createElement("input");
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
function verify(userName, password) {
  if (userName == "test" && password == "1234") {
    mainBox.innerHTML = "";
    console.log("Rätt input");
  }
  if (userName != "test") {
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
function showLogedin() {}
//logout screen with 5sek timer then switch to login page
function loggingOut() {}

showLogin();
