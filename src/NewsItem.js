const NewsItem = ({ member }) => {
  const { title, content, writer } = member;
  return (
    <>
      <h2>기사제목 : {title}</h2>
      <h4>내용 : {content}</h4>
      <h6>작성자 : {writer}</h6>
      <hr />
    </>
  );
};

export default NewsItem;
