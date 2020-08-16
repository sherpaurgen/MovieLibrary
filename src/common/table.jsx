import React from "react";
import TableBody from "./TableBody";
import TableHeader from "../components/TableHeader";

const Table = ({ columns, sortedColumn, onSort, data }) => {
  //this is equivalent to destructure where props is pass as argument
  //const Table = (props)
  //const { columns, sortedColumn, onSort, data } = props;
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
