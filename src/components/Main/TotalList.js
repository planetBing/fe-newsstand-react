import { styled } from "styled-components";

const PressWrap = styled.div`
  width: 930px;
  height: 388px;
  border: 1px solid rgba(210, 218, 224, 1);

  & nav {
    height: 40px;
    border-bottom: 1px solid rgba(210, 218, 224, 1);
    background-color: rgba(245, 247, 249, 1);
  }
`;

const PressInfo = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 1rem;

  & span {
    margin-right: 1rem;
  }

  & img {
    width: auto;
    height: 20px;
  }

  & button {
    width: 72px;
    height: 24px;
    background-color: rgba(245, 247, 249, 1);
    border: 1px solid rgba(210, 218, 224, 1);
    border-radius: 50px;
    font-weight: 500;
    font-size: 12px;
    color: rgba(135, 146, 152, 1);
    padding: 0px 6px;
  }

  & span.edit-date {
    font-weight: 500;
    font-size: 12px;
    color: rgba(95, 110, 118, 1);
  }
`;

const NewsList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 882px;
  height: 260px;
  margin: 0px 16px;
`;

const Left = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;

  & div {
    width: 320px;
    height: 200px;
    margin-bottom: 10px;
  }
`;

function TotalList({ news }) {
  const firstNews = news[0];
  return (
    <PressWrap>
      <nav></nav>
      <PressInfo>
        <span>
          <img src={firstNews.logoImageSrc} alt={firstNews.pressName} />
        </span>
        <span className="edit-date">{firstNews.editedTime}</span>
        <button>+ 구독하기</button>
      </PressInfo>
      <NewsList>
        <Left>
          <div>
            <a href={firstNews.headline.href}></a>
          </div>
        </Left>
      </NewsList>
    </PressWrap>
  );
}

export default TotalList;
