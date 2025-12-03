import { useState, useEffect } from "react";
import "./App.css";

const datas = [
  { email: "jks2024@gmail.com", name: "곰돌이", age: 20 },
  { email: "ayn@gmail.com", name: "안유진", age: 23 },
  { email: "jyw@gmail.com", name: "장원영", age: 22 },
  { email: "fall@gmail.com", name: "가을", age: 24 },
  { email: "lee@gmail.com", name: "이서", age: 20 },
  { email: "lee@gmail.com", name: "리즈", age: 20 },
];

const TableMap = () => {
  const [members, setMembers] = useState([]);

  // 생명 주기 관리
  useEffect(() => {
    // 대부분의 경우 여기서 비동기 통신으로 서버에 대한 요청과 응답을 받음
    setMembers(datas);
  }, []); // [] 의존성 배열이라 부르고, 마운트 시 동작

  const tableRowClick = (item) => {
    console.log(item);
  };

  return (
    <table>
      <tr>
        <th>이메일</th>
        <th>이름</th>
        <th>나이</th>
      </tr>
      {members &&
        members.map((member) => (
          <tr key={member.email} onClick={() => tableRowClick(member)}>
            <td>{member.email}</td>
            <td>{member.name}</td>
            <td>{member.age}</td>
          </tr>
        ))}
    </table>
  );
};

export default TableMap;
