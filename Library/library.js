const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = ''; // Clear previous content
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-card';
    bookDiv.dataset.index = index;
    bookDiv.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button class=removebutton onclick="removeBook(${index})">Remove</button>
      <button class=readbutton onclick="toggleRead(${index})">Toggle Read</button>
    `;
    libraryDiv.appendChild(bookDiv);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

document.getElementById('newBookBtn').addEventListener('click', () => {
  document.getElementById('bookFormContainer').style.display = 'block';
  document.getElementById('bookFormBg').style.display = 'block';
});

document.getElementById('bookForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  document.getElementById('bookFormContainer').style.display = 'none';
  document.getElementById('bookFormBg').style.display = 'none';
  document.getElementById('bookForm').reset();
});

//test books
addBookToLibrary(new Book('1984', 'George Orwell', 328, true));
addBookToLibrary(new Book('To Kill a Mockingbird', 'Harper Lee', 281, false));
addBookToLibrary(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true));
addBookToLibrary(new Book('Pride and Prejudice', 'Jane Austen', 279, false));
addBookToLibrary(new Book('Moby-Dick', 'Herman Melville', 635, true));
addBookToLibrary(new Book('War and Peace', 'Leo Tolstoy', 1225, false));
addBookToLibrary(new Book('The Catcher in the Rye', 'J.D. Salinger', 214, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 310, false));
addBookToLibrary(new Book('Brave New World', 'Aldous Huxley', 268, true));
addBookToLibrary(new Book('Fahrenheit 451', 'Ray Bradbury', 194, false));
addBookToLibrary(new Book('The Odyssey', 'Homer', 541, true));
addBookToLibrary(new Book('Crime and Punishment', 'Fyodor Dostoevsky', 671, false));