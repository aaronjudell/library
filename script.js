const myLibrary = [];

function Book(author, title, pages, read, position) {
    // the constructor ...
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.position = position;
}

function addBookToLibrary() {
    const author = document.querySelector('#author').innerText;
    const title = document.querySelector('#title').innerText;
    const pages = document.querySelector('#pages').innerText;
    const read = document.querySelector('#read').innerText;
    const position = myLibrary.length;
    const book = new Book(author, title, pages, read, position);
    myLibrary.push(book);
}

function displayBooks() {
    const library = document.querySelector('.library');

    for(let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].position = i;
        const card = document.createElement('div');
        card.classList.add('card');

        const authorLabel = document.createElement('div');
        authorLabel.classList.add('card-author');
        authorLabel.classList.add('card-label');
        authorLabel.innerText = 'Author: ';
        const authorAnswer = document.createElement('div');
        authorAnswer.classList.add('card-author');
        authorAnswer.classList.add('card-answer');
        authorAnswer.innerText = myLibrary[i].author;

        library.appendChild(card);
        card.appendChild(authorLabel);
        card.appendChild(authorAnswer);
    }
}



book1 = new Book('Jon Smith', 'Clifford the Dog', 273, true, 0);
myLibrary.push(book1);
displayBooks();