import React, { Suspense } from "react";

import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import { CircularProgress, useMediaQuery } from "@mui/material";
const Honest = React.lazy(() => import("./components/Honest/Honest"));
const Timer = React.lazy(() => import("./components/Timer/Timer"));
const Info = React.lazy(() => import("./components/Info/Info"));
const Discord = React.lazy(() => import("./components/Discord/Discord"));
const Contract = React.lazy(() => import("./components/Contract/Contract"));
const Team = React.lazy(() => import("./components/Team/Team"));
const Form = React.lazy(() => import("./components/Form/Form"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

const background1 = "radial-gradient(100% 100% at 50% 100%, #5B00A5 0%, rgba(91, 0, 165, 0) 100%)"
const background2 = "radial-gradient(100% 100% at 0% 100%, #5B00A5 0%, rgba(91, 0, 165, 0) 100%)"
const background3 = 'radial-gradient(100% 100% at 0% 100%, #5B00A5 0%, rgba(91, 0, 165, 0) 100%)'

function App() {
  const matches = useMediaQuery("(max-width:1000px)");
  const phones = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        position:'relative',
        height: "100%",
        backgroundColor:"#0D0C11",
        backgroundSize: "100%",

      }}
    > 
      <div style={{
        position:'absolute',
        opacity:'0.05',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        backgroundImage:'url(./balls-react/assets/background.svg)'
      }}></div>
      <div style={{background: phones ? background3 : matches ? background2 : background1}}>
        <Header />
        <Welcome />
      </div>
      <Suspense fallback={<CircularProgress />}>
        <Honest />
        <Timer />
        <Info />
        <Discord />
        <Contract />
        <Team />
        <Form />
        <Footer />
      </Suspense>
    </Box>
  );
}

export default App;
