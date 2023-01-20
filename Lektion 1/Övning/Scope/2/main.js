const messages = [
  {
    time: "10:12",
    from: "bot",
    text: "Välkommen till vår chat! Kan jag hjälpa till med något?",
  },
  {
    time: "10:14",
    from: "user",
    text: "Något går fel när jag försöker bekräfta beställningen",
  },
  {
    time: "10:20",
    from: "bot",
    text: 'Det verkar som du inte klickat i "godkänn"-rutan',
  },
];

function getLastMessage(arr) {
  arr.reverse();
  return arr[0].text;
}

const latestMessageHolder = document.getElementById("latestMessage");
const showAllMessagesBtn = document.getElementById("showAllMessagesBtn");
const allMessagesList = document.getElementById("allMessages");

latestMessageHolder.innerText = getLastMessage(messages);

showAllMessagesBtn.addEventListener("click", function () {
  messages.forEach(function (message) {
    const li = document.createElement("li");
    li.innerText = `${message.time}: ${message.text}`;
    allMessagesList.appendChild(li);
  });
});
