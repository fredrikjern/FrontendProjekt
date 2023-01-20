function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  let helpText = [
    { id: "email", help: "Din e-mail adress" },
    { id: "name", help: "Ditt namn" },
    { id: "age", help: "Din ålder (du måste vara över 18)" },
  ];
 
  for (let i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
