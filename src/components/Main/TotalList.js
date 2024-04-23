import { styled } from "styled-components";
import { useState } from "react";
import leftBtn from "../../assets/LeftButton.svg";
import rightBtn from "../../assets/RightButton.svg";

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

  & div {
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(135, 146, 152, 1);
    text-decoration: none;
  }

  & div:hover {
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
    margin-right: 15px;
  }
`;

const PressInfo = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 1rem;

  & span {
    margin-right: 1rem;
  }

  & img {
    width: auto;
    height: 20px;
  }

  & button {
    width: 72px;
    height: 24px;
    background-color: rgba(245, 247, 249, 1);
    border: 1px solid rgba(210, 218, 224, 1);
    border-radius: 50px;
    font-weight: 500;
    font-size: 12px;
    color: rgba(135, 146, 152, 1);
    padding: 0px 6px;
  }

  & span.edit-date {
    font-weight: 500;
    font-size: 12px;
    color: rgba(95, 110, 118, 1);
  }
`;

const NewsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 882px;
  height: 260px;
  margin: 0px 30px;
`;

const Left = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  & div {
    width: 320px;
    height: 200px;
    margin-bottom: 10px;
  }

  & img {
    width: 320px;
    height: 200px;
    object-fit: cover;
  }

  & a {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: rgba(20, 33, 43, 1);
    text-decoration: none;
  }
`;

const Right = styled.div`
  width: 530px;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    margin-bottom: 0.625rem;
    text-align: left;
  }

  & a {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: rgba(75, 89, 102, 1);
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & div {
    font-weight: 500;
    font-size: 14px;
    color: rgba(135, 146, 152, 1);
    text-align: left;
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
  const { logoImageSrc, pressName, editedTime, headline, sideNews } =
    currentPress;

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

  const categories = [
    "종합/경제",
    "방송/통신",
    "IT",
    "영자지",
    "스포츠/연예",
    "매거진/전문지",
    "지역",
  ];

  return (
    <PressWrap>
      <Category>
        {categories.map((eachCategory) =>
          eachCategory === category ? (
            <SelectedCategory>
              <span>{eachCategory}</span>
              <span className="count">
                {pressIndex + 1}/{currentPresses.length}
              </span>
            </SelectedCategory>
          ) : (
            <div onClick={() => handleCategoryClick(eachCategory)}>
              {eachCategory}
            </div>
          )
        )}
      </Category>
      <PressInfo>
        <span>
          <img src={logoImageSrc} alt={pressName} />
        </span>
        <span className="edit-date">{editedTime}</span>
        <button>+ 구독하기</button>
      </PressInfo>
      <NewsList>
        <Left>
          <div>
            <a href={headline.href}>
              <img src={headline.thumbnailSrc} alt={headline.title} />
            </a>
            <a href={headline.href}>{headline.title}</a>
          </div>
        </Left>
        <Right>
          <ul>
            {sideNews.map((news) => (
              <li>
                <a href={news.href}>{news.title}</a>
              </li>
            ))}
          </ul>
          <div>{pressName}에서 직접 편집한 뉴스입니다.</div>
        </Right>
      </NewsList>
      <LeftButton onClick={gotoPrevPage} src={leftBtn} alt="leftBtn" />
      <RightButton onClick={gotoNextPage} src={rightBtn} alt="rightBtn" />
    </PressWrap>
  );
}

// function groupByCategory(news) {
//   const categoriesMap = new Map();

//   news.forEach((item, index) => {
//     const { category } = item;
//     if (categoriesMap.has(category)) {
//       const { firstIndex, count } = categoriesMap.get(category);
//       categoriesMap.set(category, { firstIndex, count: count + 1 });
//     } else {
//       categoriesMap.set(category, { firstIndex: index, count: 1 });
//     }
//   });

//   return categoriesMap;
// }

export default TotalList;
