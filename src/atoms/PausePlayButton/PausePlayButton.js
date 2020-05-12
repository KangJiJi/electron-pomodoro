import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PausePlayButton.css";

const PausePlayButton = (props) => {
  const { onClick } = props;
  const [isPause, setIsPause] = useState(true);

  const handleButtonClick = () => {
    onClick(!isPause);
    setIsPause(!isPause);
  };

  return (
    <div className="pause-play-button-wrapper">
      {isPause ? (
        <button className={`button`} onClick={handleButtonClick}>
          pause
        </button>
      ) : (
        <button className={`button play-button`} onClick={handleButtonClick}>
          play
        </button>
      )}
    </div>
  );
};

PausePlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PausePlayButton;
