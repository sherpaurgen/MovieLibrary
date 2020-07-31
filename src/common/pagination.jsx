import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  //object destructuring
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log("currentpage", currentPage);
  console.log("itemscount=", itemsCount);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  console.log("pages value: ", pages);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((pg) => (
          <li key={pg} className="page-item">
            <a className="page-link" onClick={() => onPageChange(pg)} href="#">
              {pg}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
