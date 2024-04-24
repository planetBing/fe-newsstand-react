import "../css/App.css";
import Header from "./Header/Header.js";
import RollingArea from "./Rolling/RollingArea.js";
import Main from "./Main/Main.js";
import { NewsProvider } from "./Main/Provider.js";

import { styled } from "styled-components";

const Wrap = styled.div`
  width: 930px;
  margin: 7rem auto;
`;

function App() {
  return (
    <div className="App">
      <Wrap>
        <Header />
        <RollingArea />
        <NewsProvider>
          <Main />
        </NewsProvider>
      </Wrap>
    </div>
  );
}

export default App;
