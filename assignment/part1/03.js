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

// ---------- 풀이

// ----- add_book : 중복되지않은 책을 list에 추가하는 함수

const add_new_item_to_arr = (list, newItem) => {
  const newList = list.slice();
  !newList.filter(listItem => listItem===newItem).length && newList.push(newItem);
  return newList;
};

const add_book = (book) => {
  bookList = add_new_item_to_arr(bookList, book);
};

// 기존의 함수에서 배열에 중복되지않는 값을 추가하는 부분을 분리해 계산 함수로 만들었습니다.
// 분리된 계산 함수는 (1)재사용이 용이한 유틸함수이고 (2)카피-온-라이트를 적용해 원본값에 영향을 미치지 않아 테스트가 용이합니다.
// 전역변수 booklist와 추가할 요소인 book은 액션인 add_book 함수에서만 사용하므로 보다 쉽게 유지보수할 수 있습니다.


// ----- delete_book : 중복되는 책이 있다면 그 책을, 없다면 가장 첫 번째 책을 list에서 삭제하는 함수

const find_duplicate_index = (findItem, list) => {
  let duplicateIndex = 0;
  list.forEach((listItem, index) => {
    if (listItem === findItem) {
      duplicateIndex = index;
    }
  })
  return duplicateIndex;
};

const delete_book = (book) => {
  bookList.splice(find_duplicate_index(book,bookList),1);
};

// 기존의 함수에서 배열에서 중복된 값의 index를 반환하는 부분을 별도의 함수로 분리했습니다.
// 분리된 함수는 외부로부터 영향을 받지않는 계산 함수로 테스트가 용이하고, 재사용이 편리한 유틸함수입니다.
// 전역변수인 bookList는 액션 함수인 delete_book에서만 사용되므로 값이 변경되어도 보다 쉽게 유지보수 할 수 있습니다.