// 심플 방명록 만들기
// 텍스트 입력 2개와 추가 버튼만 사용
// 입력 받기
// - 작성자
// - 내용
// 기능
// - [등록] 버튼을 누르면 목록에 추가
// 등록 후 입력창이 깨끗이 비워저야 함
// 보여주기
// - map 함수를 사용해저 보여주기

// useState 가 3개 필요 (name, message, guestList[])
// setGuestList[...guestList, ]

import React, { useState } from "react";

const GuestBook = () => {
  // 1. 입력값을 위한 State (각각 따로 관리해서 쉽게)
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 2. 방명록 목록을 저장할 배열 State
  const [guestList, setGuestList] = useState([]);

  // 3. 등록 버튼 클릭 시 실행
  const handleAdd = () => {
    if (name === "" || message === "") {
      alert("이름과 내용을 모두 입력해주세요!");
      return;
    }

    // 이름과 내용을 하나로 묶음
    const newItem = { name: name, message: message };

    // 기존 리스트(...)에 새 항목(newItem) 추가
    setGuestList([...guestList, newItem]);

    // 입력창 초기화
    setName("");
    setMessage("");
  };

  // 4. 삭제 기능 (선택 사항)
  const handleDelete = (indexToRemove) => {
    // filter를 사용해 클릭한 인덱스가 아닌 것만 남김
    setGuestList(guestList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>📝 한 줄 방명록</h2>

      {/* 입력 영역 */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="남길 말을 적어주세요"
          style={{ width: "80%" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
          등록
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* 목록 출력 영역 */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {guestList.map((item, index) => (
          <li
            key={index}
            style={{
              borderBottom: "1px solid #eee",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* 내용 보여주기 */}
            <span>
              <strong>{item.name}</strong>: {item.message}
            </span>

            {/* 삭제 버튼 */}
            <button
              onClick={() => handleDelete(index)}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {guestList.length === 0 && (
        <p style={{ textAlign: "center", color: "#888" }}>
          아직 작성된 방명록이 없습니다.
        </p>
      )}
    </div>
  );
};

export default GuestBook;
