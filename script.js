const myLibrary = [];
const flexbox = document.querySelector(".flexbox");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  static addBook() {
    const newBookBtn = document.querySelector(".primary-btn");
    const form = document.querySelector("form");

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    title.addEventListener("input", (event) => {
      if (title.validity.valueMissing) {
        title.setCustomValidity("I am expecting a title of a book!");
      } else {
        title.setCustomValidity("");
      }
    });

    author.addEventListener("input", (event) => {
      if (author.validity.valueMissing) {
        author.setCustomValidity("I am expecting an author name!");
      } else {
        author.setCustomValidity("");
      }
    });

    pages.addEventListener("input", (event) => {
      if (pages.validity.valueMissing) {
        pages.setCustomValidity("Please enter the amount of pages this book has.");
      } else {
        pages.setCustomValidity("");
      }
    });

    newBookBtn.addEventListener("click", (event) => {
      if (form.classList.value == "hidden") {
        form.className = "";
      } else {
        form.className = "hidden";
      }

      title.value = "";
      author.value = "";
      pages.value = "";
      read.checked = false;
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const submitBtn = document.querySelector(".form-btn");

    submitBtn.addEventListener("click", (event) => {
      if (!title.validity.valueMissing && !author.validity.valueMissing && !pages.validity.valueMissing) {
        myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
        Book.displayLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
        read.checked = false;
        form.className = "hidden";
      }
    });
  }

  static displayLibrary() {
    flexbox.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
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
  
      if (myLibrary[i].read == true) {
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
  
      bookRead.addEventListener("click", () => {
        if (bookRead.textContent == "Read") {
          bookRead.textContent = "Not Read"
          myLibrary[Array.from(flexbox.childNodes).indexOf(card)].read = false;
          bookRead.style.backgroundColor = "red";
          bookRead.style.color = "white";
        } else {
          bookRead.textContent = "Read"
          myLibrary[Array.from(flexbox.childNodes).indexOf(card)].read = true;
          bookRead.style.backgroundColor = "lime"
          bookRead.style.color = "black"
        }
      });
  
      removeBtn.addEventListener("click", () => {
        myLibrary.splice(Array.from(flexbox.childNodes).indexOf(card), 1);
        flexbox.removeChild(card);
      });
    }
  }
}

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", "295", "no"));
myLibrary.push(new Book("Dracula", "Bram Stoker", "418", "no"));
myLibrary.push(new Book("The Metamorphosis", "Franz Kafka", "70", "no"));
Book.displayLibrary();
Book.addBook();
