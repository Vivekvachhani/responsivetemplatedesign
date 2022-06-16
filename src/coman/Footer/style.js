import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    // margin: theme.spacing(0, 3),
    alignItems: "center",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    backgroundColor: theme.palette.common.backgrondcolor,
  },
}));

export default useStyles;
