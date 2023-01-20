let welcomeDiv = document.querySelector(".welcome");
let wrongDiv = document.querySelector(".wrong");
let form = document.getElementById("formID");

const USERNAME = "admin";
const PASSWORD = "pass123";

    
welcomeDiv.style.display = "none";
wrongDiv.style.display = "none";
form.addEventListener("submit", (event) => { 
    event.preventDefault();
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");

    if (usernameInput.value === USERNAME && passwordInput.value === PASSWORD) {
        welcomeDiv.style.display = "block";
    } else { 
        wrongDiv.style.display = "block"
        console.log(usernameInput.value +" user");
        console.log(passwordInput.value +" pass");
    }

})

