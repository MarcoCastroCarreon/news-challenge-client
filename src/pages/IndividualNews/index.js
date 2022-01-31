import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

function IndividualNews() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    if (!state) {
      return navigate("/");
    } else {
      setData(state);
    }
  }, [navigate, state]);

  return (
    <div className="container">
      <h3 className="home-title">UK Latest News</h3>
      <div className="individual-news-box">
        <h3 className="individual-news-title">{data.title}</h3>
        <img
          src={data.urlToImage}
          alt="news"
          className="individual-news-image"
        />
        <h5 className="individual-news-description">{data.description}</h5>
      </div>
    </div>
  );
}

export default IndividualNews;
