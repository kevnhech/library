const defaultDomState = document.body.innerHTML;
const body = document.querySelector("body");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read == 'yes') {
      return `${title} by ${author}, ${pages} pages, read`
    } else {
      return `${title} by ${author}, ${pages} pages, not read yet`
    }
  }
}

function addBookToLibrary() {
  let bookTitle = prompt("What is the title of the book?");
  let bookAuthor = prompt("Who is the author?");
  let bookPages = prompt("How many pages?");
  let bookRead = prompt("Have you read it?");
  let userBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(userBook);

  displayLibrary();
}

function displayLibrary() {
  document.body.innerHTML = defaultDomState;
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let bookInfo = document.createElement("p");

    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = myLibrary[i].author;
    bookPages.textContent = myLibrary[i].pages;
    bookInfo.textContent = myLibrary[i].info();

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookInfo);

    body.appendChild(card);
  }
}

// The Hobbit, J.R.R. Tolkien, 295
// Dracula, Bram Stoker, 418
// The Metamorphosis, Franz Kafka, 70

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”.