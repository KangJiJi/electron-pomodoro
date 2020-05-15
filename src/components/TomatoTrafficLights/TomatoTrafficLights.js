import React from "react";
import PropTypes from "prop-types";
import Tomato from "../Tomato/Tomato";

const TomatoTrafficLights = (props) => {
  const { trafficLightsState } = props;
  return (
    <div className={`tomato-traffic-lights-wrapper`}>
      <div className={`red-light-wrapper`}>
        <Tomato isOn={trafficLightsState.start} />
      </div>
      <div className={`amber-light-wrapper`}>
        <Tomato isOn={trafficLightsState.pending} />
      </div>
      <div className={`green-light-wrapper`}>
        <Tomato isOn={trafficLightsState.stop} />
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
