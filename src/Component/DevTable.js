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

  function filteration(data, value) {
    const newarr = data.filter((item) => {
      if (!value) return true;
      if (
        item.formname.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    return newarr;
  }
  return (
    <>
      {/* <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div> */}
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
          {items.map((item, index) => (
            <tr key={index} className={styles.tablerow}>
              <td className={styles.tabledata}>{item.formname}</td>
              <td className={styles.tabledata}>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
