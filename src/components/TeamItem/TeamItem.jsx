import { Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const TeamItem = ({image}) => {
  const matches = useMediaQuery("(max-width:1200px)");
  const phones = useMediaQuery("(max-width:888px)");
  return (
    <div
      key={image.id}
    >
      <img
        src={image.src}
        style={{width: matches ? "100%" : "auto", height:"auto",borderRadius: "10px",}}
        alt="creator logo"
      />
      <Stack>
        <Typography
          gutterBottom
          fontWeight={600}
          fontSize={phones ? "17px" : "20px"}
          fontFamily={"Montserrat, sans-serif"}
          sx={{ color: "#fff", mt: phones ? "15px" : "20px", mb: "0.05em" }}
          component="div"
        >
          {image.title}
        </Typography>
        <Typography component={'div'} fontWeight={500} fontSize={phones ? "13px" : "16px"} fontFamily={"Montserrat, sans-serif"} sx={{opacity:"0.6"}}  color="#ffffff">
          {image.body}
        </Typography>
      </Stack>
    </div>
  );
};

export default TeamItem;
