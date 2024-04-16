import { styled } from "styled-components";
const RollingNewsArea = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 930px;
  height: 49px;
  margin: 2rem 0;
`;

const AutoRollingNews = styled.div`
  display: flex;
  justify-content: flex-start;
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

const RollingNewsList = styled.div`
  position: relative;
  width: 80%;
  height: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function RollingArea() {
  return (
    <RollingNewsArea>
      <AutoRollingNews>
        <span>연합뉴스</span>
        <RollingNewsList></RollingNewsList>
      </AutoRollingNews>
      <AutoRollingNews>
        <span>연합뉴스</span>
        <RollingNewsList></RollingNewsList>
      </AutoRollingNews>
    </RollingNewsArea>
  );
}

export default RollingArea;
