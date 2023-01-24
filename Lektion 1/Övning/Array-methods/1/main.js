const validationResult = [
  {
    field: "name",
    error: "Name is too short",
  },
  {
    field: "description",
    error: "Description is too long",
  },
  {
    field: "price",
    error: "Price is not a number",
  },
  {
    field: "terms",
    error: "Terms and conditions are not accepted",
  },
];
let errors = [];
let errorDiv = document.querySelector(".error");
validationResult.forEach((element) => {
  errors.push(element.error + " \n ");
  console.log(element.error); 
});
errorDiv.innerText = errors.join("");
