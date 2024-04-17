import { styled, keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
// import RollingNewsBox from "./RollingNewsBox.js";
import breakingNews from "../../breakingNews.js";

const moveUp = css`
  ${keyframes`
  0% { transform: translateY(0); }
  90% { transform: translateY(0); }
  100% { transform: translateY(-50px); }
`} 5s linear;
`;

const RollingNewsArea = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 930px;
  height: 49px;
  margin: 2rem 0;
`;

const StyledRollingBox = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
  width: 461px;
  height: 49px;
  border: 1px solid rgba(210, 218, 224, 1);
  background-color: rgba(245, 247, 249, 1);

  & span {
    margin: 16px;
    font-weight: 700;
    font-size: 14px;
  }
`;

const StyledRollingNewsList = styled.div`
  position: relative;
  width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 100%;

  & ul {
    list-style: none;
  }

  & li {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & li.prev {
    top: -40px;
    animation: ${moveUp};
  }

  & li.current {
    top: 0px;
    animation: ${moveUp};
  }

  & li.next {
    top: 50px;
    animation: ${moveUp};
  }

  & a {
    font-weight: 500;
    font-size: 14px;
    color: rgba(95, 110, 118, 1);
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

function RollingArea() {
  const firstHeadlines = breakingNews.slice(0, 5);
  const [newsList, setItems] = useState(firstHeadlines);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const lastItem = newItems.shift();
        newItems.push(lastItem);
        return newItems;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const newsListHtml = newsList.map((item, index) => (
    <li
      className={
        index === 0
          ? "prev"
          : index === 1
          ? "current"
          : index === 2
          ? "next"
          : ""
      }
    >
      <a href={item.href}>{item.title}</a>
    </li>
  ));

  return (
    <RollingNewsArea>
      <StyledRollingBox>
        <span>연합뉴스</span>
        <StyledRollingNewsList key={newsList[0].title}>
          <ul>{newsListHtml}</ul>
        </StyledRollingNewsList>
      </StyledRollingBox>
      <StyledRollingBox>
        <span>연합뉴스</span>
        <StyledRollingNewsList></StyledRollingNewsList>
      </StyledRollingBox>
    </RollingNewsArea>
  );
}

export default RollingArea;