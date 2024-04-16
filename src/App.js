import "./App.css";
import Header from "./components/Header/Header.js";
import RollingArea from "./components/Rolling/RollingBox.js";
import TapViewerArea from "./components/TapViewer/TapViewerArea.js";
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
        <TapViewerArea />
      </Wrap>
    </div>
  );
}

export default App;
