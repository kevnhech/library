const myLibrary = [];
const flexbox = document.querySelector(".flexbox");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
  for (let i = 0; i < myLibrary.length; i++) {
    if (i != myLibrary.length - 1) {
      continue;
    }

    let card = document.createElement("div");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let bookRead = document.createElement("button");
    let removeBtn = document.createElement("button");

    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = myLibrary[i].author;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    removeBtn.textContent = "Remove";

    if (myLibrary[i].read == "yes") {
      bookRead.textContent = "Read";
    } else {
      bookRead.textContent = "Not Read";
    }

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
    card.appendChild(removeBtn);

    flexbox.appendChild(card);

    bookRead.addEventListener("click", function() {
      if (bookRead.textContent == "Read") {
        bookRead.textContent = "Not Read"
      } else {
        bookRead.textContent = "Read"
      }
    });

    removeBtn.addEventListener("click", function() {
      flexbox.removeChild(card);
    });
  }
}

// The Hobbit, J.R.R. Tolkien, 295
// Dracula, Bram Stoker, 418
// The Metamorphosis, Franz Kafka, 70