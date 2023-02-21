const UPDATE_INTERVAL = 5;
let lastRenderTime = 0;
let gameOver = false;
let gameContainer = document.querySelector(".game-container");

let data = {
  id: "201002fkfk",
  listname: "GameBoard-1",
  player1turn: true,
  itemlist: [
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: false,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: false,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
    {
      _id: "63e386e46828aa94aff34e35",
      checked: false,
      checkedByPlayer1: true,
    },
  ],
};
let itemList = data.itemlist;
let player1turn = data.player1turn;
function main(currentTime) {
  const secondsSinceLastRender = currentTime - lastRenderTime;
  if (secondsSinceLastRender > UPDATE_INTERVAL * 1000 || lastRenderTime === 0) {
    console.log(currentTime);
    console.log(`${UPDATE_INTERVAL}s uppdatering`);
    lastRenderTime = currentTime;
    let player = document.querySelector("input[type='radio']:checked");

    console.log(
      "Its Player: " +
        player.value +
        " playing and its player1s turn : " +
        player1turn
    );
    renderBoard(itemList, player1turn);
  }
  window.requestAnimationFrame(main); // Den kör sig själv
}
window.requestAnimationFrame(main);

function renderBoard(itemList, player1turn) {
  gameContainer.innerHTML = "";
  console.log(itemList);
  itemList.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("square");
    if (item.checked) {
      div.innerHTML = item.checkedByPlayer1 ? "x" : "o";
      div.classList.add("checked");
    } else {
      div.innerHTML = ` ${index}`;
      div.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("klick " + index);
        itemList[index].checked = true;
        itemList[index].checkedByPlayer1 = player1turn ? "x" : "o";
        player1turn = changeTurn(player1turn);
        // Gör en PUT request för att ändra checked och checkedbyplayer1 för aktuellt item.id

        //.then(renderBoard())
      });
      //   squares[i].addEventListener("click", (event) => {
      //     event.preventDefault();
      //     console.log("Eventlistener  :  " + i);
      //     itemList[0][i].checked = true; // API PUT          changeTurn();
      //     itemList[0][i].checkedByPlayer1 = itemList.player1turn
      //       ? true
      //       : false;
      //     changeTurn(itemList);
      //     renderBoard(itemList);
      //     // API PUT          changeTurn();
      //   });
    }
    gameContainer.appendChild(div);
  });
}

function changeTurn(player1turn) {
  player1turn = player1turn ? false : true;
  console.log(player1turn);
  return player1turn;
}
