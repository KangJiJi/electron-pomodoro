import React from "react";
import "./Colon.css";
import colon from "../../assets/images/colon/colon.png";

const Colon = () => {
  return (
    <div className="colon-wrapper">
      <img src={colon} className={`colon-wrapper__colon`} alt="colon" />
    </div>
  );
};

export default Colon;
