import React, { useState } from "react";
import { useSortableData } from "./hooks";
import styles from "./DataTable.module.scss";

const ProductTable = (props) => {
  const [value, setValue] = useState(""); //Filter Values

  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : null;
  };

  console.log(items.length);

  return (
    <>
      <table className={styles.datatable}>
        <thead className={styles.datatablethead}>
          <tr>
            <th className={styles.thformname}>
              <button
                type="button"
                onClick={() => requestSort("formname")}
                className={`${styles.theadbtn} ${getClassNamesFor("formname")}`}
              >
                Form Name
              </button>
            </th>
            <th className={styles.thcategory}>
              <button
                type="button"
                onClick={() => requestSort("category")}
                className={`${styles.theadbtn} ${getClassNamesFor("category")}`}
              >
                Category
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr className={styles.tablerow}>
              <td colspan="2" className={styles.tabledata}>
                test
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index} className={styles.tablerow}>
                <td className={styles.tabledata}>{item.formname}</td>
                <td className={styles.tabledata}>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
