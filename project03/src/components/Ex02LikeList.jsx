import { useState } from "react";

const Ex02LikeList = () => {
  const [num, setNum] = useState(0);
  const [emoji, setEmoji] = useState("🤍");

  /* 좋아요를 조정할 수 있는 함수 */
  const handelLike = () => {
    console.log("ck");

    if (num === 0) {
      setNum(1);
      setEmoji("🧡");
    } else {
      setNum(0);
      setEmoji("🤍");
    }
  };

  return (
    <div>
      <span onClick={handelLike}>{emoji}</span>{" "}
      <span>좋아요 {num}개</span>
    </div>
  );
};

export default Ex02LikeList;
