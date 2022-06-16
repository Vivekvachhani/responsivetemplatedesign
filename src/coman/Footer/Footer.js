import React from "react";
// Material UI
import { Box, Typography } from "@mui/material";

import useStyles from "./style.js";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box>
        <Typography variant="body2">
          Copyright © 2022 <strong> Emilus</strong> All rights reserved.
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          Term & Conditions <strong> |</strong> Privacy & Policy
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
