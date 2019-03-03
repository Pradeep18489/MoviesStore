import React, { Component } from "react";
import Like from "./Like";
import Table from "../Common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      {
        path: "title",
        label: "Title",
        content: item => {
          return <Link to={`/movies/${item._id}`}>{item.title}</Link>;
        }
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "Like",
        content: item => {
          return <Like liked={item.liked} onClick={() => onLike(item)} />;
        }
      },
      {
        key: "Delete",
        content: item => {
          return (
            <input
              type="button"
              value="Delete"
              className="btn btn-danger"
              onClick={() => onDelete(item)}
            />
          );
        }
      }
    ];
    return (
      <Table
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
