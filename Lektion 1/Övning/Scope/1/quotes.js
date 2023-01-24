let quotes = [
  "The best is yet to be.",
  "Try to be a rainbow in someones cloud.",
  "When things go wrong, dont go with them.",
];

let btn = document.getElementById("showQuotesBtn");
let quoteList = document.getElementById("quoteList");

btn.addEventListener("click", function () {
  quoteList.innerHTML = "";
  for (let i = 0; i < quotes.length; i++) {
    let li = document.createElement("li");
    li.innerText = quotes[i];
    quoteList.appendChild(li);
  }
});
