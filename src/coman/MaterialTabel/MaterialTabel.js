import React from "react";
import MaterialTable from "material-table";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Avatar,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  FormControlLabel,
} from "@mui/material";
import { ClassNames } from "@emotion/react";
import useStyle from "./style";

const MaterialTabel = ({ columns, data, title }) => {
  const classes = useStyle();

  return (
    <div>
      <TableContainer component={Paper} className={classes.root}>
        <Box className={classes.title}>
          <Typography>Latest Transactions</Typography>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box className={classes.Avatar}>
                  <Avatar className={classes.Avataricon}>v</Avatar>
                  <Box>Vivek</Box>
                </Box>
              </TableCell>
              <TableCell>30/06/98 </TableCell>
              <TableCell>$120</TableCell>
              <TableCell>
                <Box className={classes.Active}>
                  <span className={classes.tab}>Active</span>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vivek </TableCell>
              <TableCell>30/06/98 </TableCell>
              <TableCell>$120</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vivek </TableCell>
              <TableCell>30/06/98 </TableCell>
              <TableCell>$120</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* {console.log("columns", columns)}
      <MaterialTable columns={columns} data={data} title={title} /> */}
    </div>
  );
};

export default MaterialTabel;
