import "./css//App.css";
import Header from "./components/Header/Header.js";
import RollingArea from "./components/Rolling/RollingArea.js";
import Main from "./components/Main/Main.js";

import { styled } from "styled-components";
import { useState, useEffect } from "react";

const NEWS_API = process.env.REACT_APP_SERVER_NEWS;

const Wrap = styled.div`
  width: 930px;
  margin: 7rem auto;
`;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(NEWS_API)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="App">
      <Wrap>
        <Header />
        <RollingArea />
        <Main news={news} />
      </Wrap>
    </div>
  );
}

export default App;
