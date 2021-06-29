import React, { useState } from "react";
import ProductTable from "./DevTable";

const FilterData = ({ amazing }) => {
  const [filteredData, setFilteredData] = useState("");

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
      <div>
        <input
          type="text"
          value={filteredData}
          onChange={(e) => setFilteredData(e.target.value)}
        />
      </div>
      <ProductTable data={filteration(amazing, filteredData)} />
    </>
  );
};

export default FilterData;
