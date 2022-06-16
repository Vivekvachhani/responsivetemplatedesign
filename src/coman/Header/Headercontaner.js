import React from "react";
import Header from "../Header/Header";
const Headercontaner = ({
  handleDrawerToggle,
  drawerWidth,
  isMobile,
  isNavbarOpen,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  return (
    <div>
      <Header
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleClose={handleMenuClose}
        isMobileMenuOpen={isMobileMenuOpen}
        handleOpen={handleProfileMenuOpen}
        handleMobileOpen={handleMobileMenuOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        isMobile={isMobile}
        isNavbarOpen={isNavbarOpen}
      />
    </div>
  );
};

export default Headercontaner;
