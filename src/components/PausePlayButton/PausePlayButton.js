import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PausePlayButton.css";

const PausePlayButton = (props) => {
  const { isPause, onClick } = props;

  const handleButtonClick = () => onClick(isPause);

  return (
    <div className="pause-play-button-wrapper">
      {isPause ? (
        <button className={`button play-button`} onClick={handleButtonClick}>
          play
        </button>
      ) : (
        <button className={`button`} onClick={handleButtonClick}>
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
