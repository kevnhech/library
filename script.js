const myLibrary = [];
const flexbox = document.querySelector(".flexbox");

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
  // document.querySelector(".flexbox").innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    if (i != myLibrary.length - 1) {
      continue;
    }

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

    flexbox.appendChild(card);
  }
}

// The Hobbit, J.R.R. Tolkien, 295
// Dracula, Bram Stoker, 418
// The Metamorphosis, Franz Kafka, 70