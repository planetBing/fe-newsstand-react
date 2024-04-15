import "./App.css";
import Header from "./components/Header/Header.js";
import { styled } from "styled-components";

const Wrap = styled.div`
  width: 930px;
  margin: 60px auto;
`;

function App() {
  return (
    <div className="App">
      <Wrap>
        <Header />
      </Wrap>
    </div>
  );
}

export default App;
