const employees = [
  {
    firstname: "John",
    lastname: "Doe",
    role: "Fixer",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    role: "Faxer",
  },
  {
    firstname: "Robin",
    lastname: "Hood",
    role: "Fox",
  },
];
//4. Ändra array
//Titta i 04-mappen, du har en lista med anställda. Skapa en ny array som bara
//innehåller en kombination av för och efternamn
// för varje anställd(['John Doe', 'Jane Doe', 'Robin Hood']).

let firstLastname = [...employees].map(function (employe) {
  return employe.firstname + " " + employe.lastname;
});
console.log(firstLastname);
