import React, { useState } from "react";
import { useSortableData } from "./hooks";
import ReactPaginate from "react-paginate";
import styles from "./DataTable.module.scss";

const ProductTable = (props) => {
  const [currentPage, setCurrentPage] = useState(0); //Pagination

  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : null;
  };

  // Pagination
  const PER_PAGE = 5;
  const pageCount = Math.ceil(items.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;

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
                No matching records found
              </td>
            </tr>
          ) : (
            items.slice(offset, offset + PER_PAGE).map((item, index) => (
              <tr key={index} className={styles.tablerow}>
                <td className={styles.tabledata}>{item.formname}</td>
                <td className={styles.tabledata}>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className={styles.datatablefooter}>
        <div className={styles.datatableshowing}>
          <span>
            Showing {offset + 1} to {offset + PER_PAGE} of {items.length}{" "}
            entries
          </span>
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.paginationLink}
          nextLinkClassName={styles.paginationLink}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
        />
      </div>
    </>
  );
};

export default ProductTable;
