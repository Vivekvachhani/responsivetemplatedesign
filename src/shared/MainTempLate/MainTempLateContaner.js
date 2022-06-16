import React from "react";
import MainTemplate from "./MainTempLate";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
//constant
const drawer_width = 250;
const closed_drawer_width = 60;
const MainTempLateContaner = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(true);
  const [drawerWidth, setDrawerWidth] = React.useState({
    mobile: drawer_width,
    navbar: drawer_width,
  });
  console.log("drawerWidth.navbar", drawerWidth.navbar);
  console.log("isNavbarOpen123", isNavbarOpen);
  const handleDrawerToggle = ({ clickType }) => {
    if (clickType === "mobile") {
      isMobile
        ? setDrawerWidth({ ...drawerWidth, mobile: drawer_width })
        : setDrawerWidth({ mobile: 0, navbar: 0 });
      setMobileOpen(!mobileOpen);
    }
    if (clickType === "navbar") {
      debugger;
      isNavbarOpen
        ? setDrawerWidth({ ...drawerWidth, navbar: closed_drawer_width })
        : setDrawerWidth({ ...drawer_width, navbar: drawer_width });
      setIsNavbarOpen(!isNavbarOpen);
    }
  };
  //   const handleDrawerToggle = () => {
  //     setOpen(true);
  //   };
  //   const handleDrawerToggleclose = () => {
  //     setOpen(false);
  //   };
  return (
    <div>
      <MainTemplate
        children={children}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        isNavbarOpen={isNavbarOpen}
      />
    </div>
  );
};

export default MainTempLateContaner;
