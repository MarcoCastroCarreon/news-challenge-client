import PropTypes from "prop-types";
import "./index.css";

function NewsInfo({
  title,
  description,
  image,
  author,
  source,
  url,
  onClickTitle,
  fullData,
}) {
  return (
    <div className="news-info">
      <span className="news-info-title" onClick={() => onClickTitle(fullData)}>
        {title}
      </span>
      <p className="news-info-description">{description}</p>
      <div className="news-info-image-container">
        <img src={image} alt="news" className="news-info-image" />
      </div>
      <div className="news-info-author-container">
        <span className="news-info-author">{author}</span>
        <a href={url} className="news-info-source">
          {source}
        </a>
      </div>
    </div>
  );
}

NewsInfo.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClickTitle: PropTypes.func.isRequired,
  fullData: PropTypes.any.isRequired,
};

export default NewsInfo;
