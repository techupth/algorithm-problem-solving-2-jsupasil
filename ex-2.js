function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let ceilIndex = books.length - 1;
  let floorIndex = 0;
  let currentIndex;

  const setCurrentIndex = () => {
    currentIndex = Math.floor((ceilIndex + floorIndex) / 2);
  };
  setCurrentIndex();

  while (ceilIndex >= floorIndex) {
    if (searchTitle === books[currentIndex].title) {
      return currentIndex;
    }
    if (searchTitle > books[currentIndex].title) {
      floorIndex = currentIndex + 1;
      setCurrentIndex();
    }
    if (searchTitle < books[currentIndex].title) {
      ceilIndex = currentIndex - 1;
      setCurrentIndex();
    }
  }

  return -1;
}

let books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];
let searchBook = "Gone with the Wind";

console.log(
  "test case 1: ",
  findBookIndex(books, searchBook) === 6 ? "Approve" : "Reject"
);

searchBook = "The Master Mind";
console.log(
  "test case 2: ",
  findBookIndex(books, searchBook) === -1 ? "Approve" : "Reject"
);
