import React from "react";
const ListGroup = props => {
  return (
    <ul
      className="list-group"
      style={{ margin: "42px 10px", cursor: "pointer" }}
    >
      <li
        className={
          props.currentGenre === "All Genres"
            ? "list-group-item active"
            : "list-group-item"
        }
        onClick={() => {
          props.onGenreChange("All Genres");
        }}
      >
        All Genres
      </li>
      {props.totalGenres.map(genre => (
        <li
          key={genre.name}
          className={
            props.currentGenre === genre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => {
            props.onGenreChange(genre.name);
          }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
