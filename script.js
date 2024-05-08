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
}