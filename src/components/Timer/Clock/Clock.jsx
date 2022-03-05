import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
      <div className="timer-container">
        <div className="timer">
          <div className="clock">
            <div>
              <p>{timerDays}</p>
              <small>Days</small>
            </div>
            <span>:</span>
            <div>
              <p>{timerHours}</p>
              <small>Hours</small>
            </div>{" "}
            <span>:</span>
            <div>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </div>{" "}
            <span>:</span>
            <div>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </div>
          </div>
        </div>
      </div>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;