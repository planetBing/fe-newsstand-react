import { styled } from "styled-components";

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
  margin: 0px 30px;
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

  & img {
    width: 320px;
    height: 200px;
    object-fit: cover;
  }

  & a {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: rgba(20, 33, 43, 1);
    text-decoration: none;
  }
`;

const Right = styled.div`
  width: 530px;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    margin-bottom: 0.625rem;
    text-align: left;
  }

  & a {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: rgba(75, 89, 102, 1);
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }

  & div {
    font-weight: 500;
    font-size: 14px;
    color: rgba(135, 146, 152, 1);
    text-align: left;
  }
`;

function NewsListByPage({ currentPress }) {
  const { logoImageSrc, pressName, editedTime, headline, sideNews } =
    currentPress;
  return (
    <>
      <PressInfo>
        <span>
          <img src={logoImageSrc} alt={pressName} />
        </span>
        <span className="edit-date">{editedTime}</span>
        <button>+ 구독하기</button>
      </PressInfo>
      <NewsList>
        <Left>
          <div>
            <a href={headline.href}>
              <img src={headline.thumbnailSrc} alt={headline.title} />
            </a>
            <a href={headline.href}>{headline.title}</a>
          </div>
        </Left>
        <Right>
          <ul>
            {sideNews.map((news) => (
              <li>
                <a href={news.href}>{news.title}</a>
              </li>
            ))}
          </ul>
          <div>{pressName}에서 직접 편집한 뉴스입니다.</div>
        </Right>
      </NewsList>
    </>
  );
}

export default NewsListByPage;