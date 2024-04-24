import { styled, keyframes } from "styled-components";
import { useState, useEffect } from "react";
import categories from "../../data/categories.js";
import NewsList from "./NewsList.js";
import leftBtn from "../../assets/LeftButton.svg";
import rightBtn from "../../assets/RightButton.svg";

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const PressWrap = styled.div`
  width: 930px;
  height: 388px;
  border: 1px solid rgba(210, 218, 224, 1);
`;

const Category = styled.nav`
  height: 40px;
  border-bottom: 1px solid rgba(210, 218, 224, 1);
  background-color: rgba(245, 247, 249, 1);
  display: flex;
  align-items: center;
`;

const UnselectedCategory = styled.div`
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(135, 146, 152, 1);
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const SelectedCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 166px;
  height: 40px;
  background-color: rgba(120, 144, 231, 1);
  position: relative;
  z-index: 0;

  & span {
    padding: 0 10px;
    font-weight: 700;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    z-index: 2;
  }

  & span.count {
    font-weight: 700;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    z-index: 2;
  }

  & div {
    position: absolute;
    height: 100%;
    background-color: rgba(67, 98, 208, 1);
    top: 0;
    left: 0;
    z-index: 1;
    animation: ${progressAnimation} 20s linear infinite;
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

function TotalList({ news }) {
  const [category, setCategory] = useState("종합/경제");
  const [pressIndex, setPressIndex] = useState(0);
  const currentPresses = news.filter((press) => press.category === category);
  const currentPress = currentPresses[pressIndex];

  const handleCategoryClick = (clickedCategory) => {
    setPressIndex(0);
    setCategory(clickedCategory);
  };

  const gotoNextPage = () => {
    const nextPressIndex = pressIndex + 1;
    if (nextPressIndex >= currentPresses.length) {
      const nextCategory =
        categories[categories.findIndex((item) => item === category) + 1];
      nextCategory ? setCategory(nextCategory) : setCategory(categories[0]);
      setPressIndex(0);
      return;
    }
    setPressIndex(nextPressIndex);
  };

  const gotoPrevPage = () => {
    const prevPressIndex = pressIndex - 1;
    if (prevPressIndex <= 0) {
      const prevCategory =
        categories[categories.findIndex((item) => item === category) - 1];
      prevCategory
        ? setCategory(prevCategory)
        : setCategory(categories[categories.length - 1]);
      setPressIndex(0);
      return;
    }
    setPressIndex(prevPressIndex);
  };

  useEffect(() => {
    const interval = setInterval(gotoNextPage, 20000);
    return () => clearInterval(interval);
  }, [pressIndex]);

  return (
    <PressWrap>
      <Category>
        {categories.map((eachCategory) =>
          eachCategory === category ? (
            <SelectedCategory key={`${category}-${pressIndex}`}>
              <span>{eachCategory}</span>
              <span className="count">
                {pressIndex + 1}/{currentPresses.length}
              </span>
              <div></div>
            </SelectedCategory>
          ) : (
            <UnselectedCategory
              onClick={() => handleCategoryClick(eachCategory)}
            >
              {eachCategory}
            </UnselectedCategory>
          )
        )}
      </Category>
      <NewsList currentPress={currentPress}></NewsList>
      <LeftButton onClick={gotoPrevPage} src={leftBtn} alt="leftBtn" />
      <RightButton onClick={gotoNextPage} src={rightBtn} alt="rightBtn" />
    </PressWrap>
  );
}

export default TotalList;
