import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const balls = ["ball1.jpg", "ball2.jpg", "ball3.jpg"];

const Welcome = () => {
  const matches = useMediaQuery("(max-width:1000px)")
  const phones = useMediaQuery("(max-width:500px)");

  return (
    <Container
      sx={{ mt: "100px", pb: "118px" }}
      maxWidth={phones || matches ? "mt" : "xl"}
    >
      <Stack direction={matches ? "column-reverse" : 'column'}>
        <Stack
          direction={phones || matches ? "column" : "row"}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={phones ? 0 : matches ? 0 : 13}
        >
          <Typography
            variant="h4"
            component={"h2"}
            fontSize={"100px"}
            fontFamily={"Nunito, sans-serif"}
            sx={{
              color: "transparent",
              WebkitTextStroke: "1px #FFF873",
              maxWidth: phones || matches ? "auto" : "230px",
            }}
            align={"left"}
          >
            STAR BALLS
          </Typography>
          <Typography
            sx={{ color: "white", maxWidth: "763px" }}
            variant="body1"
            align={"left"}
            fontFamily={"Montserrat, sans-serif "}
            fontSize={"18px"}
            gutterBottom
          >
            We present you a unique collection of legendary balls with
            autographs of football stars completely translated from the original
            into digital format. There are 3 types of NFT collections, which
            differ in color. Gold is the legendary balls in a single copy with
            the signature of the stars Pele, Maradona, Beckham, Ronaldo. The
            purple ones are 101 balls with the signatures of national teams.
            Gray is 201 popular balls with the signature of individual players
            of the teams. One real ball from each buden collection is played
            between NFT buyers.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {/* {balls.map((item, index) => {
            return (
              <img
                key={index}
                alt="ball"
                style={{
                  width: "370px",
                  borderRadius: "20px",
                  height: "370px",
                }}
                src={`./balls-react/assets/${item}`}
              />
            );
          })} */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Welcome;
