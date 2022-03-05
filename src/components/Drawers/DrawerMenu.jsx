import {
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Drawer,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";

const DrawerMenu = ({ toggleDrawer, pages, socNets }) => {
  const [listDrawerOpen, setLDO] = React.useState(false);
  const list = (anchor) => (
    <Box
      sx={{
        background:
          "linear-gradient(160.53deg, #0D0C11 -29.23%, #5B00A5 143.75%)",
        height: "100%",
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100vw",
      }}
      role="presentation"
      onClick={() => toggleDrawer(anchor, false)}
      onKeyDown={() => toggleDrawer(anchor, false)}
      key="list"
    >
      <Container maxWidth={'sm'}>
        <List>
          <IconButton sx={{position:'absolute', zIndex:5, top:'5px', right:0}} color="default" edge={"end"} onClick={() => setLDO(false)}>
            <CloseIcon fontSize={"large"} sx={{color:"#fff" }}/>
          </IconButton>
          {pages.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText sx={{color:'#fff', fontFamily:"Montserrat, sans-serif !important", fontWeight:900}} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{backgroundColor:'#fff', opacity:'0.2'}} />
        <Stack sx={{ pl: "13px", mt: "10px", display:"flex", justifyContent:"space-between" }} direction={"row"} >
          {socNets.map((Item, index) => {
            return (
              <Item
                key={index + 1}
                sx={{color:'#fff', cursor: "pointer" }}
                fontSize={"large"}
              />
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
  return (
    <>
      <IconButton color="default" edge={"end"} onClick={() => setLDO(true)}>
        <MenuIcon style={{ fontSize: 40, color: "white" }} />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={listDrawerOpen}
        onClose={() => setLDO(false)}
        onOpen={() => setLDO(true)}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
