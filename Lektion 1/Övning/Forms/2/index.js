


let form = document.getElementById("formID");
let toppings = "";

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    let inputs = document.querySelectorAll('input[type="checkbox"]:checked');
    inputs.forEach(element => {
        toppings += element.value +"\n";
    });
    console.log(toppings);
    alert(toppings)
})

