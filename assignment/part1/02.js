// 스낵24의 간식 재고에 내가 원하는 간식이 존재하는지 확인하는 함수를 구현하려 합니다.
// 아래의 isInArray와 isInStockList는 비슷한 함수입니다.
// 1. 한쪽 함수를 다른 함수를 사용해 구현해주시고
// 2. 그렇게 구현한 함수의 계층을 주석으로 알려주세요.

// const isInArray = (array, name) => {
//   for (leti = 0; i < array.length; i++) {
//     if (array[i].name === name) {
//       return true;
//     }
//   }
//   return false;
// };

/**
 * @param {StockList[]} stockList
 * @param {string} name
 * @returns
 */

// const isInStockList = (stockList, name) => {
//   for (leti = 0; i < stockList.length; i++) {
//     if (stockList[i] === name) {
//       return i;
//     }
//   }
//   return null;
// };

// * 참고사항 *
// 재고 목록인 stockList는 아래의 타입을 가지고 있습니다.
/**
 * 재고목록
 * @typedef {object} StockList
 * @property {string} name - 재고 이름
 * @property {number} price - 가격
 */


// Victoria 과제 풀이
const isInList = (list, name) => {
    // 반복문 대신 함수를 호출한다.
    // isInList -> isItemInList
    return (isItemInList(list, name) !== null);
}

const isItemInList = (list, name) => {
    // for loop
    for(let i = 0; i < list.length; i++){
        if(list[i].name === name){
            return i;
        }
    }
    // return index of null
    return null;
};

const stockList = [{
    'name' : '초코볼',
    'price' : 3000
}, {
    'name' : '콘푸르스트',
    'price' : 2000
}]
isInList(stockList, '초코볼');

//      isInList
//         |
//    isItemInList
//      /     \
// for loop   return index of Array or null