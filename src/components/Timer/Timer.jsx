/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Clock from "./Clock/Clock";



const Timer = () => {
  const matches = useMediaQuery("(max-width:600px)")
  const phones = useMediaQuery("(max-width: 1200px)")

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 10000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);
  return (
    <Container maxWidth={'xl'} sx={{mt: matches ? '40px' : '120px'}}>
      <Box 
        sx={{
          m:"0 auto",
          maxWidth:"1170px",
          background: "linear-gradient(94.1deg, #5B00A5 0%, rgba(91, 0, 165, 0) 103.4%)",
          p: matches ? "30px 20px" : phones ? "40px 30px" : "80px 70px"
        }}
      > 
      <Typography                     
            id="ex1"
            component={"div"}
            fontSize={matches ? '20px' : '30px'}
            sx={{ color: "#fff", fontWeight: 600}}
            align='left'>Start mint Star Balls</Typography>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />  
      </Box>
        
    </Container>

   
  )
}

export default Timer