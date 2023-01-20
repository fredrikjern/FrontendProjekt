var quotes = [
  "The best is yet to be.",
  "Try to be a rainbow in someones cloud.",
  "When things go wrong, dont go with them.",
];

var btn = document.getElementById("showQuotesBtn");
var quoteList = document.getElementById("quoteList");

btn.addEventListener("click", function () {
  quoteList.innerHTML = "";
  for (var i = 0; i < quotes.length; i++) {
    var li = document.createElement("li");
    li.innerText = quotes[i];
    quoteList.appendChild(li);
  }
});
