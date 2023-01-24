let chatbox = document.querySelector(".chatbox");
let button = document.getElementById("button");
let messList = document.querySelector(".message-list");

button.addEventListener("click", (event) => {
  event.preventDefault();
  chatbox.classList.toggle("hidden");
});

const messages = [
  {
    from: "bot",
    text: "Välkommen till vår chat! Kan jag hjälpa till med något?",
  },
  {
    from: "user",
    text: "Något går fel när jag försöker bekräfta beställningen",
  },
  {
    from: "bot",
    text: 'Det verkar som du inte klickat i "godkänn"-rutan',
  },
];

let html = messages.map()



messages.forEach((message) => {
        fullMess.push(`<li class="${message.from}">${message.text}</li>`);
});
messList.innerHTML = fullMess.join('');



// let fullMess = [];
// messages.forEach((message) => {
//         fullMess.push(`<li class="${message.from}">${message.text}</li>`);
// });
// messList.innerHTML = fullMess.join('');


// messages.forEach((message) => {
  
//     let mess = document.createElement("li");
//     mess.innerText = message.text;
//     if (message.from == "user") {
//         mess.classList.add("user")
//     } else if (message.from == "bot") {
//         mess.classList.add("bot")   
//     }
//   messList.appendChild(mess);
// });