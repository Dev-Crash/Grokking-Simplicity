// "add_book" 과 "delete_book" 함수를 분리하여 더 좋은 설계로 만들어 봅시다.
// * 참고사항 *
// 재사용하기 쉽고, 유지보수하기 쉽고, 테스트하기 쉽도록

var bookList = ["노인과바다", "어린왕자", "파리대왕"];

function add_book(book) {
  bookList.forEach((item) => {
    if (item === book) {
      return;
    } else {
      bookList.push(book);
    }
  });
}

function delete_book(book) {
  let deleteIdx = 0;
  bookList.forEach((item, index) => {
    if (item === book) {
      deleteIdx = index;
      return;
    }
  });
  bookList.splice(deleteIdx, 1);
}
