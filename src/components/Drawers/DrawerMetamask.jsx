import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Mint from "../Mint/Mint";

const DrawerMetamask = ({toggleDrawer}) => {    
    const [metamaskDrawerOpen, setMDO] = React.useState(false);
    const metamask = (anchor) => (
        <Box
          sx={{ height:'100%', width: anchor === "right" || anchor === "left" ? "auto" : 350 }}
          role="presentation"
          onClick={() => toggleDrawer(anchor, false)}
          onKeyDown={() => toggleDrawer(anchor, false)}
          key="metamask"
        >

          <Mint/>
        </Box>
      );
  return (
    <>
      <Typography onClick={() => setMDO(true)} variant="h5" fontWeight={700} component={"div"} sx={{color:'white', cursor: "pointer"}}>Wallet</Typography>
      <Drawer
        anchor={"right"}
        open={metamaskDrawerOpen}
        onClose={() => setMDO(false)}
        onOpen={() => setMDO(true)}
      >
        {metamask("top")}
      </Drawer>
    </>
  );
};

export default DrawerMetamask;
