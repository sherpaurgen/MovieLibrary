import React from "react";
import TableBody from "./TableBody";
import TableHeader from "../components/TableHeader";

const Table = (props) => {
  const { columns, sortedColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortedColumn={sortedColumn}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
