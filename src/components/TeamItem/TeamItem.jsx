import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const TeamItem = ({image}) => {
  return (
    <Card
      key={image.id}
      sx={{
        borderRadius: "20px",
        boxShadow:
          "0px 15px 242px rgb(218 5 133 / 42%), 0px 1.84932px 85.0688px rgb(14 5 218 / 31%), 0px 1.05814px 48.6744px rgb(14 5 218 / 26%), 0px 0.642283px 29.545px rgb(14 5 218 / 23%), 0px 0.387004px 17.8022px rgb(14 5 218 / 19%), 0px 0.215509px 9.9134px rgb(14 5 218 / 16%), 0px 0.0926888px 4.26369px rgb(14 5 218 / 11%)",
        maxWidth: "220px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image.src}
        alt="green iguana"
      />
      <CardContent
        sx={{
          background:
            "linear-gradient( 308.16deg, #3D204E 0.36%, #1B181F 41.76%)",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{ color: "#fff", mb: "0.05em" }}
          component="div"
        >
          {image.title}
        </Typography>
        <Typography variant="body2" color="#ffffffc7">
          {image.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamItem;
