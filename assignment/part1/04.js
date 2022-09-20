// `add_book`과 `delete_book` 함수를 카피-온-라이트 규칙을 사용해서 작성해봅시다.

var bookList = ["노인과바다", "어린왕자", "파리대왕"];

function add_book_item(bookList, book) {
  bookList.push(book);
}

function delete_book_item(bookList, index) {
  bookList.splice(index, 1);
}

// ---------- 풀이
const add_book_item = (list, book) => {
  const newBookList = list.slice();
  newBookList.push(book);
  return newBookList;
};

const delete_book_item = (list, index) => {
  const newBookList = list.slice();
  newBookList.splice(index,1);
  return newBookList;
};