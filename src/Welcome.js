// 컴포넌트란? 리액트에서 UI를 구성하는 독립적인 모듈, 재사용 가능, 각 컴포넌트는 UI와 상태를 가짐
// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나누어 짐
// Props : 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터, 단방향 (부모 -> 자식)
// State : 컴포넌트 내부에서 관리하는 데이터로, state가 변경되면, 컴포넌트가 다시 렌더링 됨

const Welcome = ({
  name = "없음",
  age = 0,
  isAdult = false,
  addr = "없음",
}) => {
  return (
    <>
      <p>당신의 이름은 {name}</p>
      <p>나이 : {age}</p>
      <p>성인여부 : {isAdult ? "예" : "아니오"}</p>
      <p>주소 : {addr}</p>
    </>
  );
};

export default Welcome;
