import "./App.css";

const inlineStyle = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const Sample = () => {
  const name = "리액트";
  // 함수 표현식 사용
  // 리액트는 const, let, var 중에서 const만 사용
  // 조건부 렌더링 삼한연사자나 논리 연산자 화면을 그려줒는 영역(return)에서 사용 가능

  return (
    <>
      {name === "리액트" ? (
        <p style={inlineStyle}>안녕하세요. {name}님. 환영 합니다.</p>
      ) : (
        <p>리액트가 아닙니다.</p>
      )}
      {name === "리액트." && <h3>논리 연산자 사용</h3>}

      <div className="container">
        <p className="title-name">여기는 제목 입니다.</p>
        <p className="content-name">내용 입니다.</p>
      </div>
    </>
  );
};

export default Sample; // 해당 컴포넌트를 다른 곳에서 import 할수 있도록 함
