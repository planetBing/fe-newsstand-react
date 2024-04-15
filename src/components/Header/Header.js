import newsStandImg from "../../assets/Title.jpg";
import TodayDate from "./TodayDate.js";

function Header() {
  return (
    <header>
      <img src={newsStandImg} alt="newStandLogo" />
      <TodayDate />
    </header>
  );
}

export default Header;
