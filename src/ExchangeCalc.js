// 문제 : 환율 계산기 만들기
// useState(), useEffect, useMemo()
// 1. 데이터 상태 관리(useState)
// - 금액 (amount), 국가(country), 테마(다크 모드 ON/OFF)
// 2. 데이터 동기화(useEffect)
// - 초기 데이터 로딩: 컴포넌트가 처음 마운드되면([]), 환율 정보를 가져와 상태에 저장
// {USD: 1465, JPY: 940, EUR: 1400}
// 3. 연산 최적화(useMemo)
// - 환율 계산 : 입력 금액 * 환율
// - 다크 모드 버튼을 누를 때는 환율 계산 로직이 실행되면 안됨
// 금액을 입력하는 입력창이 필요, 미국, 일본, 유럽을 선택하는 콤보(Select) 박스 필요
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

// ----------------------------------------------------
// 1. 스타일드 컴포넌트 정의 (CSS in JS)
// ----------------------------------------------------

// 전체 배경 컨테이너 (다크모드 props에 따라 색상 변경)
const AppContainer = styled.div`
  min-height: 100vh;
  padding: 40px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* props로 전달받은 isDarkMode 값에 따라 스타일 분기 처리 */
  background-color: ${(props) => (props.isDarkMode ? "#333333" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#000000")};
`;

// 계산기 박스 (카드 형태)
const CalculatorBox = styled.div`
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  margin: 30px auto;
  transition: all 0.3s ease;

  border: 2px solid ${(props) => (props.isDarkMode ? "#555" : "#ddd")};
  background-color: ${(props) => (props.isDarkMode ? "#444" : "#f9f9f9")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// 입력 그룹 (라벨 + 인풋)
const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 0.9rem;
`;

// 공통 입력 필드 스타일 (Input, Select 공유)
const inputStyles = `
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

const StyledSelect = styled.select`
  ${inputStyles}
`;

// 결과 텍스트
const ResultText = styled.span`
  font-size: 1.8em;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#64b5f6" : "#0056b3")};
`;

// 다크모드 토글 버튼
const ThemeButton = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
  transition: transform 0.1s ease;

  background-color: ${(props) => (props.isDarkMode ? "#fff" : "#333")};
  color: ${(props) => (props.isDarkMode ? "#333" : "#fff")};

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.95);
  }
`;

// ----------------------------------------------------
// 2. 메인 컴포넌트 로직
// ----------------------------------------------------

function ExchangeRateCalculator() {
  // --- State 관리 ---
  const [amount, setAmount] = useState(0);
  const [country, setCountry] = useState("USD");
  const [rates, setRates] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- useEffect: 데이터 가져오기 ---
  useEffect(() => {
    console.log("📡 [Effect] 환율 데이터 가져오는 중...");
    setRates({
      USD: 1465,
      JPY: 940,
      EUR: 1400,
    });
  }, []);

  // --- useMemo: 계산 최적화 ---
  const convertedAmount = useMemo(() => {
    if (Object.keys(rates).length === 0) return 0;
    console.log("🧮 [Memo] 환율 계산 로직 작동!");
    const rate = rates[country];
    return amount * rate;
  }, [amount, country, rates]);

  // --- 렌더링 ---
  return (
    // 스타일드 컴포넌트에 props(isDarkMode)를 전달하여 스타일 제어
    <AppContainer isDarkMode={isDarkMode}>
      <h1>Styled Components 환율 계산기</h1>

      <CalculatorBox isDarkMode={isDarkMode}>
        <InputGroup>
          <Label>외화 금액 입력</Label>
          <StyledInput
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="숫자만 입력해주세요"
          />
        </InputGroup>

        <InputGroup>
          <Label>국가 선택</Label>
          <StyledSelect
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="USD">미국 (USD)</option>
            <option value="JPY">일본 (JPY)</option>
            <option value="EUR">유럽 (EUR)</option>
          </StyledSelect>
        </InputGroup>

        <hr style={{ margin: "20px 0", opacity: 0.3 }} />

        <div>
          <h3>🇰🇷 환전 결과</h3>
          <ResultText isDarkMode={isDarkMode}>
            {convertedAmount.toLocaleString()} 원
          </ResultText>
        </div>
      </CalculatorBox>

      <ThemeButton
        isDarkMode={isDarkMode}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "🌞 라이트 모드로 전환" : "🌙 다크 모드로 전환"}
      </ThemeButton>
    </AppContainer>
  );
}

export default ExchangeRateCalculator;
