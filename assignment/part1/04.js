// `add_book`과 `delete_book` 함수를 카피-온-라이트 규칙을 사용해서 작성해봅시다.

var bookList = ["노인과바다", "어린왕자", "파리대왕"];

function add_book_item(bookList, book) {
  bookList.push(book);
}

function delete_book_item(bookList, index) {
  bookList.splice(index, 1);
}

// Victoria 과제 작성
const add_book = (list, item) => {
  const newList = list.slice();
  newList.push(item);
  return newList;
};

const delete_book = (list, index) => {
  const newList = list.slice();
  newList.splice(index, 1);
  return newList;
};

bookList = add_book(bookList, '죄와 벌');

bookList = delete_book(bookList, 1);