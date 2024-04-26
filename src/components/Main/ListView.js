import { styled, keyframes } from "styled-components";
import { useState, useEffect, useContext } from "react";
import { NewsContext } from "./Provider.js";
import NewsList from "./NewsList.js";
import leftBtn from "../../assets/LeftButton.svg";
import rightBtn from "../../assets/RightButton.svg";

const TIME_TO_TURN_PAGE = 20;
const FIRST_INDEX = 0;

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
  width: 930px;
  height: 40px;
  border-bottom: 1px solid rgba(210, 218, 224, 1);
  background-color: rgba(245, 247, 249, 1);
  display: flex;
  align-items: center;
  overflow: scroll;
  white-space: nowrap;
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
  // padding-right: 70px;

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
    animation: ${progressAnimation} ${TIME_TO_TURN_PAGE}s linear infinite;
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

function TotalList({ allSubs, setAllSubs }) {
  const { news, subscription } = useContext(NewsContext);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [pressIndex, setPressIndex] = useState(FIRST_INDEX);

  useEffect(() => {
    const newCategories =
      allSubs === "all"
        ? [...new Set(news.map((item) => item.category))]
        : [...new Set(subscription.map((item) => item.pressName))];
    setCategories(newCategories);
    setCurrentCategory(newCategories[0]);
    setPressIndex(FIRST_INDEX);
  }, [allSubs, news, subscription]);

  const currentPresses =
    allSubs === "all"
      ? news.filter((press) => press.category === currentCategory)
      : subscription.filter((press) => press.pressName === currentCategory);
  const currentPress = currentPresses[pressIndex];

  const handleCategoryClick = (clickedCategory) => {
    setPressIndex(FIRST_INDEX);
    setCurrentCategory(clickedCategory);
  };

  const gotoNextPage = () => {
    const nextPressIndex = pressIndex + 1;
    if (nextPressIndex >= currentPresses.length) {
      const nextCategory =
        categories[
          categories.findIndex((item) => item === currentCategory) + 1
        ];
      nextCategory
        ? setCurrentCategory(nextCategory)
        : setCurrentCategory(categories[FIRST_INDEX]);
      setPressIndex(FIRST_INDEX);
      return;
    }
    setPressIndex(nextPressIndex);
  };

  const gotoPrevPage = () => {
    const prevPressIndex = pressIndex - 1;
    if (prevPressIndex <= FIRST_INDEX) {
      const prevCategory =
        categories[
          categories.findIndex((item) => item === currentCategory) - 1
        ];
      prevCategory
        ? setCurrentCategory(prevCategory)
        : setCurrentCategory(categories[categories.length - 1]);
      setPressIndex(FIRST_INDEX);
      return;
    }
    setPressIndex(prevPressIndex);
  };

  useEffect(() => {
    const interval = setInterval(gotoNextPage, TIME_TO_TURN_PAGE * 1000);
    return () => clearInterval(interval);
  }, [pressIndex, currentCategory]);

  return (
    <PressWrap>
      <Category>
        {categories.map((eachCategory) =>
          eachCategory === currentCategory ? (
            <SelectedCategory key={`${currentCategory}-${pressIndex}`}>
              <span>{eachCategory}</span>
              {allSubs === "all" && (
                <span className="count">
                  {pressIndex + 1}/{currentPresses.length}
                </span>
              )}
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
      {currentPress && (
        <NewsList
          currentPress={currentPress}
          setAllSubs={setAllSubs}
        ></NewsList>
      )}
      <LeftButton onClick={gotoPrevPage} src={leftBtn} alt="leftBtn" />
      <RightButton onClick={gotoNextPage} src={rightBtn} alt="rightBtn" />
    </PressWrap>
  );
}

export default TotalList;
