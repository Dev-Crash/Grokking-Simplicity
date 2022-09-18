// 카피 온 라이트를 쉽게 할 수 있도록 해주는 유틸 함수를 만들어보려고 합니다.
// 데이터의 자료구조(object인지 array인지)와 상관 없이 카피 온 라이트를 진행할 수 있는 유틸 함수를 만들어 주세요.
// 간단하게 얕은 복사만 진행해도 좋습니다.

// 아래에 작성해주세요.
const isArray = (arg) => {
  return Array.isArray(arg);
};

const copyData = (data) => {
  if (data == null) {
    return data;
  }

  if (isArray(data)) {
    return [...data];
  }

  if (typeof data === 'object') {
    return { ...data };
  }

  return data;
};

// 1. 얕은 복사만 진행해도 되는 조건이었기 때문에 배열, 객체는 각각 전개 연산자를 사용하기로 했습니다.
// 2. 원시 데이터의 경우에는 data를 그대로 리턴해도 복사가 진행되기 때문에 받은 data를 그대로 리턴하도록 했습니다.
// 3. null의 경우에는 타입이 "object" 이기 때문에 맨 상단에서 조건을 통해 return 시켰습니다.
