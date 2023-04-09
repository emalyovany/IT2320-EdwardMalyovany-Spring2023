var booksJSON =
  '[{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","genre":"Novel","year":"1925","pages":"180","image":"images/gatsby.jpg"},{"title":"To Kill a Mockingbird","author":"Harper Lee","genre":"Novel","year":"1960","pages":"281","image":"images/mockingbird.jpg"},{"title":"Pride and Prejudice","author":"Jane Austen","genre":"Novel","year":"1813","pages":"435","image":"images/pride.jpg"},{"title":"One Hundred Years of Solitude","author":"Gabriel Garcia Marquez","genre":"Novel","year":"1967","pages":"417","image":"images/solitude.jpg"}]';

var books = JSON.parse(booksJSON);

function displayBook(bookIndex) {
  var book = books[bookIndex];

  $("#bookTitle").text(book.title);
  $("#bookAuthor").text(book.author);
  $("#bookGenre").text(book.genre);
  $("#bookYear").text(book.year);
  $("#bookPages").text(book.pages);
  $("#bookCover").attr("src", book.image);
}

$(document).ready(function () {
  $("#book1button").click(function () {
    displayBook(0);
  });
  $("#book2button").click(function () {
    displayBook(1);
  });
  $("#book3button").click(function () {
    displayBook(2);
  });
  $("#book4button").click(function () {
    displayBook(3);
  });
});
