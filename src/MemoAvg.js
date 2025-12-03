// useMemo : 이전 상태를 기억해서 불필요한 렌더링을 줄여 줌
import { useMemo, useState } from "react";

const getAvg = (list) => {
  console.log("평균 값 계산 중......");
  if (list.length === 0) return 0; // 계산할 값이 없는 경우
  const sum = list.reduce((a, b) => a + b); // 두개의 입력을 내부에 전달해 연산 후 소모 시킴
  return sum / list.length; // 평균 계산
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onInsert = () => {
    const nextList = [...list, parseInt(number)]; // 새로운 배열을 만듬
    setList(nextList); // 새로운 주소의 배열이 할당되었으므로 렌더링 동작이 일어남
    setNumber(""); // 입력창을 지워 줌
  };

  return (
    <>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list && list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <p>평균값 : {useMemo(() => getAvg(list), [list])} </p>
    </>
  );
};
export default Average;
