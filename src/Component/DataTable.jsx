import React, { useState } from "react";
import DataTable from "react-data-table-component";
import data, { defaultThemes } from "../utils";
// import data from "./demo";

const SortTable = () => {
  const [filteredData, setFilteredData] = useState(data);
  const customStyles = {
    header: {
      style: {
        minHeight: "56px"
      }
    },

    headCells: {
      style: {
        color: "white",
        backgroundColor: "#758391",
        fontWeight: "700",
        fontSize: "16px",
        textAlign: "right",
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          backgroundColor: "#47596d"
        }
      }
    }
  };
  const columns = [
    {
      name: "Form name",
      selector: "formname",
      sortable: true,
      center: true
    },
    {
      name: "Category",
      selector: "category",
      sortable: true,
      center: true
    }
  ];

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#ffffff"
        d="M16.927 9.625A1 1 0 0016 9.006l-8-.012a1 1 0 00-.7 1.706l3.994 4.006a1 1 0 001.414 0l4.006-3.994a1 1 0 00.213-1.087z"
      />
    </svg>
  );
  const filteration = (e) => {
    let temp = data.filter(e.target.value);
    console.log(temp);
  };
  return (
    <>
      <div>
        <input type="text" onChange={filteration} />
      </div>
      <DataTable
        title="Find the forms you need quickly and easily."
        columns={columns}
        data={filteredData}
        defaultSortFieldId={1}
        sortIcon={icon}
        pagination
        paginationPerPage={25}
        paginationRowsPerPageOptions={[25, 50, 100, 200]}
        striped
        customStyles={customStyles}
      />
    </>
  );
};

export default SortTable;
