import { styled } from "styled-components";
import leftBtn from "../../assets/LeftButton.svg";
import rightBtn from "../../assets/RightButton.svg";
import { useState } from "react";

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;

const PressGridWrap = styled.div`
  width: 930px;
  height: 388px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid rgba(210, 218, 224, 1);
  border-left: 1px solid rgba(210, 218, 224, 1);
`;

const PressBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(210, 218, 224, 1);
  border-right: 1px solid rgba(210, 218, 224, 1);
  height: 97px;
`;

const ArrowButton = styled.img`
  position: absolute;
  top: 180px;
  width: 40px;
  height: 40px;
`;

const RightButton = styled(ArrowButton)`
  left: 103%;
`;

const LeftButton = styled(ArrowButton)`
  right: 103%;
`;

const NewsLogo = styled.img`
  max-width: 50%;
  object-fit: contain;
`;

function PressWrap({ news }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 24;

  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, news.length);
  const displayedNews = news.slice(startIndex, endIndex);

  return (
    <Main>
      <PressGridWrap key={currentPage}>
        {currentPage !== 0 && (
          <LeftButton onClick={previousPage} src={leftBtn} alt="leftBtn" />
        )}
        {currentPage !== 3 && (
          <RightButton onClick={nextPage} src={rightBtn} alt="rightBtn" />
        )}
        {displayedNews.map((newsItem, index) => (
          <PressBox key={index}>
            <NewsLogo src={newsItem.logoImageSrc} alt={newsItem.pressName} />
          </PressBox>
        ))}
      </PressGridWrap>
    </Main>
  );
}

export default PressWrap;
