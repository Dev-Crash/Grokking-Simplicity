// 스낵24의 간식 재고에 내가 원하는 간식이 존재하는지 확인하는 함수를 구현하려 합니다.
// 아래의 isInArray와 isInStockList는 비슷한 함수입니다.
// 1. 한쪽 함수를 다른 함수를 사용해 구현해주시고
// 2. 그렇게 구현한 함수의 계층을 주석으로 알려주세요.

const isInArray = (array, name) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return true;
    }
  }
  return false;
};

/**
 * @param {StockList[]} stockList
 * @param {string} name
 * @returns
 */

const isInStockList = (stockList, name) => {
  return isInArray(stockList, name)
    ? stockList.map((stockItem) => stockItem.name).indexOf(name)
    : null;
};

// * 참고사항 *
// 재고 목록인 stockList는 아래의 타입을 가지고 있습니다.
/**
 * 재고목록
 * @typedef {object} StockList
 * @property {string} name - 재고 이름
 * @property {number} price - 가격
 */

// 1. isInStockList의 조건문 중에서 stockList[i].name 일 것이라고 생각했습니다.
// 2. 기존 구현 내용으로 봤을 때 indexOf 처럼 동작하는 것으로 보였습니다.
// 3. isInArray를 이용해서 배열 안에 요소가 있는지 확인 후에 indexOf를 이용해서 기존 동작인 index를 리턴할 수 있도록 구현했습니다.
// 4. isInStockList는 재고 목록을 확인하는 함수이기 때문에 "장바구니 기본 동작" 정도의 계층이라고 생각합니다.
