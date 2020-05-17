import React from "react";
import "./RedTomato.css";
import tomato from "../../../assets/images/tomato";

const RedTomato = () => {
  return (
    <div className={`red-tomato-wrapper`}>
      <img
        src={tomato.redTomato}
        className={`red-tomato-wrapper__red-tomato`}
        alt="redTomato"
      />
    </div>
  );
};

export default RedTomato;
