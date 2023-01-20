let articles = document.querySelectorAll("article");
let radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    hideArticles();
    showArticle();
  });
});

function showArticle() {
  let checked = document.querySelector('input[type="radio"]:checked');
    articles[checked.value].style.display = "block";
}
function hideArticles() {
  articles.forEach((element) => {
      element.style.display = "none";
  });
}

hideArticles();
showArticle();
