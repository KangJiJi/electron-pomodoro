import React from "react";
import PropTypes from "prop-types";
import "./TomatoTrafficLights.css";
import Tomato from "../../atoms/Tomato";

const TomatoTrafficLights = (props) => {
  const { trafficLightsState } = props;
  return (
    <div className={`tomato-traffic-lights-wrapper`}>
      <div
        className={`tomato-traffic-lights-wrapper__light-wrapper tomato-traffic-lights-wrapper__red-light-wrapper`}
      >
        {trafficLightsState.stop ? (
          <Tomato.RedTomato />
        ) : (
          <Tomato.TransparentTomato />
        )}
      </div>
      <div
        className={`tomato-traffic-lights-wrapper__light-wrapper tomato-traffic-lights-wrapper__amber-light-wrapper`}
      >
        {trafficLightsState.pending ? (
          <Tomato.AmberTomato />
        ) : (
          <Tomato.TransparentTomato />
        )}
      </div>
      <div
        className={`tomato-traffic-lights-wrapper__light-wrapper tomato-traffic-lights-wrapper__green-light-wrapper`}
      >
        {trafficLightsState.start ? (
          <Tomato.GreenTomato />
        ) : (
          <Tomato.TransparentTomato />
        )}
      </div>
    </div>
  );
};

TomatoTrafficLights.propTypes = {
  trafficLightsState: PropTypes.shape({
    start: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    stop: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TomatoTrafficLights;
