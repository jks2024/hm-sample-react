// Hooks? 리액트 v16.8에서 새로 도입된 기능, 함수형컴포넌트에서 상태관리, 생병주기 관리 가능하도록 기능 추가
// 더 이상 클래스형 컴포넌트 사용할 이유가 없음
// useEffect : 함수형 컴포넌트에서 생명주기 메서드를 대체하는 React Hook 중 하나
// 생명주기란? 컴포넌트가 화면에 나타나고, 갱신되고, 사라지는 일련의 동작을 의미
import { useState, useEffect } from "react";

const InfoEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log(name, nickname);
  }, [name]); // [] 의존성 배열, 비어있으면 마운트 시점에 한번만 호출

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <br />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickname}</p>
    </>
  );
};
export default InfoEffect;
