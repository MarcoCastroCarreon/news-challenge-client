// 3rd party dependencies
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

// dependencies
import NewsInfo from "../../components/NewsInfo";
import Error from "../../components/Error";
import { getLatestNews } from "../../api";

// CSS
import "./index.css";

function Home() {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * @name getNewsData
   * @description fetch the latest news information + setting the data and the loading state
   */
  const getNewsData = async () => {
    setLoading(true);
    try {
      const info = await getLatestNews();

      // Just to see the pacman
      setTimeout(() => {
        setNewsData(info.result);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setServerError("Error trying to fetch news");
      setLoading(false);
    }
  };

  /**
   * @name navigateToIndividualNews
   * @description redirect to /news page passing the data from the clicked news
   * @param {object} data this is the data from the clicked news
   */
  const navigateToIndividualNews = (data) => {
    navigate("/news", { state: data });
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div>
      <div className="home-title-container">
        <h3 className="home-title">UK Latest News</h3>
      </div>
      <div className="home-loader-container">
        <PacmanLoader loading={loading} color="white" size={"15"} />
        {serverError && <Error error={serverError} />}
      </div>
      <div className="home-news-container">
        {newsData.map((data, index) => (
          <NewsInfo
            key={index}
            title={data.title}
            description={data.description}
            image={data.urlToImage}
            url={data.url}
            source={data.source.name}
            author={data.author || "anonymous"}
            onClickTitle={navigateToIndividualNews}
            fullData={data}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
