import * as React from "react";
import PropTypes from "prop-types";

// Material UI
import { Card, Grid, CardContent, Typography, Box } from "@mui/material";

//Internal
import useStyle from "./style";

const CustomCard = ({ title, money, subTitle, company, count }) => {
  const classes = useStyle();

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card className={classes.leaveSingleCard}>
        <CardContent className={classes.cardContent}>
          {/* <Box className={classes.icon}>{icon}</Box> */}
          <Box>
            <Typography className={classes.subTitle} variant="h6">
              {title}
            </Typography>
            <Typography className={classes.title} variant="h5">
              {money + "  " + count}
            </Typography>
            <Typography className={classes.title} variant="h10">
              {company}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomCard;
