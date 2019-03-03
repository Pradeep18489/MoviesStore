import React from "react";
import { getMovie } from "../Services/fakeMovieService";
const MoviesForm = ({ match, history }) => {
  const movie = getMovie(match.params.id);
  console.log(movie);
  return (
    <div>
      <h1>Movies Form</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>

            <th>TITLE</th>

            <th>GENRE</th>

            <th>INSTOCK</th>

            <th>RATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{movie._id}</td>
            <td>{movie.title}</td>

            <td>{movie.genre.name}</td>

            <td>{movie.numberInStock}</td>

            <td>{movie.dailyRentalRate}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        value="Back"
        onClick={() => history.push("/movies")}
      >
        Back
      </button>
    </div>
  );
};

export default MoviesForm;
