const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";
i = 0;
async function getData() {
  const res = await fetch(`${API_BASE}listsearch?listname=`);
  const data = await res.json();

  data.forEach((thing) => {
    let a = containsSixDigitsOnly(thing.listname);
    if (a) {
        console.log(a);
        setTimeout(() => {
            deleteGame(thing._id)
            
        }, 1.5*i);
        i++ 
    }
  });
}

function containsSixDigitsOnly(str) {
  return /^\d{6}$/.test(str);
}
async function deleteGame(gameID) {
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists/${gameID}`,
    {
      method: "DELETE",
    }
  );
}

