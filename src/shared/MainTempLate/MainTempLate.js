import React from "react";
import Headercontaner from "../../coman/Header/Headercontaner";
import Sidebarcontener from "../../coman/sidebar/sidebarcontener";
import Footer from "../../coman/Footer/Footer";
import Dashbordcontaner from "../../module/Dashbord/Dashbordcontaner";
import { Box } from "@mui/material";
import useStyle from "./style.js";
import CustomCard from "../../coman/Card/CustomCard";
const MainTempLate = ({
  handleDrawerToggle,
  open,
  handleexit,
  drawerWidth,
  isMobile,
  mobileOpen,
  isNavbarOpen,
  children,
}) => {
  const classes = useStyle();
  console.log("isNavbarOpen000000000", isNavbarOpen);
  return (
    <div>
      <Headercontaner
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        isMobile={isMobile}
        isNavbarOpen={isNavbarOpen}
      />
      <Sidebarcontener
        drawerWidth={drawerWidth}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        isNavbarOpen={isNavbarOpen}
      />
      <Box
        className={classes.mainContent}
        component="main"
        sx={{
          width: { sm: `calc(100%-${drawerWidth.navbar}px)` },
          ml: { sm: isNavbarOpen ? `${drawerWidth.navbar}px` : "60px" },
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          width: { sm: `calc(100%-${drawerWidth.navbar}px)` },
          ml: { sm: isNavbarOpen ? `${drawerWidth.navbar}px` : "60px" },
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default MainTempLate;
