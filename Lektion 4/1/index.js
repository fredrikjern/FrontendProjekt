let hack = document.querySelector(".hack");

async function getFile() {
    const res = await fetch('./hej.txt');
    let data = await res.text();
    publishText(data);
}

function publishText(text) {
    hack.innerHTML = "";
    let finalText = renderText(text);
    hack.innerHTML = finalText;
}

function renderText(text) {
  return `<p> ${text} </p>`;
}

getFile();