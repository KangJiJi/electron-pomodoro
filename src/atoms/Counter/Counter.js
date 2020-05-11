import React from "react";
import "./Counter.css";

const Counter = (props) => {
  const { count } = props;

  return <div className="counter">{count}</div>;
};

export default Counter;
