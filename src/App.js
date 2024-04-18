import "./App.css";
import Header from "./components/Header/Header.js";
import RollingArea from "./components/Rolling/RollingArea.js";
import TapViewerArea from "./components/Main/TapViewerArea.js";
import PressWrap from "./components/Main/PressWrap.js";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

const Wrap = styled.div`
  width: 930px;
  margin: 7rem auto;
`;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="App">
      <Wrap>
        <Header />
        <RollingArea />
        <TapViewerArea />
        <PressWrap news={news} />
      </Wrap>
    </div>
  );
}

export default App;
