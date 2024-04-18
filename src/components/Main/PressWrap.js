import { styled } from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;

const PressGridWrap = styled.div`
  width: 930px;
  height: 388px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid rgba(210, 218, 224, 1);
  border-left: 1px solid rgba(210, 218, 224, 1);
`;

const PressBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(210, 218, 224, 1);
  border-right: 1px solid rgba(210, 218, 224, 1);
  height: 97px;

  & img {
    max-width: 50%;
    object-fit: contain;
  }
`;

function PressWrap({ news }) {
  if (news.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Main>
      <PressGridWrap>
        {news.slice(0, 24).map((news, index) => (
          <PressBox key={index}>
            <img src={news.logoImageSrc} alt={news.pressName}></img>
          </PressBox>
        ))}
      </PressGridWrap>
    </Main>
  );
}

export default PressWrap;
