// 아래의 addSnack 함수는 스낵24 장바구니에 새로운 간식을 추가하는 함수입니다.
// 1. 해당 함수를 카피-온-라이트 원칙에 따라 분리해 리팩토링 해주시고,
// 2. 바꾼 코드에서 카피-온-라이트의 단계(3단계)마다 주석으로 표시해주세요.
// * 참고 사항 *
// 장바구니 목록인 cartList 는 전역변수이며, 간식의 이름을 요소로 가지는 배열입니다.

var cartList = [];

const addSnack = (cartList, snackName) => {
  cartList.push(snackName);
  return cartList;
};

// 함수 사용 예시
addSnack(cartList, "꿀호떡"); //[ '꿀호떡' ]
addSnack(cartList, "꼬북칩"); //[ '꿀호떡', '꼬북칩' ]
