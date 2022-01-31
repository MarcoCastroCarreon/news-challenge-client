import PropTypes from "prop-types";
import "./index.css";

function Error({ error }) {
  return (
    <div className="error-container">
      <h4 className="error-message">{error}</h4>
    </div>
  );
}

Error.propType = {
  error: PropTypes.string.isRequired,
};

export default Error;
