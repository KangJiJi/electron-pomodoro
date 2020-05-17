import React from "react";
import "./GreenTomato.css";
import tomato from "../../../assets/images/tomato";

const GreenTomato = () => {
  return (
    <div className={`green-tomato-wrapper`}>
      <img
        draggable="false"
        src={tomato.greenTomato}
        className={`green-tomato-wrapper__green-tomato`}
        alt="greenTomato"
      />
    </div>
  );
};

export default GreenTomato;
