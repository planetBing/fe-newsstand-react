import React, { useState, useEffect } from "react";
import { getData } from "../../api/newsApi.js";

export const NewsContext = React.createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState([]);
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    setData("news", setNews);
    setData("subscription", setSubscription);
  }, []);

  return (
    <NewsContext.Provider
      value={{ news, setNews, subscription, setSubscription }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

async function setData(endpoint, setFn) {
  try {
    const data = await getData(endpoint);
    setFn(data);
  } catch (error) {
    console.error(error);
  }
}
