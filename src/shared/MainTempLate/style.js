import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
    minHeight: "calc(100vh - 64px - 61px)",
  },
}));

export default useStyles;
