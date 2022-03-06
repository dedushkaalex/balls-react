import {
  Instagram,
  Reddit,
  Twitter,
  Telegram
} from "@mui/icons-material";
import {
  AppBar,
  Container,
  Stack,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import DrawerMenu from "../Drawers/DrawerMenu";
import DrawerMetamask from "../Drawers/DrawerMetamask";

const pages = ["Home", "Nfts", "Roadmap", "Team"];
const socNets = [Twitter, Telegram, Reddit, Instagram];

const Header = () => {
  const matches = useMediaQuery("(max-width:1255px)");
  const [top, setTop] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    
    setTop({ ...top, [anchor]: open });
  };



  return (
    <AppBar sx={{background:"transparent", boxShadow:"none"}}  position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <img src="/balls-react/assets/logo.png" alt="Logo" />
          <Box sx={{ flexGrow: 1 }} />
          {matches ? (
            <>          
              <DrawerMenu pages={pages} socNets={socNets} toggleDrawer={toggleDrawer}/>
            </>
          ) : (
            <div style={{display:"flex", width:'80%', paddingBottom:"20px", marginTop:"30px", borderBottom:"#2e2e2e 1px solid", justifyContent:"space-between"}}>
              <Stack direction="row" spacing={10}>
                {pages.map((page, index) => (
                  <Typography
                    variant="h5"
                    href={`#ex${index}`}
                    component="a"
                    key={page}
                    sx={{textDecoration:'none', color: "white", fontWeight: 700, cursor: "pointer" }}
                  >
                    {page}
                  </Typography>
                ))}
              </Stack>
              <Stack direction={"row"} spacing={4}>
                {socNets.map((Item, index) => (
                    <Item
                      key={index}
                      style={{ color: "white" }}
                      sx={{ cursor: "pointer" }}
                      fontSize={"large"}
                    />
                  ))}
              </Stack>
              <DrawerMetamask toggleDrawer={toggleDrawer}/>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
