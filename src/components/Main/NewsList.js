import { styled } from "styled-components";
import { useContext } from "react";
import { NewsContext } from "./Provider.js";
import { postData, deleteData } from "../../api/newsApi.js";
import { setData } from "../utils/utils.js";

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

function NewsListByPage({ currentPress, setAllSubs }) {
  const { subscription, setSubscription } = useContext(NewsContext);
  const { logoImageSrc, pressName, editedTime, headline, sideNews, id } =
    currentPress;

  const subscribePress = async (newsItem) => {
    await postData("subscription", newsItem);
    setData("subscription", setSubscription);
    setAllSubs("subscribed");
  };

  const unsubscribePress = async (newsId) => {
    await deleteData("subscription", newsId);
    setData("subscription", setSubscription);
  };
  return (
    <>
      <PressInfo>
        <span>
          <img src={logoImageSrc} alt={pressName} />
        </span>
        <span className="edit-date">{editedTime}</span>
        {!subscription.find((press) => press.id === id) ? (
          <button onClick={() => subscribePress(currentPress)}>
            + 구독하기
          </button>
        ) : (
          <button onClick={() => unsubscribePress(id)}>- 해지하기</button>
        )}
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
