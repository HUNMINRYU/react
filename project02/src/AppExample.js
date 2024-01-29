// rafce + Enter
import React from "react";
import "./App.css";
import MemberBox from "./components/MemberBox";

const AppExample = () => {
  /* 여러분의 팀원을 소개해주세요!
   * 이름: 홍길동
     성별: 여성 / 남성
     좋아하는 노래 : 아이브 - I AM

     단, Component와 props 의 개념을 이용할 것
     - MemberBox 라는 컴포넌트를 생성하기

     혹시 너무 빨리 끝내버린 사람은 디자인 하고 있기!
   */

    //  let man = "남성"
    //  let woman = "여성"


    let {man, woman} = {
      man: "남성",
      woman: "여성"
    }
    
  return (
    <>
      <MemberBox name="홍길동" gender={woman} music="아이브 - I AM"></MemberBox>
      <MemberBox name="류훈민" gender={man} music="가나다"></MemberBox>
    </>
  );
};

export default AppExample;
