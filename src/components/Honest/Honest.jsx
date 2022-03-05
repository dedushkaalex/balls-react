import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  Grid,
} from "@mui/material";
import React from "react";

const Honest = () => {
  const matches = useMediaQuery("(max-width:1020px)");
  const phones = useMediaQuery("(max-width:600px)");
  return (
    <Container
      sx={{ mt: phones || matches ? "150px" : "200px" }}
      maxWidth={phones || matches ? "mt" : "xl"}
    >
      <Stack
        spacing={phones ? 2 : matches ? 5 : 10}
        direction={phones || matches ? "column" : "row"}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ maxWidth: "450px" }}>
          <Typography
            variant="h4"
            component={"h2"}
            sx={{ color: "#6E50FF", fontWeight: 600, mt: "-100px" }}
            align={phones || matches ? "center" : "left"}
          >
            HONEST DISTRIBUTION
          </Typography>
          <Typography
            sx={{ color: "white", mt: "26px" }}
            variant="body1"
            align={phones || matches ? "center" : "left"}
            gutterBottom
          >
            MP IS A COLLECTION OF 8888 NFT UNIQUE DIGITAL COLLECTIBLES LIVING ON
            THE POLYGON BLOCKCHAIN.
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body1"
            align={phones || matches ? "center" : "left"}
            gutterBottom
          >
            YOUR MYSTICAL PYRAMIDS ALSO SERVES AS YOUR MEMBERSHIP CARD IN THE
            SECRET COMMUNITY AND PROVIDES ACCESS TO PRIVILEGES ONLY FOR MEMBERS
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body1"
            align={phones || matches ? "center" : "left"}
            gutterBottom
          >
            THERE ARE NO GLUING CURVES HERE. THE PURCHASE OF ILLUMINATION
            PYRAMID COSTS 0.08 ETH. THERE ARE NO PRICE CATEGORIES; MP MEMBERSHIP
            COSTS THE SAME FOR EVERYONE.
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body1"
            align={phones || matches ? "center" : "left"}
            gutterBottom
          >
            SO WE LAUNCHED WITH A SALE OF 8888 PROGRAMMATICALLY GENERATED
            DIGITAL PYRAMIDS, EACH THEIR OWN UNIQUE SET OF CHARACTERISTICS.
          </Typography>
        </Box>
        <Grid
          container
          sx={{ maxWidth: phones ? "350px" : "450px" }}
          columns={2}
          rowSpacing={2}
          columnSpacing={2}
        >
          {/* {arr.map((item) => {
           return <Grid key={item} item>
              <img
                className="sl_1"
                style={{
                  maxWidth: (phones ? "150px" : '200px' ),
                  maxHeight: (phones ? "150px" : '200px' ),
                  width: "100%",
                  height: "100%",
                }}
                src={images[currentPic + item]}
                alt="картинка"
              />
            </Grid>;
          })} */}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Honest;
