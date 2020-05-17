import React from "react";
import "./GreenTomato.css";
import tomato from "../../../assets/images/tomato";

const GreenTomato = () => {
  console.log(tomato.greenTomato);
  return (
    <div className={`green-tomato-wrapper`}>
      <img
        src={tomato.greenTomato}
        className={`green-tomato-wrapper__green-tomato`}
        alt="greenTomato"
      />
    </div>
  );
};

export default GreenTomato;
