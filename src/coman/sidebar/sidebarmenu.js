import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import { menuName, path } from "../../const/const";
const SidebarMenu = [
  {
    mainMenu: menuName.DASHBOARD,
    icon: <DashboardOutlinedIcon />,
    path: path.DASHBOARD,
  },
];
export default SidebarMenu;
