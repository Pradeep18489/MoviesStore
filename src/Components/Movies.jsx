import React, { Component } from "react";
import { getMovies } from "../Services/fakeMovieService";
import Pagination from "../Common/Pagination";
import GetPageMovies from "../Common/GetPageMovies";
import propTypes from "prop-types";
import ListGroup from "./ListGroup";
import { getGenres } from "../Services/fakeGenreService";
import GetFilteredMoviesOnGenre from "../Common/FilterOnGenre";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
import { Redirect } from "react-router-dom";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage: 1,
      genres: getGenres(),
      currentGenre: "All Genres",
      sortColumn: { path: "title", order: "asc" }
    };
  }

  handleGenreChanged = genre => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handlePageChange = Page => {
    this.setState({ currentPage: Page });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    const pageLength = Math.ceil(
      GetFilteredMoviesOnGenre(movies, this.state.currentGenre).length /
        this.state.pageSize
    );

    const currentPage =
      pageLength < this.state.currentPage ? pageLength : this.state.currentPage;

    this.setState({ movies, currentPage });
  };

  handleClick = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies,
      currentPage,
      pageSize,
      genres,
      currentGenre,
      sortColumn
    } = this.state;

    let filteredMoviesOnGenre = GetFilteredMoviesOnGenre(movies, currentGenre);

    const count = filteredMoviesOnGenre.length;

    const orderedMovies = _.orderBy(
      filteredMoviesOnGenre,
      sortColumn.path,
      sortColumn.order
    );

    let filteredMovies = GetPageMovies(orderedMovies, currentPage, pageSize);

    const allCount = movies.length;

    if (allCount === 0)
      return (
        <p style={{ margin: "10px", fontWeight: "bold" }}>
          There are no movies in the database.
        </p>
      );

    return (
      <React.Fragment>
        <div style={{ textAlign: "right" }}>
          <h6> {this.props.name ? "Hi " + this.props.name : ""}</h6>
        </div>
        <div style={{ display: "flex" }}>
          <ListGroup
            totalGenres={genres}
            currentGenre={currentGenre}
            onGenreChange={this.handleGenreChanged}
          />
          <div style={{ flexGrow: 1 }}>
            <div style={{ padding: "10px", fontWeight: "bold" }}>
              Showing {count} movies in database
            </div>
            <MoviesTable
              movies={filteredMovies}
              onLike={this.handleClick}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              totalMovies={count}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Pagination.propTypes = {
  totalMovies: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired
};
