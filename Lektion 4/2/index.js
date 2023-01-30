let hack = document.querySelector(".hack");
let ul = document.querySelector(".json-test");

// async function getFile() {
//   const res = await fetch("./test.json");
//   let data = await res.json();
//   console.log(data);
//   publishText(data);
// }

// function publishText(data) {
//   ul.innerHTML = "";
//   let finalText = [];
//   data.forEach(element, (index) => {
//     console.log(renderText(element, index));
//     finalText.push(renderText(element, index));
//   });
//   ul.innerHTML = finalText.join("");
// }

// function renderText(text, index) {
//   return `<li> ${text[index].firstname} ${text.lastname} </li>`;
// }

// getFile();



async function getAllUsers() {
  const res = await fetch("./test.json");
  const data = await res.json();
  console.log(data);
  renderUserList(data);
}
function renderUserList(users) {
  console.log(users.employees);
  ul.innerHTML = "";
  const htmlArr = [];
  users.employees.forEach(employee => { 
    console.log(employee);
    htmlArr.push(`
       <li>
  <h3>${employee.firstName} ${employee.lastName}</h3>
  </li>
      `);

  } )
    
  ul.innerHTML = htmlArr.join("");
}

getAllUsers();