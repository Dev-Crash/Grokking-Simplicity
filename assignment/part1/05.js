// Tom은 인스타그램과 비슷한 서비스를 만들고 있습니다.
// Tom은 특정 피드의 특정 댓글의 내용을 수정하는 함수를 만들고자 합니다.
// 함수가 데이터의 불변성을 유지할 수 있도록 함수를 리팩토링 해주세요. (함수를 분리해도 좋습니다.)

// * 참고사항 *
// 피드와 댓글은 다음과 같은 타입을 가지고 있습니다.
/**
 * 댓글 목록
 * @typedef {object} Comment
 * @property {string} id - 댓글 고유 아이디
 * @property {string} author - 게시자
 * @property {string} content - 게시 내용
 * @property {number} totalLike - 좋아요 수
 * @property {boolean} isLike - 내 좋아요 여부
 */

/**
 * 피드 목록
 * @typedef {object} FeedList
 * @property {string} id - 피드 고유 아이디
 * @property {string} author - 게시자
 * @property {string} content - 게시 내용
 * @property {number} totalLike - 좋아요 수
 * @property {Comment[]} commentList - 댓글 목록
 */

/**
 * @type {FeedList[]} 피드 목록
 */
let feedList = [
  {
    id: "A1",
    author: "Wendy",
    content: "오늘도... 필라테스 😂",
    totalLike: 340,
    commentList: [
      {
        id: "A1B1",
        author: "Daisy",
        content: "필라테스 힘들죠...",
        isLike: false,
        totalLike: 12,
      },
      {
        id: "A1B2",
        author: "Eden",
        content: "운동 머신...👍",
        isLike: false,
        totalLike: 3,
      },
    ],
  },
  {
    id: "A2",
    author: "Victoria",
    content: "들기름 커피 신기하다!",
    totalLike: 222,
    commentList: [
      {
        id: "A2B1",
        author: "Wendy",
        content: "다음에 같이 가요!",
        isLike: true,
        totalLike: 27,
      },
      {
        id: "A2B2",
        author: "Daisy",
        content: "들기름 커피? 신기하네요!",
        isLike: true,
        totalLike: 22,
      },
    ],
  },
];

// 아래의 함수를 리팩토링 해주시면 됩니다.
const modifyComment = (feedId, commentId, content) => {
  const targetFeed = feedList.find((feed) => feed.id === feedId);
  let targetComment = targetFeed.commentList.find(
    (comment) => comment.id === commentId
  );

  targetComment.content = content;
};

// ---------- 풀이

const findSameIdData = (list, findId) => {
  return list.find((item)=>
      item.id === findId
  );
};

const modifyComment = (feedId, commentId, content) => {
  const newFeedList = structuredClone(feedList);
  const targetComment = findSameIdData(findSameIdData(newFeedList, feedId).commentList, commentId);
  targetComment.content = content;
  feedList = newFeedList;
};

// 1. 배열 요소 중 동일한 id값을 가진 데이터를 반환하는 계산 함수를 분리했습니다.(findSameIdData()) 이는 feed, comment를 찾는데 재사용됩니다.
// 2. structuredClone Web API를 활용해 feedList의 깊은 복사를 진행합니다. (newFeedList)
// 3. 깊은 복사본과 유틸함수 findSameIdData를 재사용해 변경할 댓글 targetComment를 찾습니다.
// 4. 변경할 댓글 targetComment의 내용을 변경합니다. 이 때의 targetcomment는 깊은 복사본 newFeedList의 값이므로 원본값에 영향을 주지않습니다.
// 5. 원본 feedList에 깊은 복사본 newFeedList를 할당해줍니다.
