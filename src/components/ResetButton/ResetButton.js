import React from "react";
import PropTypes from "prop-types";

const ResetButton = (props) => {
  const { onClick } = props;

  return (
    <div className={`reset-button-wrapper`}>
      <button className={`reset-button-wrapper__button`} onClick={onClick}>
        reset
      </button>
    </div>
  );
};

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetButton;
