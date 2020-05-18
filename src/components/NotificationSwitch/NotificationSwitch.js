import React from "react";
import PropTypes from "prop-types";
import "./NotificationSwitch.css";
import Switch from "../../atoms/Switch/Switch";

const NotificationSwitch = (props) => {
  const { isNotificationOn, onClick } = props;
  return (
    <div className={`switch-wrapper`}>
      <Switch isOn={isNotificationOn} onClick={onClick} />
    </div>
  );
};

NotificationSwitch.propTypes = {
  isNotificationOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NotificationSwitch;
