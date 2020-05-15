import React from "react";
import PropTypes from "prop-types";
import "./Timer.css";
import Number from "../../atoms/Number/Number";

const TimerNumber = (props) => {
  const { number } = props;

  const frontNumber = parseInt(number / 10);
  const backNumber = number % 10;

  return (
    <>
      <Number number={frontNumber} />
      <Number number={backNumber} />
    </>
  );
};

const Timer = (props) => {
  const { seconds } = props;

  const minute = parseInt(seconds / 60);
  const second = seconds % 60;

  return (
    <div className={`timer-wrapper`}>
      <TimerNumber number={minute} />:<TimerNumber number={second} />
    </div>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default Timer;
