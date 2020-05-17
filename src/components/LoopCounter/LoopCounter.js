import React from "react";
import PropTypes from "prop-types";
import "./LoopCounter.css";
import Counter from "../../atoms/Counter/Counter";

const LoopCounter = (props) => {
  const { count } = props;
  return (
    <div className={`loop-counter-wrapper`}>
      <Counter count={count} />
    </div>
  );
};

LoopCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LoopCounter;
