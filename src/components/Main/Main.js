import { styled } from "styled-components";
import { useState } from "react";
import listSvg from "../../assets/list-view.svg";
import gridSvg from "../../assets/grid-view.svg";
import GridView from "./GridView.js";
import ListView from "./ListView.js";

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

const TapArea = styled.span`
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
  font-weight: ${(props) => (props.isSelected ? "700;" : "500;")};
  color: ${(props) =>
    props.isSelected ? "rgba(20, 33, 43, 1)" : "rgba(135, 146, 152, 1)"};
`;

const ViewerArea = styled.div`
  & img {
    width: 25px;
    height: 25px;
    fill: #879298;
    margin-left: 5px;
  }
`;

const ListViewer = styled.img`
  ${(props) => props.grayScale && "filter: grayscale(100%);"}
`;

const GridViewer = styled.img`
  ${(props) => props.grayScale && "filter: grayscale(100%);"}
`;

function Main() {
  const [view, setView] = useState("grid");
  const [allSubs, setAllSubs] = useState("all");

  const clickListView = () => setView("list");

  const clickGridView = () => setView("grid");

  const handleAllSubsClick = () => setAllSubs("all");

  const handleSubscribedClick = () => setAllSubs("subscribed");

  return (
    <>
      <StyledTapViewerArea>
        <div>
          <TapArea onClick={handleAllSubsClick} isSelected={allSubs === "all"}>
            전체 언론사
          </TapArea>
          <TapArea
            onClick={handleSubscribedClick}
            isSelected={allSubs === "subscribed"}
          >
            내가 구독한 언론사
          </TapArea>
        </div>
        <ViewerArea>
          <ListViewer
            onClick={clickListView}
            src={listSvg}
            alt="list svg"
            grayScale={view === "grid"}
          />
          <GridViewer
            onClick={clickGridView}
            src={gridSvg}
            alt="grid svg"
            grayScale={view === "list"}
          />
        </ViewerArea>
      </StyledTapViewerArea>
      <MainWrap>
        {view === "grid" && (
          <GridView allSubs={allSubs} setAllSubs={setAllSubs} />
        )}
        {view === "list" && (
          <ListView allSubs={allSubs} setAllSubs={setAllSubs} />
        )}
      </MainWrap>
    </>
  );
}

export default Main;
