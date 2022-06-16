import React from "react";
import Dashbordcontaner from "../module/Dashbord/Dashbordcontaner";
const routes = () => {
  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashbordcontaner,
    },
  ];
  return routes;
};

export default routes;
