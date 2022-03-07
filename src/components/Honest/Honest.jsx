import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const info = [
  {
    title: "Legendary",
    images: ["ball1.jpg", "ball1.jpg", "ball1.jpg", "ball1.jpg", "ball1.jpg"],
    id: 1,
  },
  {
    title: "Rare",
    images: ["ball2.jpg", "ball2.jpg", "ball2.jpg", "ball2.jpg", "ball2.jpg"],
    id: 2,
  },
  {
    title: "Popular",
    images: ["ball3.jpg", "ball3.jpg", "ball3.jpg", "ball3.jpg", "ball3.jpg"],
    id: 3,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
};


const Honest = () => {
  const matches = useMediaQuery("(max-width:1020px)");
  const phones = useMediaQuery("(max-width:600px)");
  return (
    <Container
      sx={{ mt: phones || matches ? "150px" : "200px" }}
      maxWidth={"lg"}
    >
      <Typography
        variant="h4"
        component={"h2"}
        fontFamily={"Nunito,sans-serif"}
        fontSize={phones ? "40px" : "80px"}
        sx={{
          color: "transparent",
          fontWeight: 700,
          m: "-100px 0  88px",
          WebkitTextStroke: "1px #FFF873",
        }}
        align={"left"}
      >
        NFTS
      </Typography>
      <Stack sx={{mt:matches ? "-100px" : "" }} direction={"column"}>
        {info.map((item, index) => {
          return matches ? (
            <Stack
              direction={"row"}
              style={{
                display: "flex",
                borderBottom: "#2e2e2e 1px solid",
                padding: "30px 0",
                justifyContent: "space-between",
              }}
              key={index + 3}
            >
              <Typography
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"25px"}
                fontWeight={600}
                sx={{ color: "#fff" }}
              >
                {item.title}
              </Typography>
              <Slider className='slider' {...settings}>
                {item.images.map((image, Index) => {
                  return (
                    <img
                      key={Index + item.id}
                      src={`/balls-react/assets/${image}`}
                      className="ball-slide"
                      alt="img"
                    />
                  );
                })}
              </Slider>
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              style={{
                display: "flex",
                borderBottom: "#2e2e2e 1px solid",
                padding: "30px 0",
                justifyContent: "space-between",
              }}
              key={index + 3}
            >
              <Typography
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"30px"}
                fontWeight={600}
                sx={{ color: "#fff" }}
              >
                {item.title}
              </Typography>
              <Stack direction={"row"} spacing={"30px"}>
                {item.images.map((image, Index) => {
                  return (
                    <img
                      key={Index + item.id}
                      src={`/balls-react/assets/${image}`}
                      alt="img"
                      style={{
                        width: "130px",
                        height: "130px",
                        borderRadius: "10px",
                      }}
                    />
                  );
                })}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Honest;
