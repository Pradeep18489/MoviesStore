const GetFilteredMoviesOnGenre = (movies, genre) => {
  if (genre === "All Genres") {
    return movies;
  }
  return movies.filter(m => m.genre.name === genre);
};

export default GetFilteredMoviesOnGenre;
