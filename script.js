const myLibrary = [];

function Book(author, title, pages, read) {
    // the constructor ...
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('Joe Smith', 'The Woods', 342, true);
const book2 = new Book('Fred Flinstone', 'The Flinstones', 849, false);

addBookToLibrary(book1);
addBookToLibrary(book2);