import { styled } from "styled-components";
import leftBtn from "../../assets/LeftButton.svg";
import rightBtn from "../../assets/RightButton.svg";
import { useState } from "react";

const ITEMS_PER_PAGE = 24;
const FIRST_PAGE_INDEX = 0;
const LAST_PAGE_INDEX = 3;

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

function TotalGrid({ news }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = ITEMS_PER_PAGE;

  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  const nextPage = () => setCurrentPage(currentPage + 1);

  const previousPage = () => setCurrentPage(currentPage - 1);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, news.length);
  const displayedNews = news.slice(startIndex, endIndex);

  return (
    <PressGridWrap key={currentPage}>
      {currentPage !== FIRST_PAGE_INDEX && (
        <LeftButton onClick={previousPage} src={leftBtn} alt="leftBtn" />
      )}
      {currentPage !== LAST_PAGE_INDEX && (
        <RightButton onClick={nextPage} src={rightBtn} alt="rightBtn" />
      )}
      {displayedNews.map((newsItem, index) => (
        <PressBox key={index}>
          <NewsLogo src={newsItem.logoImageSrc} alt={newsItem.pressName} />
        </PressBox>
      ))}
    </PressGridWrap>
  );
}

export default TotalGrid;
