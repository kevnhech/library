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
  for (let i = 0; i < myLibrary.length; i++) {
    if (i != myLibrary.length - 1) {
      continue;
    }

    let card = document.createElement("div");
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let bookInfo = document.createElement("p");
    let removeBtn = document.createElement("button");

    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = myLibrary[i].author;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    bookInfo.textContent = myLibrary[i].info();
    removeBtn.textContent = "Remove"

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookInfo);
    card.appendChild(removeBtn);

    flexbox.appendChild(card);

    removeBtn.addEventListener("click", function() {
      myLibrary.splice(myLibrary.indexOf(myLibrary[i]), 1);
      flexbox.removeChild(flexbox.childNodes[i]);
    });
  }
}

// add an event listener for remove buttons that removes the current book from the array and webpage

// Add a button on each book's display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// The Hobbit, J.R.R. Tolkien, 295
// Dracula, Bram Stoker, 418
// The Metamorphosis, Franz Kafka, 70