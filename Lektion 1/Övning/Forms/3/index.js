let kitchen = document.getElementById("kitchen")
let bathroom = document.getElementById("bathroom")
let room = document.getElementById("room")
let form = document.getElementById("formID");
kitchen.style.display = "none";
bathroom.style.display = "none";


room.addEventListener("change", () => { 
    
    if (room.value === "kitchen") {
        kitchen.style.display = "block";
        bathroom.style.display = "none";
        
    } if (room.value === "bathroom") {
        kitchen.style.display = "none";
        bathroom.style.display = "block";
        
     }

})

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    let inputs = document.querySelectorAll('input[type="checkbox"]:checked');
    inputs.forEach(element => {
        toppings += element.value +"\n";
    });
    console.log(toppings);
    alert(toppings)
})

