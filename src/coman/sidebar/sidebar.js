import * as React from "react";
import { Box, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import useStyles from "./style.js";
const Sidebar = ({
  drawerWidth,
  drawer,
  handleDrawerToggle,
  mobileOpen,
  isNavbarOpen,
}) => {
  const classes = useStyles();
  {
    console.log("isNavbarOpen100", isNavbarOpen);
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  // if (matches) {
  //   handleDrawerToggle({ clickType: "navbar" });
  // }

  console.log("matchesside", matches);
  return (
    <>
      <Box className={classes.sidebar}>
        <Drawer
          className={classes.sidebar}
          sx={{
            display: { xs: "block", sm: "none" },
            ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
              width: drawerWidth.mobile,
              mt: "40px",
            },
          }}
          open={mobileOpen}
          onClose={() => {
            handleDrawerToggle({ clickType: "mobile" });
          }}
        >
          {console.log("drawerWidth.mobile", drawerWidth.mobile)}
          {drawer}
        </Drawer>
        <Drawer
          // open={open}
          // onClose={handleexit}
          className={classes.sidebar}
          open={isNavbarOpen}
          onClose={() => {
            handleDrawerToggle({ clickType: "navbar" });
          }}
          sx={{
            display: { xs: "none", sm: "block" },
            ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
              width: drawerWidth.navbar,
              mt: "40px",
            },
          }}
        >
          {console.log("drawerWidth.navbar", drawerWidth.navbar)}

          {drawer}
        </Drawer>
        {/* <List className={classes.Drawer}>
            <List>
              {["Dasshbord", "Analytic", "Mail"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </List> */}
      </Box>
    </>
  );
};

export default Sidebar;
