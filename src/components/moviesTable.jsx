import React, { Component } from "react";
import Like from "../common/Like";
import TableHeader from "./TableHeader";
import TableBody from "../common/TableBody";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortedColumn } = this.props;
    //sortedColumn: { path: "title", order: "asc" }
    //onSort
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortedColumn={sortedColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
        {/* <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title} </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock} </td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onLike={onLike} />{" "}
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
  }
}

export default MoviesTable;
