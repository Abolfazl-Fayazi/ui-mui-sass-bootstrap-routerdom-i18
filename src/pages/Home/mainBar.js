import "../../assets/sass/Home/header.scss";
import { useState } from "react";

//------------------ MaterialUI imports --------------------------

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button, Link } from "@mui/material";

//////////////////////////////////////////////////////////////////

const MainBar = () => {
  //--------------- styled functions ------------------

  const Toolbar = styled("div")(({ theme }) => ({
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "90%",
    paddingTop: "1%",
    paddingBottom: "1%",
  }));

  //--------------------------------------------

  const Search = styled("div")(({ theme }) => ({
    display: "flex",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginRight: "5%",
    marginLeft: "5%",
    width: "50%",
  }));

  //--------------------------------------------

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "rgb(103, 85, 72)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ":hover": {
      backgroundColor: "rgb(195, 156, 129)",
      color: "rgb(103, 85, 72)",
    },
    ":focus": {
      backgroundColor: "rgb(103, 85, 72)",
      color: "white",
    },
  }));

  //--------------------------------------------

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    boxShadow: "1px 3px 5px silver",
    // borderColor: "grey",
    // borderWidth: "1px",
    // borderStyle: "solid",
    borderRadius: "5px",
    color: "#555",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  //------------------------------------------

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //--------------------------------------------

  return (
    <Box sx={{ flexGrow: 1, width: "100", }}>
      <AppBar
        position="static"
        sx={{ width: "100%", backgroundColor: "whitesmoke" }}
      >
        <Toolbar>
          <LocalGroceryStoreIcon
            sx={{ color: "black", fontSize: "70px" }}
          ></LocalGroceryStoreIcon>

          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <StyledButton>
              <SearchIcon />
            </StyledButton>
          </Search>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Link href="#" variant="caption" color="#666">
                SignUp
              </Link>
              <Typography variant="caption" color="#666">
                /
              </Typography>
              <Link href="#" variant="caption" color="#666">
                SignUp
              </Link>
            </Box>

            <div className="vertical_separator"></div>

            <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={1} color="error">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

//--------------------------------------------

export default MainBar;
