// "add_book" 과 "delete_book" 함수를 분리하여 더 좋은 설계로 만들어 봅시다.
// * 참고사항 *
// 재사용하기 쉽고, 유지보수하기 쉽고, 테스트하기 쉽도록

// Victoria Test
var bookList = ["노인과바다", "어린왕자", "파리대왕"];

const add_item_by_name = (list, name) => {
  if(! is_name_in_cart(list, name)) {
    return push_item_by_name(list, name);
  }

  return list;
}

const push_item_by_name = (list, name) => {
  const newList = list.slice();
  newList.push(name);
  return newList;
}

const remove_item_by_name = (list, name) => {
  const index = get_index_of_item(list, name);

  if(index !== null) {
    return removeItems(list, index, 1);
  }
  return list;
}

const removeItems = (list, index, sliceCnt) => {
  const newList = list.slice();
  newList.splice(index, sliceCnt);
  return newList;
}

const is_name_in_cart = (list, name) => {
  return get_index_of_item(list, name) !== null;
}

const get_index_of_item = (list, name) => {
  for(let i = 0; i < list.length; i++) {
    if(list[i] === name){
      return i;
    }
  }
  return null;
}

bookList = add_item_by_name(bookList, '노인과바다');

bookList = remove_item_by_name(bookList, '노인과바다');