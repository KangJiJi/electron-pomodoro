import React from "react";
import PropTypes from "prop-types";
import Counter from "../../atoms/Counter/Counter";

const LoopCounter = (props) => {
  const { count } = props;
  return (
    <>
      <Counter count={count} />
    </>
  );
};

LoopCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LoopCounter;
