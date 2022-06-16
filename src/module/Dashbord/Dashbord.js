import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./style";
import CustomCard from "../../coman/Card/CustomCard";
import MaterialTabel from "../../coman/MaterialTabel/MaterialTabel";
const Dashboard = ({ companyData }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        className={classes.cardMain}
      >
        {companyData?.map((leaveData, index) => {
          return (
            <CustomCard
              key={index}
              title={leaveData.title}
              money={leaveData.money}
              company={leaveData.company}
              count={leaveData.count}
            />
          );
        })}
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <MaterialTabel />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <MaterialTabel />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6}>
          <MaterialTableContainer
            title={"Absent Employees"}
            columns={employeeColumns}
            data={absentEmployeesData}
          />    
          
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <AppreciationContainer appreciationList={appreciationList} />
        </Grid> */}
      </Grid>
    </div>
  );
};
export default Dashboard;
