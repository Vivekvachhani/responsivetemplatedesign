import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100vw",
    // height: "100vh",
  },
  title: {
    paddingTop: "16px",
    marginLeft: "10px",
    paddingBottom: "0px",
  },
  Avatar: {
    display: "flex",
    alignItems: "center",
  },
  Avataricon: {
    "& .css-2s90m6-MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },

    // background-color: $primary-background;
    // @include FontStyle(25, 30, 400);
    // border:1px solid $borderColor;
    tab: {
      padding: "5px",
      backgroundColor: "lightgreen",
    },
  },
}));

export default useStyles;
