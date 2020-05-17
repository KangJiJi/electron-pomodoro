import React from "react";
import PropTypes from "prop-types";
import "./PauseButton.css";

const PauseButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className={`pause-button`} onClick={onClick}>
        Pause
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
