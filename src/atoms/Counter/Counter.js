import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = (props) => {
  const { count } = props;

  return <div className="counter">{count}</div>;
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
