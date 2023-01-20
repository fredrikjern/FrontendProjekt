var authors = [
  'Charles Dickens',
  'Jane Austen',
  'Mark Twain'
]

var btn = document.getElementById('showAuthorsBtn');
var authorList = document.getElementById('authorList');

btn.addEventListener('click', function () {
  authorList.innerHTML = '';
  for (var i = 0; i < authors.length; i++) { 
    var li = document.createElement('li');
    li.innerText = authors[i];
    authorList.appendChild(li);
  }
});
