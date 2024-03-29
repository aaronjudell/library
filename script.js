const myLibrary = [];
const library = document.querySelector('.library');
const newBookButton = document.querySelector('.new-book-button');
const addBookButton = document.querySelector('.add-book-button');
const cancelButton = document.querySelector('.cancel-button');
const dialog = document.querySelector('.form-container');
const form = document.querySelector('.book-form');

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

cancelButton.addEventListener('click', () => {
    dialog.close();
});

form.addEventListener('submit', () => {
    addBookToLibrary();
    form.reset();
});


function Book(author, title, pages, read, position) {
    // the constructor ...
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.position = position;

    this.deleteBook = function() {
        myLibrary.splice(this.position,1);
        displayBooks();
    };

    this.changeReadStatus = function() {
        if (this.read === 'Yes') {
            this.read = 'No';
        } else {
            this.read = 'Yes';
        }
        displayBooks();
    }

}

function addBookToLibrary() {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const read = checkReadStatus();
    const position = myLibrary.length;
    const book = new Book(author, title, pages, read, position);
    myLibrary.push(book);
    displayBooks();
}

function checkReadStatus() {
    radio1 = document.querySelector('#read-true');
    radio2 = document.querySelector('#read-false');

    if (radio1.checked) {
        return 'Yes';
    } else {
        return 'No';
    }
}

function displayBooks() {

    library.replaceChildren();

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

        const titleLabel = document.createElement('div');
        titleLabel.classList.add('card-title');
        titleLabel.classList.add('card-label');
        titleLabel.innerText = 'Title: ';
        const titleAnswer = document.createElement('div');
        titleAnswer.classList.add('card-title');
        titleAnswer.classList.add('card-answer');
        titleAnswer.innerText = myLibrary[i].title;

        const pagesLabel = document.createElement('div');
        pagesLabel.classList.add('card-pages');
        pagesLabel.classList.add('card-label');
        pagesLabel.innerText = 'Pages: ';
        const pagesAnswer = document.createElement('div');
        pagesAnswer.classList.add('card-pages');
        pagesAnswer.classList.add('card-answer');
        pagesAnswer.innerText = myLibrary[i].pages;

        const readLabel = document.createElement('div');
        readLabel.classList.add('card-read');
        readLabel.classList.add('card-label');
        readLabel.innerText = 'Read? ';
        const readAnswer = document.createElement('div');
        readAnswer.classList.add('card-read');
        readAnswer.classList.add('card-answer');
        readAnswer.classList.add('read-answer');
        const readAnswerText = document.createElement('div');
        readAnswerText.classList.add('read-answer-text');
        readAnswerText.innerText = myLibrary[i].read;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.innerText = 'Delete Book';

        deleteButton.addEventListener('click', () => {
            myLibrary[i].deleteBook();
            displayBooks();
        })

        const readStatusButton = document.createElement('button');
        readStatusButton.classList.add('readstatus-button')
        readStatusButton.setAttribute('type', 'button');
        readStatusButton.innerText = 'Change Status';

        readStatusButton.addEventListener('click', () => {
            myLibrary[i].changeReadStatus();
        })

        library.appendChild(card);
        card.appendChild(authorLabel);
        card.appendChild(authorAnswer);
        card.appendChild(titleLabel);
        card.appendChild(titleAnswer);
        card.appendChild(pagesLabel);
        card.appendChild(pagesAnswer);
        card.appendChild(readLabel);
        card.appendChild(readAnswer);
        readAnswer.appendChild(readAnswerText);
        readAnswer.appendChild(readStatusButton);
        card.appendChild(deleteButton);
    }
}



book1 = new Book('Jon Smith', 'Clifford the Dog', 273, 'Yes', 0);
book2 = new Book('Jon Arbuckle', 'Garfield', 183, 'No', 1);
myLibrary.push(book1);
myLibrary.push(book2);
displayBooks();