import { styled } from "styled-components";
import { useState } from "react";
import listSvg from "../../assets/list-view.svg";
import gridSvg from "../../assets/grid-view.svg";
import TotalGrid from "./TotalGrid.js";
import TotalList from "./TotalList.js";

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;

const StyledTapViewerArea = styled.section`
  width: 930px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TapArea = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgba(135, 146, 152, 1);

  & span {
    margin-right: 20px;
  }
`;

const ViewerArea = styled.div`
  & img {
    width: 25px;
    height: 25px;
    fill: #879298;
    margin-left: 5px;
  }
`;

const ListView = styled.img`
  ${(props) => props.grayScale && "filter: grayscale(100%);"}
`;

const GridView = styled.img`
  ${(props) => props.grayScale && "filter: grayscale(100%);"}
`;

function Main({ news }) {
  const [view, setView] = useState("grid");

  const clickListView = () => setView("list");

  const clickGridView = () => setView("grid");

  return (
    <>
      <StyledTapViewerArea>
        <TapArea>
          <span>전체 언론사</span>
          <span>내가 구독한 언론사</span>
        </TapArea>
        <ViewerArea>
          <ListView
            onClick={clickListView}
            src={listSvg}
            alt="list svg"
            grayScale={view === "grid"}
          />
          <GridView
            onClick={clickGridView}
            src={gridSvg}
            alt="grid svg"
            grayScale={view === "list"}
          />
        </ViewerArea>
      </StyledTapViewerArea>
      <MainWrap>
        {view === "grid" && <TotalGrid news={news} />}
        {view === "list" && <TotalList news={news} />}
      </MainWrap>
    </>
  );
}

export default Main;
