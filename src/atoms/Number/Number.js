import React from "react";
import PropTypes from "prop-types";
import "./Number.css";

const Number = (props) => {
  const { number } = props;

  return <div className="number">{number}</div>;
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Number;
