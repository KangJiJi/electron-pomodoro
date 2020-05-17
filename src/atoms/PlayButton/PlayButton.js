import React from "react";
import PropTypes from "prop-types";
import "./PlayButton.css";

const PlayButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className={`play-button`} onClick={onClick}>
        Play
      </button>
    </>
  );
};

PlayButton.propTypes = {
  onClick: PropTypes.func,
};

PlayButton.defaultProps = {
  onClick: () => {},
};

export default PlayButton;
