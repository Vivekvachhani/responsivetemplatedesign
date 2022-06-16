import React from "react";
import MaterialTabel from "./MaterialTabel";
const MaterialTabelcontaner = () => {
  columns = [
    { title: "Adı", field: "name" },
    { title: "Soyadı", field: "surname" },
    { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
    {
      title: "Doğum Yeri",
      field: "birthCity",
    },
  ];
  data = [
    {
      name: "Mehmet",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
  ];
  return (
    <div>
      <MaterialTabel
        columns={columns}
        data={data}
        title="Latest Transactions"
      />
    </div>
  );
};

export default MaterialTabelcontaner;
