import React, { Component } from "react";
// columns:array
// sortcolumn: object
// onsort: function

export default class TableHeader extends Component {
  raiseSort = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (sortedColumn.path === path) {
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
