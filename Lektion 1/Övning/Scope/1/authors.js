let authors = [
  'Charles Dickens',
  'Jane Austen',
  'Mark Twain'
]

let btn = document.getElementById('showAuthorsBtn');
let authorList = document.getElementById('authorList');

btn.addEventListener('click', function () {
  authorList.innerHTML = '';
  for (let i = 0; i < authors.length; i++) { 
    let li = document.createElement('li');
    li.innerText = authors[i];
    authorList.appendChild(li);
  }
});
