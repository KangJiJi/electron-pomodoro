import React from "react";
import PropTypes from "prop-types";
import "./ReplayButton.css";

const ReplayButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className={`replay-button`} onClick={onClick}>
        Replay
      </button>
    </>
  );
};

ReplayButton.propTypes = {
  onClick: PropTypes.func,
};

ReplayButton.defaultProps = {
  onClick: () => {},
};

export default ReplayButton;
