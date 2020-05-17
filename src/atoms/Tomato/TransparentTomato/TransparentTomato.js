import React from "react";
import "./TransparentTomato.css";
import tomato from "../../../assets/images/tomato";

const TransparentTomato = () => {
  return (
    <div className={`transparent-tomato-wrapper`}>
      <img
        src={tomato.transparentTomato}
        className={`transparent-tomato-wrapper__transparent-tomato`}
        alt="transparentTomato"
      />
    </div>
  );
};

export default TransparentTomato;
