import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
const images = [
  {
    image: "discord-ico.svg",
    link: "https://discord.com/",
  },
  {
    image: "twitter-ico.svg",
    link: "https://twitter.com/",
  },
  {
    image: "tg-ico.svg",
    link: "https://web.telegram.org/z/",
  },
  {
    image: "reddit-ico.svg",
    link: "https://www.reddit.com/",
  },
];

const Join = () => {
  const matches = useMediaQuery("(max-width:1020px)");
  const phones = useMediaQuery("(max-width:514px)");
  const tablets = useMediaQuery("(max-width:930px)");
  const apples = useMediaQuery("(max-width:760px)");
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
      {apples ? (
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {images.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                style={{
                  width: "100%",
                  textDecoration: "none",
                  height: phones ? "180px" : '220px',
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(94.1deg, #5B00A5 0%, rgba(91, 0, 165, 0) 103.4%)",
                }}
              >
                <img
                  src={`/balls-react/assets/${item.image}`}
                  alt={item.image}
                  style={{
                    width:phones ? "100px" : tablets ? "130px" : "auto",
                    height:phones ? "100px" : tablets ? "130px" : "auto",
                  }}
                />
              </a>
            );
          })}
        </Box>
      ) : (
        <Stack
          direction={"row"}
          spacing={phones ? 3 : ""}
          sx={{
            flexWrap: "wrap",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {images.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                style={{
                  width: tablets
                    ? "calc(100px + (270 - 100) * ((100vw - 320px) / (1400 - 320)))"
                    : "calc(120px + (270 - 120) * ((100vw - 320px) / (1400 - 320)))",
                  textDecoration: "none",
                  height: tablets
                    ? "calc(100px + (270 - 100) * ((100vw - 320px) / (1400 - 320)))"
                    : "calc(120px + (270 - 120) * ((100vw - 320px) / (1400 - 320)))",
                  maxWidth: "270px",
                  maxHeight: "270px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    "linear-gradient(94.1deg, #5B00A5 0%, rgba(91, 0, 165, 0) 103.4%)",
                }}
              >
                <img
                  src={`/balls-react/assets/${item.image}`}
                  alt={item.image}
                  style={{
                    width: tablets ? "100px" : "auto",
                    height: tablets ? "100px" : "auto",
                  }}
                />
              </a>
            );
          })}
        </Stack>
      )}
    </Container>
  );
};

export default Join;
