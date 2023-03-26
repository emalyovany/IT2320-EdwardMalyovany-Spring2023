////////////////////////
// Global Variables   //
////////////////////////

const bookOne = {
  title: "Corduroy",
  author: "Don Freeman",
  publisher: "Viking Books",
  year: "1968",
  jacketColor: "firebrick",
};

const bookTwo = {
  title: "The Giving Tree",
  author: "Shel Silverstein",
  publisher: "Harper & Row",
  year: "1964",
  jacketColor: "forestgreen",
};

const bookThree = {
  title: "Harold and the Purple Crayon",
  author: "Crockett Johnson",
  publisher: "HarperCollins",
  year: "1955",
  jacketColor: "purple",
};

const bookFour = {
  title: "Caps for Sale",
  author: "Esphyr Slobodkina",
  publisher: "HarperCollins",
  year: "1940",
  jacketColor: "goldenrod",
};

////////////////////////
// Functions          //
////////////////////////

function displayBook(bookIndex) {
  let book;
  switch (bookIndex) {
    case 1:
      book = bookOne;
      break;
    case 2:
      book = bookTwo;
      break;
    case 3:
      book = bookThree;
      break;
    case 4:
      book = bookFour;
      break;
    default:
      console.log(`Invalid book index: ${bookIndex}`);
      return;
  }

  const bookDisplay = document.getElementById("bookDisplay");
  const bookTitle = document.getElementById("bookTitle");
  const bookAuthor = document.getElementById("bookAuthor");
  const bookPublisher = document.getElementById("bookPublisher");
  const bookYear = document.getElementById("bookYear");

  bookDisplay.style.backgroundColor = book.jacketColor;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPublisher.textContent = book.publisher;
  bookYear.textContent = book.year;
}
