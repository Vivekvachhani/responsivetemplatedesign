import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3e79f7",
      default: "#1a3353", // color of card title
    },
    secondary: {
      main: "rgb(69, 85, 96)",
      default: "rgba(114,132,154,.7)",
    },
    common: {
      backgrondcolor: "#57c2e6", // color Header
      subTitleColor: "#666c6e", //color of card subtitle
      labelColor: "#00000099", //label color of Input Field
      borderColor: "#e0e0e0",
      previewBorder: "#bdbdbd",
      viewBtnBorder: "#e6ebf1",
    },
    action: {
      hover: "#699dff",
      hoverOpacity: 0.8,
    },
  },
  typography: {
    h5: {
      fontWeight: 700, // title font style
      fontSize: "1.0679rem",
    },
  },
  error: {
    main: "#d32f2f",
  },
  noDataFound: {
    color: "#938f8f",
    iconColor: "#d0d4d7",
    ellipseColor: "#f0f0f0",
    groundColor: "#d9d9d9",
    pathColor: "#fafafb",
  },
  longTextTableCell: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "850px",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
  },
  sidebarBG: "#3e79f71a",
  borderColor: "#e6ebf1", // input field
  shadows: "rgb(0 0 0 / 15%) 0px 1px 4px -1px",
  cardshadow:
    "0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)",
});

export default theme;
