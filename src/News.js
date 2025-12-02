// 제목, 본문 내용, 작성자를 전달해서 4개의 기사를 출력하기
import NewsItem from "./NewsItem";

const members = [
  {
    title: "오늘의 스포츠",
    content: "배구 결과 현대건설 vs 정관장",
    writer: "안유진",
  },
  {
    title: "오늘의 정치",
    content: "더불어 민주당 vs 국민의 힘",
    writer: "장원영",
  },
  {
    title: "오늘의 축구",
    content: "전북 현대 vs 수원 블루윙즈",
    writer: "이서",
  },
  {
    title: "오늘의 게임",
    content: "SK T1 vs KT",
    writer: "가을",
  },
];

const News = () => {
  return (
    <>
      {members &&
        members.map((member, index) => (
          <NewsItem key={index} member={member} />
        ))}
    </>
  );
};

export default News;
