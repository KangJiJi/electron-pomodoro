import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PausePlayButton.css";

const PausePlayButton = (props) => {
  const { isPause, onClick } = props;

  const handleButtonClick = () => onClick(isPause);

  return (
    <div className="pause-play-button-wrapper">
      {isPause ? (
        <button
          className={`pause-play-button-wrapper__button pause-play-button-wrapper__play-button`}
          onClick={handleButtonClick}
        >
          play
        </button>
      ) : (
        <button
          className={`pause-play-button-wrapper__button pause-play-button-wrapper__pause-button`}
          onClick={handleButtonClick}
        >
          pause
        </button>
      )}
    </div>
  );
};

PausePlayButton.propTypes = {
  isPause: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PausePlayButton;
