import React, { useState, useEffect } from "react";
import { setData } from "../utils/utils.js";

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
