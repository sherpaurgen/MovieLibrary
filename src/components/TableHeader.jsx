import React, { Component } from "react";
// columns:array
// sortcolumn: object
// onsort: function

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

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((col) => (
            <th
              key={col.path || col.key}
              onClick={() => this.raiseSort(col.path)}
            >
              {col.label}
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
