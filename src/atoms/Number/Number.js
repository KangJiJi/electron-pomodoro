import React from "react";
import "./Number.css";

const Number = (props) => {
  const { number } = props;

  return <div className="number">{number}</div>;
};

export default Number;
