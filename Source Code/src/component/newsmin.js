import { useEffect, useState } from "react";
import "./newsmin.css";
import { useNavigate } from "react-router-dom";

const NewsMini = () => {
  const [news, setNews] = useState(null);
  const [page, setPage] = useState(1);
  const navigation = useNavigate();
  const loadNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&q=premier&pageSize=6&page=1&category=sports&apiKey=3471d73852134f03aaf6c47b92866e08`
    );
    const data = await response.json();
    setNews(data.articles.slice(1, 6));
  };

  useEffect(() => {
    loadNews();
  }, [page]);
  return (
    <div className="newsfeed">
      <div className="header" onClick={() => navigation("/news")}>
        <a className="header-inner" href="#">
          <div className="header-text">Featured News</div>
          <div className="icon">
            <span class="material-symbols-outlined">chevron_right</span>
          </div>
        </a>
      </div>
      <div className="body">
        {news && news.map((data, index) => <News data={data} key={index} />)}
      </div>
    </div>
  );
};

export default NewsMini;

const News = ({ data }) => {
  return (
    <a className="news-min" href={data.url} target="_blank">
      <img src={data.urlToImage} className="img-back"></img>
      <div className="title">{data.title}</div>
    </a>
  );
};
