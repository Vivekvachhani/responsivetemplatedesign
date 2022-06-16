import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    "& .css-zow5z4-MuiGrid-root": {
      // height: "500px",
      // backgroundColor: "black",
      // height: "60px",
      // position: "relative",
      // margin: theme.spacing(1, 0),
      // alignItems: "center",
      // borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      marginTop: "70px",
      backgroundColor: theme.palette.common.backgrondcolor,
      padding: "10px",
    },
    cardMain: {
      padding: theme.spacing(3),
    },
  },
}));

export default useStyles;
