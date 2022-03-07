import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const data = [
  "Participate in key governance votes",
  "Have exclusive access to NFT drops",
  "Be the first to try the new features",
];

const Discord = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const phones = useMediaQuery("(max-width:600px)");
  return (
    <Container>
      <Typography
        variant="h4"
        component={"h2"}
        fontFamily={"Nunito,sans-serif"}
        fontSize={phones ? "35px" : matches ? "60px" : "80px"}
        sx={{
          color: "transparent",
          fontWeight: 700,
          m: phones
            ? "50px 0  28px"
            : matches
            ? "100px 0 28px"
            : "160px 0 48px",
          WebkitTextStroke: "1px #FFF873",
        }}
        align={"left"}
      >
        BE ON OUR TEAM
      </Typography>
      <Stack
        direction={phones ? "column" : "row"}
        spacing={phones ? 3 : ""}
        sx={{ display: "flex", width: "100%", justifyContent: phones ? "" : "space-between" }}
      >
        {data.map((item, index) => {
          return (
            <Stack
              direction="row"
              style={{ display: "flex", alignItems: "flex-start" }}
              spacing={2}
              key={index}
            >
              <img
                src="/balls-react/assets/ball-ico.svg"
                alt="ball-ico"
                style={{
                  width: phones ? "20px" : "40px",
                  height: phones ? "20px" : "40px",
                }}
              />
              <Typography
                fontFamily={"Montserrat, sans-serif"}
                component={"div"}
                fontSize={phones ? "16px" : matches ? "12px" : '20px'}
                sx={{
                  color: "#Fff",
                  maxWidth: phones ? "100%" : matches ? "125px" : "205px",
                }}
              >
                {item}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Discord;
