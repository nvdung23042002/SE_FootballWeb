import { useEffect, useState } from "react";
import './news.css';

const NewsFeed = () => {
    const [news, setNews] = useState(null);
    const [page, setPage] = useState(1);
    const loadNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&q=premier&pageSize=30&page=${page}&category=sports&apiKey=3471d73852134f03aaf6c47b92866e08`);
        const data = await response.json();
        setNews(data.articles);
    }

    function handlePre() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function handleNext() {
        setPage(page + 1);
    }

    useEffect(() => {
        loadNews();
    }, [page]);
    return (
        <div style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
            {
                news && news.map(data => <News data={data} />)
            }
            {
                news ? (
                    <div style={{ display: 'flex', flexDirection: 'row', width: '40%', height: '80px', justifyContent: 'space-around', marginTop: '20px' }}>
                        <button onClick={() => handlePre()} className="but">Previous</button>
                        <button onClick={() => handleNext()} className="but">Next</button>
                    </div>
                ) : null
            }
        </div>
    )
}

export default NewsFeed;

const News = ({ data }) => {
    if (!data.urlToImage) {
        return;
    }
    return (
        <a className="news" href={data.url} target="_blank">
            <img src={data.urlToImage} />
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div className="title-news">{data.title}</div>
                <div className="des">{data.description}</div>
            </div>


        </a>
    )
}