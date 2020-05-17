import React from "react";
import PropTypes from "prop-types";
import "./PlayButton.css";
import button from "../../assets/images/button";

const PlayButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className={`play-button`} onClick={onClick}>
        <img
          draggable="false"
          src={button.playButton}
          className={`play-button__img`}
          alt="playButton"
        />
      </button>
    </>
  );
};

PlayButton.propTypes = {
  onClick: PropTypes.func,
};

PlayButton.defaultProps = {
  onClick: () => {},
};

export default PlayButton;
