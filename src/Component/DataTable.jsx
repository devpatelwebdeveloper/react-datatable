import React from "react";
import DataTable from "react-data-table-component";
import data, { defaultThemes } from "../utils";
// import data from "./demo";

const SortTable = () => {
  const customStyles = {
    header: {
      style: {
        minHeight: "56px"
      }
    },
    // headRow: {
    //   style: {
    //     // backgroundColor: "red",
    //     color: "white"
    //   }
    // },
    headCells: {
      style: {
        color: "white",
        backgroundColor: "#758391",
        fontWeight: "700",
        fontSize: "16px",
        textAlign: "center",
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          backgroundColor: "#47596d"
        }
      }
    }
    // cells: {
    //   style: {
    //     "&:not(:last-of-type)": {
    //       borderRightStyle: "solid",
    //       borderRightWidth: "1px"
    //     }
    //   }
    // }
  };
  const columns = [
    {
      name: "Form name",
      selector: "formname",
      sortable: true
    },
    {
      name: "Category",
      selector: "category",
      sortable: true
    }
  ];
  return (
    <>
      <DataTable
        title="Find the forms you need quickly and easily."
        columns={columns}
        data={data}
        defaultSortFieldId={1}
        sortIcon=" v"
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
