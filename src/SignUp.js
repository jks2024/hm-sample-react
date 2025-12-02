// 이메일, 비밀번호, 이름, 전화번호를 입력 받음 (useState 관리)
// 회원 가입 버튼을 만들고 회원 가입 버튼을 눌렀을 때 입력 받은 정보를 화면에 표시 하기
import { useState } from "react";

// 객체 스타일로 화면 꾸미기
const container = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  margin: "20px auto",
  width: "300px",
};

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState(null);

  const handleSignUp = () => {
    setResult({ email, pwd, name, phone });
  };

  return (
    <div style={container}>
      <h2>회원 가입</h2>
      <div>
        <input
          type="text"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPwd(e.target.value)}
        />
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="전화번호"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSignUp}>회원 가입</button>
      </div>
      <hr />
      {result && (
        <div>
          <h3>회원 정보</h3>
          <p>이메일 : {result.email}</p>
          <p>비밀번호 : {result.pwd}</p>
          <p>이름 : {result.name}</p>
          <p>전화번호 : {result.phone}</p>
        </div>
      )}
    </div>
  );
};

export default SingUp;
