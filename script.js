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
    let buttonRow = document.createElement("div");
    let bookRead = document.createElement("button");
    let removeBtn = document.createElement("button");


    card.setAttribute("class", "book");
    bookTitle.style.fontWeight = "700";

    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = myLibrary[i].author;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    removeBtn.textContent = "Remove";

    if (myLibrary[i].read == "yes") {
      bookRead.textContent = "Read";
      bookRead.style.backgroundColor = "lime"
      bookRead.style.color = "black"
    } else {
      bookRead.textContent = "Not Read";
      bookRead.style.backgroundColor = "red";
      bookRead.style.color = "white";
    }

    buttonRow.appendChild(bookRead);
    buttonRow.appendChild(removeBtn);

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(buttonRow);

    flexbox.appendChild(card);

    bookRead.addEventListener("click", function() {
      if (bookRead.textContent == "Read") {
        bookRead.textContent = "Not Read"
        bookRead.style.backgroundColor = "red";
        bookRead.style.color = "white";
      } else {
        bookRead.textContent = "Read"
        bookRead.style.backgroundColor = "lime"
        bookRead.style.color = "black"
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