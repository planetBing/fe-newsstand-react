import "../css/App.css";
import Header from "./Header/Header.js";
import RollingArea from "./Rolling/RollingArea.js";
import Main from "./Main/Main.js";
import { getData } from "../api/newsApi.js";

import { styled } from "styled-components";
import { useState, useEffect } from "react";

const Wrap = styled.div`
  width: 930px;
  margin: 7rem auto;
`;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setData("news", setNews);
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

async function setData(endpoint, setFn) {
  try {
    const data = await getData(endpoint);
    setFn(data);
  } catch (error) {
    console.error(error);
  }
}

export default App;
