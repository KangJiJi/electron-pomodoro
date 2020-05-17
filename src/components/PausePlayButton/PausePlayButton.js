import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PausePlayButton.css";
import PlayButton from "../../atoms/PlayButton/PlayButton";
import PauseButton from "../../atoms/PauseButton/PauseButton";

const PausePlayButton = (props) => {
  const { isPause, onClick } = props;

  const handleButtonClick = () => onClick(isPause);

  return (
    <div className="pause-play-button-wrapper">
      {isPause ? (
        <PlayButton onClick={handleButtonClick} />
      ) : (
        <PauseButton onClick={handleButtonClick} />
      )}
    </div>
  );
};

PausePlayButton.propTypes = {
  isPause: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PausePlayButton;
