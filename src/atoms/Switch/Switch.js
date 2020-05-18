import React from "react";
import PropTypes from "prop-types";
import "./Switch.css";

const Switch = (props) => {
  const { isOn, onClick } = props;
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={onClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Switch;
