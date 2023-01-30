let userListElem = document.querySelector(".userList");

console.log(userListElem);

function renderUser(user) {
  return `
    <li>
      <h3>${user.name.firstname} ${user.name.lastname}</h3>
      <p>${user.email}</p>
    </li>
  `;
}

function renderUserList(users) {
  userListElem.innerHTML = "";
  const htmlArr = users.map(renderUser);
  userListElem.innerHTML = htmlArr.join("");
}

async function getAllUsers() {
  const res = await fetch("https://fakestoreapi.com/users");
  const data = await res.json();

  renderUserList(data);
}

getAllUsers();
