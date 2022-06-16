import * as React from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import useStyle from "./style";
import user from "../../assets/image/thumb-1.jpg";
import Avatar from "@mui/material/Avatar";
import logosm from "../../assets/image/logo-sm.png";
import logo from "../../assets/image/logo.png";
export default function PrimarySearchAppBar({
  isMenuOpen,
  anchorEl,
  handleClose,
  close,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleOpen,
  handleMobileOpen,
  handleChange,
  handleDrawerToggle,
  drawerWidth,
  isMobile,
  isNavbarOpen,
}) {
  const classes = useStyle();

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
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
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
      onClose={handleClose}
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
      <MenuItem onClick={handleOpen}>
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <header className={classes.appBar}>
      <Box className={classes.header}>
        <Box>
          {!isMobile && (
            <Box
              className={classes.logo}
              sx={{
                width: `calc(${drawerWidth.navbar}px - 25px)`,
              }}
            >
              {isNavbarOpen ? (
                <img src={logo} height={40} alt="Upforce" />
              ) : (
                <img src={logosm} height={30} alt="Logo" />
              )}
            </Box>
          )}
        </Box>
        <Box
          className={classes.headerNav}
          sx={{
            width: isMobile ? "100%" : `calc(100% - ${drawerWidth.navbar}px)`,
          }}
        >
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                handleDrawerToggle({
                  clickType: isMobile ? "mobile" : "navbar",
                });
              }}
              onClose={close}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Toolbar>
                <IconButton sx={{ p: 0 }} onClick={handleOpen}>
                  <Avatar alt="Remy Sharp" src={user} />
                </IconButton>
              </Toolbar>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      {renderMenu}
      {renderMobileMenu}
    </header>
  );
}
