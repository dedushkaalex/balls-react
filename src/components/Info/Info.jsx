import { Box, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ListElem from "./ListElem/ListElem";

const list = [
  {
    title: "Q4 21",
    id: 1,
    text: [
      "$MSU Private & TBC Presale",
      "Youth Scouts private presale",
      "Youth Scouts public presale in own marketplace",
      "Assets purchases / sales",
    ],
  },
  {
    title: "Q1-Q2 22",
    id: 2,
    text: [
      "Youth Scouts gameplay: knowledge improving",
      "Players gameplay: training + skills improving",
      "Players & scouts aging activation",
      "Friendly matches (beta - match comments)",
      "Player loans",
    ],
  },
  {
    title: "Q3-Q4 22",
    id: 3,
    text: [
      "Multi-team: multiple teams per club",
      "Owner & Manager roles split",
      "2D match simulation",
      "Career mode tournaments",
      "Up to vote (DAO),",
    ],
  },
  {
    title: "Up to vote (DAO)",
    id: 4,
    text: [
      "Stadiums",
      "Stadiums tickets income",
      "Renting stadiums",
      "Betting platform",
      "Stream matches",
    ],
  },
];

const Info = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const phones = useMediaQuery("(max-width:716px)");
  const tablets = useMediaQuery("(max-width:1200px)");
  return (
    <Container maxWidth={"lg"}>
      <Typography
        variant="h4"
        component={"h2"}
        fontFamily={"Nunito,sans-serif"}
        fontSize={phones ? "45px" : matches ? "60px" : "80px"}
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
        ROADMAP
      </Typography>
      {tablets ? (
        <Box
          sx={{
            display: "grid",
            gap: "25px",
            width:phones ? "100%" :"670px",
            gridTemplateColumns: phones ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
          }}
        >
          {list.map(({ title, text, id }) => (
            <ListElem  key={id + 5} title={title} primary={text} />
          ))}
        </Box>
      ) : (
        <Stack direction={"row"} spacing={"20px"}>
          {list.map(({ title, text, id }) => (
            <ListElem key={id + 5} title={title} primary={text} />
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Info;
