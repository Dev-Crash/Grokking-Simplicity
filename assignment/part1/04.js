// `add_book`과 `delete_book` 함수를 카피-온-라이트 규칙을 사용해서 작성해봅시다.

var bookList = ['노인과바다', '어린왕자', '파리대왕'];

function add_book_item(bookList, book) {
  return [...bookList, book];
}

function delete_book_item(bookList, index) {
  return bookList.filter((_, idx) => idx !== index);
}

// 1. 카피 온 라이트의 경우에 전개 연산자나 배열의 고차 함수를 이용하면 쉽게 구현할 수 있습니다.
