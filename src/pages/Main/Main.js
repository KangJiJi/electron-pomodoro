import React, { useState } from "react";
import "./Main.css";
import useInterval from "../../customHooks/useInterval/useInterval";
import NotificationSwitch from "../../components/NotificationSwitch/NotificationSwitch";
import LoopCounter from "../../components/LoopCounter/LoopCounter";
import TomatoTrafficLights from "../../components/TomatoTrafficLights/TomatoTrafficLights";
import Timer from "../../components/Timer/Timer";
import PausePlayButton from "../../components/PausePlayButton/PausePlayButton";
import ResetButton from "../../components/ResetButton/ResetButton";
import EasterEgg from "../../components/EasterEgg/EasterEgg";
import notification from "../../electronApi/notification/notification";

// m/s
const ONE_SECOND = 1000;

// Seconds
const DEFAULT_TIME = 1800;
const READY_BREAK_TIME = 360;
const BREAK_TIME = 300;
const END_TIME = 0;

// Traffic lights state
const DEFAULT_STATE = {
  start: false,
  pending: false,
  stop: false,
};
const START = { ...DEFAULT_STATE, start: true };
const PENDING = { ...DEFAULT_STATE, pending: true };
const STOP = { ...DEFAULT_STATE, stop: true };

const Main = () => {
  const [loopCount, setLoopCount] = useState(0);
  const [stateIndicator, setStateIndicator] = useState(START);
  const [seconds, setSeconds] = useState(DEFAULT_TIME);
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const [isPause, setIsPause] = useState(true);

  const changeNotificationState = () => setIsNotificationOn(!isNotificationOn);
  const changePauseState = () => setIsPause(!isPause);

  const noticeNotification = (title, body) => {
    if (!isNotificationOn) return;
    notification(title, body);
  };

  const changeStateIndicatorToStart = () => setStateIndicator(START);
  const plusLoopCount = () => setLoopCount(loopCount + 1);
  const chargeTimer = () => setSeconds(DEFAULT_TIME);

  const changeStateIndicatorToPending = () => setStateIndicator(PENDING);

  const changeStateIndicatorToStop = () => setStateIndicator(STOP);

  const resetTimer = () => {
    changeStateIndicatorToStart();
    chargeTimer();
  };

  const handleTimer = () => {
    if (seconds === READY_BREAK_TIME) {
      changeStateIndicatorToPending();
    }
    if (seconds === BREAK_TIME) {
      noticeNotification("It's break time.", "Take it easy!");
      changeStateIndicatorToStop();
    }
    if (seconds === END_TIME) {
      noticeNotification("It's time to start.", "Cheer up!");
      changeStateIndicatorToStart();
      plusLoopCount();
      chargeTimer();
    }

    if (seconds > 0) setSeconds(seconds - 1);
  };

  useInterval(handleTimer, isPause ? null : ONE_SECOND);

  return (
    <>
      <header className={`header`}>
        <NotificationSwitch
          isNotificationOn={isNotificationOn}
          onClick={changeNotificationState}
        />
        <LoopCounter count={loopCount} />
      </header>
      <main>
        <div className={`indicator`}>
          <TomatoTrafficLights trafficLightsState={stateIndicator} />
        </div>
        <div className={`timer`}>
          <Timer seconds={seconds} />
        </div>
        <div className={`controller-button`}>
          <PausePlayButton isPause={isPause} onClick={changePauseState} />
          <ResetButton onClick={resetTimer} />
        </div>
        <EasterEgg />
      </main>
    </>
  );
};

export default Main;
