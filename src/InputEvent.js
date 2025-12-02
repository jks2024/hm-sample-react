import { useState } from "react";

const InputEvent = () => {
  const [message, setMessage] = useState("안녕하세요");

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="아무거나 입력"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <h2>입력 받은 메세지 : {message}</h2>
    </>
  );
};

export default InputEvent;
