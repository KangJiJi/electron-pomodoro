import React from "react";
import PropTypes from "prop-types";
import "./Tomato.css";

const Tomato = (props) => {
  const { isOn } = props;

  return (
    <div className={`tomato-wrapper`}>
      {isOn ? (
        <div className={`tomato tomato-on`}>Tomato on</div>
      ) : (
        <div className={`tomato tomato-off`}>Tomato off</div>
      )}
    </div>
  );
};

Tomato.propTypes = {
  isOn: PropTypes.bool.isRequired,
};

export default Tomato;
