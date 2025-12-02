import { useState } from "react";

const Say = () => {
  // 앞은 값을 읽는 변수, 값을 변경하는 함수 : 값이 변경되면 해당 컴포넌트가 재 렌더링이 됨
  const [message, setMessage] = useState(""); // 상태 관리
  const [color, setColor] = useState("black"); // 상태 관리

  return (
    <>
      <button onClick={() => setMessage("안녕하세요")}>입장</button>
      <button onClick={() => setMessage("안녕히 가세요")}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </>
  );
};

export default Say;
