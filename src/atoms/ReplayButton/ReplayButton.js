import React from "react";
import PropTypes from "prop-types";
import "./ReplayButton.css";
import button from "../../assets/images/button";

const ReplayButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className={`replay-button`} onClick={onClick}>
        <img
          src={button.replayButton}
          className={`replay-button__img`}
          alt="replayButton"
        />
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
