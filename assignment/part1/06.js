// 카피 온 라이트를 쉽게 할 수 있도록 해주는 유틸 함수를 만들어보려고 합니다.
// 데이터의 자료구조(object인지 array인지)와 상관 없이 카피 온 라이트를 진행할 수 있는 유틸 함수를 만들어 주세요.
// 간단하게 얕은 복사만 진행해도 좋습니다.

// 아래에 작성해주세요.
const copyData = (data) => {};

// ---------- 풀이
const copyData = (data) => {
    // 1.data가 array일 경우
    if(Array.isArray(data)){
        return data.slice();
    } else {
    // 2.data가 object일 경우
        return Object.assign({}, data);
    }
};

// 데이터의 자료구조가 object/array일 경우를 분리해 얕은 복사를 진행했습니다.
// 문제에 데이터의 자료구조가 기재되어 있어 두 경우를 나눠 각각의 방법으로 카피-온-라이트를 진행했지만,
// isArray로 데이터의 타입을 구분하는 것이 맞았을지, 더 좋은 방법이 있지는 않았을지는 고민이 됩니다.