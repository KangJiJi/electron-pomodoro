import React from "react";
import "./AmberTomato.css";
import tomato from "../../../assets/images/tomato";

const AmberTomato = () => {
  return (
    <div className={`amber-tomato-wrapper`}>
      <img
        draggable="false"
        src={tomato.amberTomato}
        className={`amber-tomato-wrapper__amber-tomato`}
        alt="amberTomato"
      />
    </div>
  );
};

export default AmberTomato;
