import { Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const shadow =               "0px 4px 184px rgb(14 5 218 / 42%), 0px 1.84932px 85.0688px rgb(14 5 218 / 31%), 0px 1.05814px 48.6744px rgb(14 5 218 / 26%), 0px 0.642283px 29.545px rgb(14 5 218 / 23%), 0px 0.387004px 17.8022px rgb(14 5 218 / 19%), 0px 0.215509px 9.9134px rgb(14 5 218 / 16%), 0px 0.0926888px 4.26369px rgb(14 5 218 / 11%)"

const Contract = () => {
  const matches = useMediaQuery("(max-width:570px)");
  const phones = useMediaQuery("(max-width:440px)");

  return (
    <Container sx={{ mt: "100px" }} maxWidth={"xl"}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ color: "#fff", textAlign: "center" }}
      >
        CONFIRMED SMART CONTRACT ADDRESS:
      </Typography>
      <a
        style={{ textDecoration: "none" }}
        href="https://polygonscan.com/address/0x7c8906Ead979A116B5a81D0EcfE5291B62134F3F"
      >
        <Typography
          variant={(phones || matches) ? "body1" : "h6"}
          gutterBottom
          component="div"
          fontSize={phones ? "0.8em" : matches ? "1em" : "auto"}
          fontWeight={600}
          sx={{
            color: "#fff",
            margin: "0 auto",
            textAlign: "center",
            background:
              "linear-gradient( 89.42deg, #6586FA 11.35%, #7254F0 63.28%, #935EFB 96.42%)",
            boxShadow: shadow,
            borderRadius: "7px",
            width: (phones || matches) ? "auto" : "520px",
          }}
        >
          0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
        </Typography>
      </a>
    </Container>
  );
};

export default Contract;
