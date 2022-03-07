import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Contract = () => {
  const matches = useMediaQuery("(max-width:740px)");
  const phones = useMediaQuery("(max-width:576px)");

  return (
    <Container
      maxWidth={"lg"}
    >
      <Box
            sx={{
              zIndex: 6,
              position: "relative",
              w:"100%",
              backgroundPosition: "right",
              backgroundSize: "cover",
              backgroundImage: "url(/balls-react/assets/ball-bg.png)",
              borderRadius: "10px",
              p: phones ? "40px 0 50px 30px" : "40px 0 50px 70px",
              m: "100px auto 0 auto",
              backgroundColor:
                "linear-gradient(94.1deg, #5B00A5 0%, rgba(91, 0, 165, 0) 103.4%)",
            }}
      > 
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={700}
          component="div"
          fontFamily={"Montserrat, sans-serif"}
          sx={{ color: "#fff", textAlign: "left", maxWidth:matches ? "300px" : '100%' }}
        >
          Confirmed smart contract adress:
        </Typography>
        <a
          style={{ textDecoration: "none" }}
          href="https://polygonscan.com/address/0x7c8906Ead979A116B5a81D0EcfE5291B62134F3F"
        >
          <Typography
            variant={matches ? "body1" : "h6"}
            gutterBottom
            component="div"
            fontFamily={"Montserrat, sans-serif"}
            fontSize={"1.1em"}
            fontWeight={400}
            sx={{
              color: "#FFF873",
              textAlign: "left",
              maxWidth:phones ? "235px" : '100%'
            }}
          >
            {phones ? "0xBC4CA0EdA7647A8aB7 C2061c2E118A18a936f13D" : '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'}
          </Typography>
        </a>
      </Box>
    </Container>
  );
};

export default Contract;
