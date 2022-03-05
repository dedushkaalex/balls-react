import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TeamItem from "../TeamItem/TeamItem";

const images = [
  {
    src: "/promo-react/assets/gallery/30.png",
    title: "IS",
    body: "Co-founder & Business development Lead",
    id: 1,
  },
  {
    src: "/promo-react/assets/gallery/34.png",
    title: "GEORGE",
    body: "Founder and Head of Operations",
    id: 2,
  },
  {
    src: "/promo-react/assets/gallery/35.png",
    title: "MARI",
    body: "Art Designer",
    id: 3,
  },
  {
    src: "/promo-react/assets/gallery/36.png",
    title: "STIVEN SIGA",
    body: "Marketing director",
    id: 4,
  },
];

const Team = () => {
  const matches = useMediaQuery("(max-width:1020px)");
  const phones = useMediaQuery("(max-width:514px)");
  return (
    <Container sx={{ mt: "100px" }} maxWidth={"xl"}>
      <Stack
        sx={{ justifyContent: "center", alignItems: "center" }}
        direction={matches ? "column" : "row"}
        spacing={5}
      >
        <Box sx={{ maxWidth: "420px" }}>
          <Typography
            variant="h4"
            component={"h2"}
            sx={{ color: "#6E50FF", fontWeight: 600 }}
            align={ matches ? "center" : 'left'}
          >
            OUR TEAM
          </Typography>
          <Typography
            sx={{ color: "white", mt: "15px" }}
            variant="body1"
            align={ matches ? "center" : 'left'}
            gutterBottom
            fontWeight={300}
          >
            HAS BEEN WORKING FOR HALF A YEAR TO CREATE THE MOST UNUSUAL AND AT
            THE SAME TIME FUNNY COLLECTION FOR YOU TO APPRECIATE IT.
          </Typography>
        </Box>
          <Box
            id="ex3"
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: ( phones ? "repeat(1, 1fr)" : "repeat(2, 1fr)"),
            }}
          >
            {images.map((image, index) => (
                <TeamItem key={index} image={image}/>
              ))}
          </Box>
      </Stack>
    </Container>
  )
};

export default Team;
