import React from "react";
import PropTypes from "prop-types";
import "./PauseButton.css";
import button from "../../assets/images/button";

const PauseButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className={`pause-button`} onClick={onClick}>
        <img
          src={button.pauseButton}
          className={`pause-button__img`}
          alt="pauseButton"
        />
      </button>
    </>
  );
};

PauseButton.propTypes = {
  onClick: PropTypes.func,
};

PauseButton.defaultProps = {
  onClick: () => {},
};

export default PauseButton;
