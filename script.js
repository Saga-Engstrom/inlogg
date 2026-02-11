const upperBox = document.getElementById("upperBox");
const lowerBox = document.getElementById("lowerBox");

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
    upperBox.innerHTML = "";
    lowerBox.innerHTML = "";
    console.log("Rätt input");
  } else if (userName != "test") {
    console.log("Fel användarnamn");
  } else if (password != "1234") {
    console.log("Fel lösenord");
  } else {
    console.log("invalid");
  }

  console.log("username:" + userName + ", password:" + password);
}
//on sucssesful login show site and logout option
function showLogedin() {}
//logout screen with 5sek timer then switch to login page
function loggingOut() {}

showLogin();
