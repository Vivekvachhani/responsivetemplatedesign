import React from "react";
import Dashbord from "./Dashbord";
const Dashbordcontaner = () => {
  const companyData = [
    {
      title: "Revenue",
      money: "$2,454",
      company: "Compare to last year (2019)",
      count: "-11.4",
    },
    {
      title: "Sales",
      money: "$6,982",
      company: "Compare to last year (2019)",
      count: "8.2",
    },
    {
      title: "Costs",
      money: "$8,310",
      company: "Compare to last year (2019)",
      count: "0.7",
    },
    {
      title: "Costs",
      money: "$9,310",
      company: "Compare to last year (2019)",
      count: "9.2",
    },
  ];
  return (
    <div>
      <Dashbord companyData={companyData} />
    </div>
  );
};

export default Dashbordcontaner;
