import {
  Container,
  styled,
  InputBase,
  Typography,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 20,
    background: "#561D84",
    color: "#fff",
    width: "100%",
    border: "1.82405px solid #7A44A9",
    fontSize: 20,
    position: "relative",
    padding: "5px 5.5em 5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));
const BootstrapInputMedia = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 20,
    background: "#561D84",
    color: "#fff",
    width: "100%",
    border: "1.82405px solid #7A44A9",
    fontSize: 20,
    position: "relative",
    padding: "5px 5.5em 5px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

const Form = () => {
  const matches = useMediaQuery("(max-width:520px)");

  const onSubmit=(e)=>{
    e.preventDefault()
   }

  return (
    <Container sx={{ mt: "100px" }} maxWidth="md">
      <Stack
        spacing={2}
        direction={"column"}
        sx={{
          alignItems: "space-between",
          justifyContent: "center",
          background: "#7122AF",
          padding: "15px 15px ",
          backgroundImage: 'url("promo-react/assets/ma.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h3"
          component={"div"}
          fontWeight={600}
          sx={{
            color: "#fff",
          }}
        >
          Get on the list
        </Typography>
        <Box>
          <form onSubmit={onSubmit} action="#">
            {matches ? (
              <BootstrapInputMedia
                className={"input"}
                sx={{ width: "100%" }}
                placeholder="Enter your email"
              />
            ) : (
              <BootstrapInput
                className={"input"}
                sx={{ width: "80%" }}
                placeholder="Enter your email"
              />
            )}
            <Button
              type="submit"
              sx={{
                background: "#fff",
                color: "black",
                position: "absolute",
                mt: "3px",
                ml: "-104px",
                borderRadius: "20px",
                p: "6px 25px",
              }}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default Form;
