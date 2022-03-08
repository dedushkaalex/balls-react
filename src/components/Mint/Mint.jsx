import { Typography, Stack, MenuItem, Menu, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { injected } from "./connectors";
import { useWeb3React } from "@web3-react/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useLocalStorage from "../useLocalStorage";
import LogoutIcon from "@mui/icons-material/Logout";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/system";
import { ethers } from "ethers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Mint = () => {
  const [metamask, setMetamask] = useLocalStorage(false);
  const { active, account, activate, deactivate } = useWeb3React();
  const [acc, setAcc] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [userBalance, setUserBalance] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const isProvider = () =>{
    const detectProvider = () => {
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else {
        window.location.replace("https://metamask.app.link/dapp/promo-react/");
        setMetamask(false);
      }
      return provider;
    };
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        window.location.replace("https://metamask.app.link/dapp/promo-react/");
        setMetamask(false);
      }
    }
  }
  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  async function connect() {
    isProvider()
    try {
      await activate(injected);
      await setMetamask(true);
      getAccountBalance(account);
    } catch (ex) {
      console.log(ex);
    }
  }
  useEffect(() => {
    if (metamask) {
      if ((JSON.parse(metamask) || active) === true) {
        connect();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metamask]);
  useEffect(() => {
    if (account) {
      setAcc(
        account.toLowerCase().slice(0, 6) +
          "..." +
          account.toLowerCase().slice(-4)
      );
    }
  }, [account]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  async function disconnect() {
    try {
      deactivate();
      setMetamask(false);
      handleClose();
    } catch (ex) {
      console.log(ex);
    }
  }
  return metamask ? (
    <Box sx={{ padding: "15px 15px 15px 15px" }}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        direction={"row"}
      >
        <Stack
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          id={"basic-button"}
          direction={"row"}
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <Typography
            component={"div"}
            fontWeight={600}
            sx={{
              fontSize: "20px",
            }}
          >
            My wallet
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: "gray" }} />
        </Stack>
        <Tooltip
          title={isClicked ? "Copied!" : "Copy"}
          onClose={() => setIsClicked(false)}
          placement="top"
          arrow
        >
          <Typography
            onClick={() => {
              navigator.clipboard.writeText(account);
              setIsClicked(true);
            }}
            sx={{
              cursor: "pointer",
              color: "gray",
              fontSize: "12px",
            }}
          >
            {acc}
          </Typography>
        </Tooltip>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Stack direction={"row"} spacing={1}>
            <img src="/balls-react/assets/metamask.svg" alt="metamask" />
            <Typography
              component={"div"}
              fontWeight={600}
              sx={{
                fontSize: "16px",
              }}
            >
              MetaMask
            </Typography>
            <DoneIcon sx={{ color: "green " }} />
          </Stack>
        </MenuItem>
        <MenuItem onClick={disconnect}>
          <Stack direction={"row"} spacing={1}>
            <LogoutIcon sx={{ color: "gray " }} />
            <Typography
              component={"div"}
              fontWeight={600}
              sx={{
                fontSize: "16px",
              }}
            >
              Log out
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
      <Typography
        align="center"
        sx={{
          mt: "15px",
          color: "gray",
          fontSize: "12px",
        }}
      >
        Total balance
      </Typography>
      <Typography align="center" fontWeight={900}>
        {userBalance} ETH
      </Typography>
    </Box>
  ) : (
    <>
      <Stack
        sx={{
          padding: "15px",
          alignItems: "center",
          justifyContent: "flex-start",
          borderBottom: "1px solid rgb(229, 232, 235)",
        }}
        direction={"row"}
        spacing={1}
      >
        <AccountCircleIcon sx={{ color: "gray" }} />
        <Typography
          component={"div"}
          fontWeight={600}
          sx={{
            fontSize: "16px",
          }}
        >
          My wallet
        </Typography>
      </Stack>
      <Typography
        component={"div"}
        sx={{ padding: "15px", color: "rgb(138, 147, 155)", fontSize: "14px" }}
      >
        Connect with one of our available
        <div
          style={{
            display: "inline",
            fontSize: "14px",
            color: "rgb(32, 129, 226)",
          }}
        >
          {" "}
          wallet{" "}
        </div>
        providers or create a new one.
      </Typography>
      <Stack
        onClick={connect}
        className="stacks"
        sx={{
          padding: "15px 15px 15px 15px",
          alignItems: "center",
          w: "90% !important",
          ml: "15px",
          mr: "15px",
          justifyContent: "flex-start",
          border: "1px solid rgb(229, 232, 235)",
          borderRadius: "10px",
        }}
        direction={"row"}
        spacing={1}
      >
        <img src="/balls-react/assets/metamask.svg" alt="metamask" />
        <Typography
          component={"div"}
          fontWeight={600}
          sx={{
            fontSize: "16px",
          }}
        >
          Metamask
        </Typography>
      </Stack>
    </>
  );
};

export default Mint;