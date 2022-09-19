// 카피 온 라이트를 쉽게 할 수 있도록 해주는 유틸 함수를 만들어보려고 합니다.
// 데이터의 자료구조(object인지 array인지)와 상관 없이 카피 온 라이트를 진행할 수 있는 유틸 함수를 만들어 주세요.
// 간단하게 얕은 복사만 진행해도 좋습니다.

// 아래에 작성해주세요.
let object = { id: '12341234', age: '30', name: 'wendy' };
let array = ['사과', '바나나', '파인애플'];

const copyData = (data) => {
  let newData;
  if (Array.isArray(data)) {
    newData = [...data];
  } else {
    newData = { ...data };
  }

  return newData;
};

copyData(object);
copyData(array);
