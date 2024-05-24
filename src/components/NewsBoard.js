import React, { useEffect, useState } from "react"
import NewsCard from "./NewsCard"

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <>
      {articles && articles.map((item, index) => (
        <NewsCard item={item} />
      ))}
    </>
  );
};

export default NewsBoard;
