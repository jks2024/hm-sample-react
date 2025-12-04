// CSS를 컴포넌트 스타일로 구현하는 방식
// - 가장 큰 장점은 props 값을 전달 할 수 있음
// - Styled COmponents는 원래 존재하는 태그를 가지고 만들어야 함
// - 스타일 정의는 ``(백틱)내에 작성 해야 함
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) =>
    props.color ||
    "blue"}; // props로 컬러값이 전달되면 전달된 값으로 아니면 blue
  padding: 1rem; // root의 기본 폰트 사이즈 기준으로 적용 (일반적으로 16px)
  display: flex; // 반응형 웹을 만들 때 주로 사용, 1차원 개념이고 기본값을 가로 방향
  width: 1024px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0%.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    // & 자기자신
    background-color: rgba(
      255,
      255,
      255,
      0.9
    ); //rgba() a는 알파값을 의미하며, 투명도를 나타냄
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const Styled = () => {
  return (
    <Box color="red">
      <Button>안녕하세요.</Button>
      <Button inverted={true}>안녕하세요. 반전</Button>
    </Box>
  );
};

export default Styled;
