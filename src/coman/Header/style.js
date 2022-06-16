// Material UI
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    appBar: {
      top: "0px",
      position: "fixed",
      zIndex: theme.zIndex.drawer + 1,
      display: "flex",
      width: "100%",
      height: "70px",
      lineHeight: "70px",
      padding: theme.spacing(0),
      backgroundColor: theme.palette.common.backgrondcolor,
    },
    header: {
      display: "flex",
      width: "100%",
      boxShadow: theme.shadows,
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      transition: "all 0.2s ease 0s",
      marginLeft: theme.spacing(3),
      alignItems: "center",
      marginTop: theme.spacing(2),
    },
    headerNav: {
      display: "flex",
      justifyContent: "space-between",
      transition: " all 0.3s ease 0s",
      alignItems: "center",
      padding: "0px 20px",
    },
  };
});

export default useStyle;
