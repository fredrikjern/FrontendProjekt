let customfield = "Pryl 1";
let newListName = document.getElementById('newListName')
let newListButton = document.querySelector(".newListButton");
let addItemButton = document.querySelector(".addItemButton");
newListButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("klixk");
    let listname = getInputValue('newlistName');
    console.log(listname);

});

async function createListAPI(listname) {
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listname: listname,
        customfield: customfield,
      }),
    }
  );
    const { list } = await res.json();
    return list
}

async function getList(listname) {
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/listsearch?listname=${listname}`
  );
  const data = await res.json();
}
function addItem(id) {
  let item = getInputValue(id);
  console.log(item);
  //createList(listname)
}
function getInputValue(id) {
  let text = document.getElementById(id).value;
  return text;
}
