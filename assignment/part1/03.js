// "add_book" 과 "delete_book" 함수를 분리하여 더 좋은 설계로 만들어 봅시다.
// * 참고사항 *
// 재사용하기 쉽고, 유지보수하기 쉽고, 테스트하기 쉽도록

var bookList = ['노인과바다', '어린왕자', '파리대왕'];

const addUniqueItem = (array, item) => {
  return [...new Set([...array, item])];
};

const add_book = (bookList, book) => {
  return addUniqueItem(bookList, book);
};

const deleteItem = (array, item) => {
  return array.filter((each) => each !== item);
};

const delete_book = (bookList, book) => {
  return deleteItem(bookList, book);
};

// 1. add_book 함수의 경우 bookList 전역 변수에 접근하지 않고 인자를 받은 후에 복사하여 사용할 수 있도록 했습니다.
// 2. 이 때, addUniqueItem 이라는 중복 검사 후에 item을 추가하는 유틸 함수를 만들고 이를 사용할 수 있도록 했습니다.
// 3. 마찬가지로 delete_book 함수의 경우도 인자로 bookList를 받도록 했습니다.
// 4. 이후에는 배열의 고차함수를 사용해서 카피 온 라이트 효과를 볼 수 있도록 했습니다.
