import newsStandImg from "../../assets/Title.jpg";
import TodayDate from "./TodayDate.js";
import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 930px;
  height: 49px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src={newsStandImg} alt="newStandLogo" />
      <TodayDate />
    </HeaderWrapper>
  );
}

export default Header;
