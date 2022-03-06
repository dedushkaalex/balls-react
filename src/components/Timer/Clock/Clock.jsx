import { useMediaQuery } from "@mui/material";
import React from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  const matches = useMediaQuery("(max-width:730px)")
  const phones = useMediaQuery("(max-width: 924px)")
  return (
      <div className="timer-container">
        <div className="timer">
          <div className="clock">
            <div>
              <p style={{fontSize: phones ? '32px' : "80px"}} className="yellowTxt">{timerDays}</p>
              <small style={{fontSize: matches ? "12px" : "20px", fontFamily:"Montserrat, sans-serif", color:"#fff", opacity: matches ? "0.6" : '1'}} >Days</small>
            </div>
            <span style={{fontSize: matches ? "25px" : phones ? "50px" : "80px", margin: matches ? "0 12px" : phones ? "0 40px" :"0 60px" }} className="yellowTxt2">:</span>
            <div>
              <p style={{fontSize: phones ? '32px' : "80px"}} className="yellowTxt">{timerHours}</p>
              <small style={{fontSize: matches ? "12px" : "20px", fontFamily:"Montserrat, sans-serif", color:"#fff", opacity: matches ? "0.6" : '1'}} >Hours</small>
            </div>{" "}
            <span style={{fontSize: matches ? "25px" : phones ? "50px" : "80px", margin: matches ? "0 12px" : phones ? "0 40px" :"0 60px" }} className="yellowTxt2">:</span>
            <div>
              <p style={{fontSize: phones ? '32px' : "80px"}} className="yellowTxt">{timerMinutes}</p>
              <small style={{fontSize: matches ? "12px" : "20px", fontFamily:"Montserrat, sans-serif", color:"#fff", opacity: matches ? "0.6" : '1'}}>Minutes</small>
            </div>{" "}
            <span style={{fontSize: matches ? "25px" : phones ? "50px" : "80px", margin: matches ? "0 12px" : phones ? "0 40px" :"0 60px" }} className="yellowTxt2">:</span>
            <div>
              <p style={{fontSize: phones ? '32px' : "80px"}} className="yellowTxt">{timerSeconds}</p>
              <small style={{fontSize: matches ? "12px" : "20px", fontFamily:"Montserrat, sans-serif", color:"#fff", opacity: matches ? "0.6" : '1'}}>Seconds</small>
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