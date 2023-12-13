const myLibrary = [];

function Book(author, title, pages, read) {
    // the constructor ...
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const author = document.querySelector('#author').innerText;
    const title = document.querySelector('#title').innerText;
    const pages = document.querySelector('#pages').innerText;
    const read = document.querySelector('#read').innerText;
    const book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

addBookToLibrary();