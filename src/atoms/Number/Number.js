import React from "react";
import PropTypes from "prop-types";
import "./Number.css";
import numberImg from "../../assets/images/number";

const Number = (props) => {
  const { number } = props;

  const findNumberImg = (num) => {
    if (num === 1) return numberImg.one;
    else if (num === 2) return numberImg.two;
    else if (num === 3) return numberImg.three;
    else if (num === 4) return numberImg.four;
    else if (num === 5) return numberImg.five;
    else if (num === 6) return numberImg.six;
    else if (num === 7) return numberImg.seven;
    else if (num === 8) return numberImg.eight;
    else if (num === 9) return numberImg.nine;
    else return numberImg.zero;
  };

  return (
    <div className="number-wrapper">
      <img
        src={findNumberImg(number)}
        className={`number-wrapper__number`}
        alt="number"
      />
    </div>
  );
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Number;
