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
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleSort = (sortedColumn) => {
    this.setState({ sortedColumn: sortedColumn });
  };

  getPagedData = () => {
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
    //movie array objects gets sorted here in beginning and passed on to the MoviesTable component to display in UI where sorted by title and ascending order. sorted list is saved in sorted variable
    const sorted = _.orderBy(
      filteredmovie,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    //sorted array object is paginated and saved to movies variable
    const movies = Paginate(sorted, currentPage, pageSize);
    return { totalCount: filteredmovie.length, data: movies }; //data set with movies
  };

  render() {
    const count = this.state.movies.length;
    const { pageSize, currentPage, sortedColumn } = this.state;
    // above movies is renamed as allMovies where empty arrary in STATE is replaced by componentDidMount() function

    if (count === 0) return <p>There are no movies</p>;
    const { totalCount, data: movies } = this.getPagedData(); //rename data to movies
    return (
      <div className="row m-5">
        <div className="col-3 ">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            textProperty="name"
            valueProperty="_id"
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>There are currently {totalCount} Movies</p>
          {/* the default is sortedColumn: { path: "title", order: "asc" } */}
          <MoviesTable
            movies={movies}
            sortedColumn={sortedColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
