function Book(name, author, page, read) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.read = read;
}

const library = document.querySelector("#library");

function openPopup() {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "flex"; // Show the overlay
}

function saveBook() {
  const bookNameField = document.getElementById("bookName");
  const bookNameValue = bookNameField.value;

  const authorField = document.getElementById("author");
  const authorValue = authorField.value;

  const pageNumberField = document.getElementById("noOfPages");
  const pageNumberValue = pageNumberField.value;

  const readField = document.getElementById("read");
  const readValue = readField.value;

  const newBook = new Book(
    bookNameValue,
    authorValue,
    pageNumberValue,
    readValue
  );
  bookNameField.value = " ";
  authorField.value = " ";
  pageNumberField.value = " ";
  return newBook;
}
function createBookElement(book) {
  const bookName = book.name;
  const author = book.author;
  const pageNumber = book.page;

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  const bookNameHeading = document.createElement("h3");
  bookNameHeading.textContent = bookName;
  bookDiv.appendChild(bookNameHeading);
  const authorHeading = document.createElement("h4");
  authorHeading.textContent = "Author: " + author;
  bookDiv.appendChild(authorHeading);
  const pageNumberHeading = document.createElement("h4");
  pageNumberHeading.textContent = "Page Number: " + pageNumber;
  bookDiv.appendChild(pageNumberHeading);
  const readHeading = document.createElement("h4");
  readHeading.textContent = "Read";
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Book";
  removeButton.addEventListener("click", function () {
    library.removeChild(bookDiv);
  });
  bookDiv.appendChild(removeButton);
  library.appendChild(bookDiv);
}

function closePopup() {
  const newBook = saveBook();
  createBookElement(newBook);
  let overlay = document.getElementById("overlay");
  overlay.style.display = "none"; // Hide the overlay
}
