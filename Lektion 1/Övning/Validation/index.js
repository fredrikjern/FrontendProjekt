let form = document.getElementById("registerform")
let allRequiredInputs = document.querySelectorAll("input:required")
let errors = document.querySelectorAll(".error");
console.log(allRequiredInputs);
form.addEventListener("submit", (event) => { 
    event.preventDefault();
    allRequiredInputs.forEach((regInput, index) => {
        if (!regInput.checkValidity()) {
            errors[index].style.display = "block";
        }
    });
})
function displayNone() {
    errors.forEach(element => {
        element.style.display = "none";
    }); 
}
displayNone();