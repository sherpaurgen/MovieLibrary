import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
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
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
