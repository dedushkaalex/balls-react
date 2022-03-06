import {
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Drawer,
  useMediaQuery,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Mint from "../Mint/Mint";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DrawerMenu = ({ toggleDrawer, pages, socNets }) => {
  const [listDrawerOpen, setLDO] = React.useState(false);
  const phones = useMediaQuery("(max-width:768px)");
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
      <Container sx={{ height: "100%" }} maxWidth={"sm"}>
        <List
          sx={{
            height: "80%",
            pb: "10%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{ position: "absolute", zIndex: 5, top: "20px", right: 0 }}
            color="default"
            edge={"end"}
            onClick={() => setLDO(false)}
          >
            <CloseIcon className={"close-icon"} sx={{ color: "#fff" }} />
          </IconButton>
          {pages.map((text, index) => (
            <ListItem button key={index + text[0]}>
              <a
                onClick={() => setLDO(false)}
                href={`#ex${index}`}
                style={{
                  fontSize: "2rem",
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "Montserrat, sans-serif !important",
                  fontWeight: 600,
                }}
              >
                {text}
              </a>
            </ListItem>
          ))}
          <Accordion elevation={24} sx={{borderRadius:"30px !important"}} >
            <AccordionSummary
              aria-controls="panel1a-content"
              expandIcon={<ExpandMoreIcon sx={{color:"gray", fontSize:"50px"}} />}
              id="panel1a-header"
              sx={{
                padding:'0 16px 0 0',
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius:"30px"
              }}
            >
              <ListItem button>
                <Typography fontSize={'2rem'} fontWeight={900} fontFamily={"Montserrat, sans-serif !important"} >Wallet</Typography>
              </ListItem>
            </AccordionSummary>
            <AccordionDetails>
              <Mint/>
            </AccordionDetails>
          </Accordion>
        </List>
        <Divider sx={{ backgroundColor: "#fff", opacity: "0.2" }} />
        <Stack
          sx={{
            pl: "13px",
            pb: "20px",
            mt: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
          direction={"row"}
        >
          {socNets.map((Item, index) => {
            return (
              <Item
                key={index + 1}
                sx={{ color: "#fff", cursor: "pointer" }}
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
        <MenuIcon className={"menu-icon"} style={{ color: "white" }} />
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
