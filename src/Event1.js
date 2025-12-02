import { useState } from "react";

// check 박스는 실습 : 좋아하는 동물을 선택하세요 : 개, 고양어, 돼지, 토끼, 호랑이, 사자, 사슴

const DropDown = () => {
  const [select, setSelect] = useState("");
  const [radio, setRadio] = useState("");
  const [animal, setAnimal] = useState([]);
  const animalList = ["개", "고양이", "돼지", "토끼", "호랑이", "사자", "사슴"];

  const handleCheck = (e) => {
    if (e.target.checked) {
      setAnimal([...animal, e.target.value]); // 기존 배열을 풀어서 넣고, check된 새로운 값을 추가
    } else {
      setAnimal(animal.filter((e) => e !== e.target.value)); // 기존 배열에서 지금 들어온 값을 제외해서 다시 집어 넣음
    }
  };

  return (
    <>
      <h2>드롭다운 예제</h2>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="" disabled>
          과일을 선택하세요.
        </option>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option>
      </select>
      <p>선택된 과일 : {select}</p>

      <h2>라디오 버튼 예제</h2>
      <div>
        <label>
          그랜저
          <input
            type="radio"
            name="car"
            value="그랜저"
            onChange={(e) => setRadio(e.target.value)}
          />
        </label>
        <label>
          싼타페
          <input
            type="radio"
            name="car"
            value="싼타페"
            onChange={(e) => setRadio(e.target.value)}
          />
        </label>
        <label>
          제네시스
          <input
            type="radio"
            name="car"
            value="제네시스"
            onChange={(e) => setRadio(e.target.value)}
          />
        </label>
        <br />
        <p>선택된 라디오 버튼 : {radio}</p>
      </div>

      <h2>체크 박스 실습</h2>
      {animalList.map((animal, index) => (
        <div key={index}>
          <label>
            <input type="checkbox" value={animal} onChange={handleCheck} />
            {animal}
          </label>
        </div>
      ))}
      <p>{animal.join(", ")}</p>
    </>
  );
};

export default DropDown;
