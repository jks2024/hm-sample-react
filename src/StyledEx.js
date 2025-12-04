import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 10px auto;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.div`
  flex: 1; // flex-grow:1, flex-shrink: 1, flex-basis: 0
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px 16px;
  color: white;
  border-radius: 2px;
  &.green {
    background-color: green;
  }
  &.orange {
    background-color: orange;
  }
  &.purple {
    background-color: purple;
  }
`;
const ColorBox = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid #ccc;
  border-radius: 15px;
  margin: 10px auto;
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const StyledEx = () => {
  const [color, setColor] = useState("");

  return (
    <Container>
      <ButtonContainer>
        <Button className="green" onClick={() => setColor("green")}>
          Green
        </Button>
        <Button className="orange" onClick={() => setColor("orange")}>
          Orange
        </Button>
        <Button className="purple" onClick={() => setColor("purple")}>
          Purple
        </Button>
      </ButtonContainer>
      <ColorBox bgColor={color} />
    </Container>
  );
};

export default StyledEx;
