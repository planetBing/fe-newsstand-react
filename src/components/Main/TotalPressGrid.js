import React, { useContext, useEffect, useState } from "react";
import { getData } from "../../api/newsApi.js";
import { styled } from "styled-components";
import leftBtn from "../../assets/LeftButton.svg";
import rightBtn from "../../assets/RightButton.svg";
import { postData, deleteData } from "../../api/newsApi";
import { NewsContext } from "./Provider.js";

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

  img {
    max-width: 50%;
    object-fit: contain;
  }

  &:hover {
    background-color: rgba(245, 247, 249, 1);
  }

  &:hover img {
    display: none;
  }

  & span {
    cursor: pointer;
    display: none;
  }

  &:hover span {
    display: block;
    font-size: 13px;
    text-align: center;
    line-height: 24px;
    color: #879298;
    width: 72px;
    height: 24px;
    padding: auto;
    border: 1px solid rgba(210, 218, 224, 1);
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 1);
  }
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

function TotalGrid({ allSubs, setAllSubs }) {
  const { news, subscription, setSubscription } = useContext(NewsContext);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_INDEX);
  const press =
    allSubs === "all" ? news.slice(0, ITEMS_PER_PAGE * 4) : subscription;
  const totalPages = Math.floor(press.length / ITEMS_PER_PAGE);

  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  const nextPage = () => setCurrentPage(currentPage + 1);

  const previousPage = () => setCurrentPage(currentPage - 1);

  const subscribePress = async (newsItem) => {
    postData("subscription", newsItem);
    setData("subscription", setSubscription);
  };

  const unsubscribePress = async (newsId) => {
    deleteData("subscription", newsId);
    setData("subscription", setSubscription);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedNews = press.slice(startIndex, endIndex);

  return (
    <PressGridWrap>
      {currentPage !== FIRST_PAGE_INDEX && (
        <LeftButton onClick={previousPage} src={leftBtn} alt="leftBtn" />
      )}
      {currentPage !== totalPages - 1 && (
        <RightButton onClick={nextPage} src={rightBtn} alt="rightBtn" />
      )}
      {[...Array(24)].map((_, index) => {
        const newsItem = displayedNews[index];
        if (newsItem) {
          return (
            <PressBox key={newsItem.id}>
              <img src={newsItem.logoImageSrc} alt={newsItem.pressName} />
              {!subscription.find((press) => press.id === newsItem.id) ? (
                <span onClick={() => subscribePress(newsItem)}>+ 구독하기</span>
              ) : (
                <span onClick={() => unsubscribePress(newsItem.id)}>
                  - 해지하기
                </span>
              )}
            </PressBox>
          );
        } else {
          return <PressBox></PressBox>;
        }
      })}
    </PressGridWrap>
  );
}

async function setData(endpoint, setFn) {
  try {
    const data = await getData(endpoint);
    setFn(data);
  } catch (error) {
    console.error(error);
  }
}

export default TotalGrid;
