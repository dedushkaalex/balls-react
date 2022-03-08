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
    src: "/balls-react/assets/avatar1.png",
    title: "Alex Sanchez",
    body: "Ceo& Founder",
    id: 1,
  },
  {
    src: "/balls-react/assets/avatar2.png",
    title: "Tina Мirres",
    body: "COO",
    id: 2,
  },
  {
    src: "/balls-react/assets/avatar3.png",
    title: "Eugene Grey",
    body: "CTO",
    id: 3,
  },
  {
    src: "/balls-react/assets/avatar4.png",
    title: "George Bolon",
    body: "Community Manager",
    id: 4,
  },
];

const Team = () => {
  const matches = useMediaQuery("(max-width:888px)");
  const phones = useMediaQuery("(max-width:615px)");
  return (
    <Container sx={{ mt: "100px" }} maxWidth={"lg"}>
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
        JOIN US
      </Typography>
          <Box
            id="ex3"
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: ( phones ? "repeat(2, 1fr)" : "repeat(4, 1fr)"),
            }}
          >
            {images.map((image, index) => (
                <TeamItem key={index} image={image}/>
              ))}
          </Box>
    </Container>
  )
};

export default Team;
