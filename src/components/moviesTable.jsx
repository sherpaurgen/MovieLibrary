import React, { Component } from "react";
import Like from "../common/Like";
import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          movie={movie}
          liked={movie.liked}
          onClick={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortedColumn } = this.props;
    //sortedColumn: { path: "title", order: "asc" }
    //onSort
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortedColumn={sortedColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
