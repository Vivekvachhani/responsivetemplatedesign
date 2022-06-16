import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    singleCard: {
      //   "&.MuiPaper-root": {
      //     borderRadius: "10px",
      //     boxShadow: "none",
      //     border: `1px solid ${theme.palette.common.borderColor}`,
      //   },
    },
    commonCard: {
      width: "20vw",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      position: "relative",
      //   paddingLeft: theme.spacing(1),
      //   paddingRight: theme.spacing(1),
      borderRadius: ".625rem",
    },
    title: {
      marginTop: "1rem!important",
    },
  };
});
export default useStyle;
