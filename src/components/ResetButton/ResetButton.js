import React from "react";
import PropTypes from "prop-types";
import "./ResetButton.css";
import ReplayButton from "../../atoms/ReplayButton/ReplayButton";

const ResetButton = (props) => {
  const { onClick } = props;

  return (
    <div className={`reset-button-wrapper`}>
      <ReplayButton onClick={onClick} />
    </div>
  );
};

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetButton;
