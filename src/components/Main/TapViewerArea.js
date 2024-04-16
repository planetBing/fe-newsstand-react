import { styled } from "styled-components";
import listSvg from "../../assets/rectangle-list.svg";
import gridSvg from "../../assets/apps.svg";

const TapViewerAreaStyle = styled.section`
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
    width: 20px;
    height: 20px;
    fill: #879298;
    margin-left: 10px;
  }
`;

function TapViewerArea() {
  return (
    <TapViewerAreaStyle>
      <TapArea>
        <span>전체 언론사</span>
        <span>내가 구독한 언론사</span>
      </TapArea>
      <ViewerArea>
        <img src={listSvg} alt="list svg" />
        <img src={gridSvg} alt="grid svg" />
      </ViewerArea>
    </TapViewerAreaStyle>
  );
}

export default TapViewerArea;
