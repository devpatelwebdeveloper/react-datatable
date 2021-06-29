import React, { useState } from "react";
import { useSortableData } from "./hooks";

const ProductTable = (props) => {
  const [value, setValue] = useState(""); //Filter Values

  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
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
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("formname")}
                className={getClassNamesFor("formname")}
              >
                Form Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("category")}
                className={getClassNamesFor("category")}
              >
                Category
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {items
            .filter((item) => {
              if (!value) return true;
              if (
                item.formname.includes(value) ||
                item.category.includes(value)
              ) {
                return true;
              }
              return false;
            })
            .map((item) => (
              <tr>
                <td>{item.formname}</td>
                <td>{item.category}</td>
              </tr>
            ))} */}
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.formname}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
