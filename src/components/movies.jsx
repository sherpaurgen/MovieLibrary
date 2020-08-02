import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "../common/pagination";
import Paginate from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "../common/listGroup";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortedColumn: { path: "title", order: "asc" },
  };

  //get the movie and genres list
  componentDidMount() {
    const genres = [
      { name: "All Genres", _id: "5b21ca3ee987897" },
      ...getGenres(),
    ];
    this.setState({ movies: getMovies(), genres: genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = (pg) => {
    this.setState({ currentPage: pg });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleLike = () => {
    console.log("liked man!");
  };
  handleSort = (path) => {
    const sortedColumn = { ...this.state.sortedColumn };
    if (sortedColumn.path === path) {
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.setState({ sortedColumn: sortedColumn });
  };

  render() {
    const count = this.state.movies.length;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortedColumn,
      movies: allMovies,
    } = this.state;

    const filteredmovie =
      selectedGenre && selectedGenre._id && selectedGenre.name !== "All Genres"
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(
      filteredmovie,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    console.log("filteredmov", sorted);

    const movies = Paginate(sorted, currentPage, pageSize);

    if (count === 0) return <p>There are no movies</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            textProperty="name"
            valueProperty="_id"
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>There are currently {filteredmovie.length} Movies</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredmovie.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
