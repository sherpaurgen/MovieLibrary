import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortAmountUp } from "@fortawesome/free-solid-svg-icons";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";

// columns:array
// sortcolumn: object
// onsort: function
//sortedColumn: { path: "title", order: "asc" }sort-amount-up

export default class TableHeader extends Component {
  raiseSort = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (sortedColumn.path === path) {
      // here path may be "path: "genre.name""
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };

  renderSortIcon = (column) => {
    console.log("sortcolorder> ", this.props.sortedColumn);
    const { sortedColumn } = this.props;
    if (column.path !== this.props.sortedColumn.path) return null;
    if (sortedColumn.order === "asc") {
      return <FontAwesomeIcon icon={faSortAmountUp} />;
    }
    return <FontAwesomeIcon icon={faSortAmountDown} />;
  };

  render() {
    return (
      <thead style={{ cursor: "pointer" }}>
        <tr>
          {this.props.columns.map((col) => (
            <th
              key={col.path || col.key}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label}
              {this.renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
// columns = [
//   { path: "title", label: "Title" },
//   { path: "genre.name", label: "Genre" },
//   { path: "numberInStock", label: "Stock" },
//   { path: "dailyRentalRate", label: "Rate" },
//   {
//     key: "like",
//     content: (movie) => (
//       <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
//     ),
//   },
//   {
//     key: "delete",
//     content: (movie) => (
//       <button
//         onClick={() => this.props.onDelete(movie)}
//         className="btn btn-danger btn-sm"
//       >
//         Delete
//       </button>
//     ),
//   },
// ];
