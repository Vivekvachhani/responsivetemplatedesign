// Material UI
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    active: {
      "& .css-i4bv87-MuiSvgIcon-root": {
        color: theme.palette.primary.main,
      },
      "& .css-10hburv-MuiTypography-root": {
        color: theme.palette.primary.main,
      },
      "& .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root": {
        backgroundColor: theme.sidebarBG,
        borderRight: `2px solid ${theme.palette.primary.main}`,
      },
    },
    sidebarMenuItems: {
      cursor: "pointer",
      textDecoration: "none",
    },
  };
});

export default useStyle;
