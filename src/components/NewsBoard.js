import React, { useEffect, useState } from "react";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const API_KEY = process.env.API_KEY;

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(data)
      }).catch(err=>console.log(err));
  }, [category]);

  return <div></div>;
};

export default NewsBoard;
